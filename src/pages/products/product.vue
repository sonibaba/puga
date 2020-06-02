<template>
  <div class="row justify-center q-col-gutter-sm">
    <div class="col-12 col-sm-6 col-md-3 col-lg-4">
      <q-carousel swipeable animated arrows v-model="slide" :fullscreen.sync="fullscreen" infinite thumbnails>
        <q-carousel-slide :name="1" :img-src="require('../../assets/categories/'+product.image)" />
        <q-carousel-slide :name="2" :img-src="require('../../assets/categories/'+product.image)" />
        <q-carousel-slide :name="3" :img-src="require('../../assets/categories/'+product.image)" />
        <template v-slot:control>
                <q-carousel-control position="bottom-right" :offset="[18, 18]">
                  <q-btn push round dense color="white" text-color="primary"
                    :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="fullscreen = !fullscreen" />
                </q-carousel-control>
</template>
          </q-carousel>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
          <q-card flat class="my-card">
            <q-card-section>
              <div class="text-h4 text-blue-grey-10">{{product.description}}</div>
              <div class="text-h6 text-blue-grey-7">{{product.title}}</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="text-h4 text-blue-grey-10">${{product.price}} MXN</div>
            </q-card-section>
            <!-- <q-btn  outline class="q-mr-xs"  /> -->
            <q-card-section>
              <q-btn icon-right="shopping_cart" @click="addProduct(product.id)" size="20px" class="q-px-xl q-py-xs"
                color="deep-orange-12" label="agregar al carrito" />
            </q-card-section>
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
          // position: 'top-right',
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
