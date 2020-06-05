<template>
  <div class="row justify-center q-col-gutter-sm">
    <div class="col-12 col-sm-6 col-md-4 col-lg-5">
          <q-img :height="250" :src="require('../../assets/categories/'+product.image)" />
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
          <q-card flat bordered class="my-card">
            <q-card-section>
              <div class="text-h4 text-blue-grey-10 my-font">{{product.name}}</div>
              <div class="text-h6 text-blue-grey-10 my-font">{{product.description}}</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="text-h4 text-green text-center my-font">$ <b>{{product.price}}</b> MXN</div>
            </q-card-section>
            <!-- <q-btn  outline class="q-mr-xs"  /> -->
            <q-card-section>
              <q-btn icon-right="shopping_cart" @click="addProduct(product.id)"  class="full-width"
                color="deep-orange-12" label="agregar a la cotización" />
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <br>
          <!-- <div class="text-h5 my-font">Tal vez te interesen</div> -->
          <q-card flat bordered class="my-card" vertical >
            <q-card align="center" >
            <q-card-section>
              <div class="text-h6 text-orange-14">Proyectos puga</div>
            </q-card-section>
            <q-card-section>
              <div class="text-left text-subtitle2 text-secondary">Alguna duda</div>
              <!-- <div class="text-subtitle2">{{item.description}}</div> -->
            </q-card-section>
            <!-- <q-btn :to="'/product/'+item._id.$oid" align="right" flat class="q-mr-xs" label="Ver" icon-right="search" /> -->
            <br>
            </q-card>
          </q-card>
        </div>
      </div>
</template>

<style scoped>
  .tachado {
    text-decoration: line-through;
  }
</style>

<script>
  //   import {
  //     api
  //   } from '../../../api/index'
  import products from '../../products'
  import EventBus from '../../bus'
  export default {
    components: {},
    data() {
      return {
        data: [],
        id: '',
        product: [],
        info: [],
        profile: [],
        information: [],
        slide: 1,
        fullscreen: false,
        relatedProduct: []
      }
    },
    methods: {
      reload() {
        location.reload();
      },
      addProduct(id) {
        var getArray = localStorage.getItem('shopping');
        if (getArray === null) {
          var array = [id];
          localStorage.setItem('shopping', JSON.stringify(array));
          var getArray = localStorage.getItem('shopping');
          var niu = JSON.parse(getArray)
          EventBus.$emit('shoppingCart')
        } else {
          var niu = JSON.parse(getArray)
          var count = Object.keys(niu).length
          niu.push(id)
          localStorage.setItem('shopping', JSON.stringify(niu));
          let sinRepetidos = niu.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
          localStorage.setItem('shopping', JSON.stringify(sinRepetidos));
          EventBus.$emit('shoppingCart')
        }

        this.$q.notify({
          message: 'Agregado a tu cotización',
          color: 'green-8',
          position: 'top-right',
          timeout: 3500,
          icon: 'report_problem',
          textColor: 'white',
          actions: [{
            icon: 'close',
            color: 'white'
          }]
        })
      },
      async getRelatedProduct(tag, id) {
        var data = []
        data.push(tag)
        data.push(id)
        try {
          const resp = await api.post('/getRelatedProduct', data)
          this.relatedProduct = resp.data
          console.log(this.relatedProduct);
        } catch (error) {
          console.log(error);
        }
      }
    },
    computed: {},
    created() {
      // this.getProduct(this.$route.params.idProduct)
      this.id = this.$route.params.idProduct
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(this.id)) {
          this.product = products[i]
        }
      }
    }
  }
</script>
