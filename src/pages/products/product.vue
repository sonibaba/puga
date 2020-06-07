<template>
  <div>
    <div class="q-px-md q-py-lg">
      <div>
        <div class="col-12 col-sm-8 col-md-7 col-lg-7 ">
          <q-card flat class="my-card bg-grey-1">
            <q-card-section class="bg-teal text-white">
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h4 text-center">Cotice aqui sus productos</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
          <q-separator />
          <q-card flat class="my-card" >
            <q-card-section>
              <div class="row q-col-gutter-md justify-around">
              <div class=" col-12 col-sm-6 col-md-3 col-lg-3">
                <img :src="require('../../assets/categories/'+product.image)" />
              </div>

              <div class="col-12 col-sm-4 col-md-3 col-lg-3">
                <q-card flat class="my-card">
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

              <div class="col-12 col-sm-3 col-md-3 col-lg-3">
                <q-card flat class="my-card" vertical >
                  <q-card align="center" >
                  <q-card-section>
                    <div class="text-h6 text-orange-14">¿Quienes somos?</div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-left text-subtitle2 text-secondary">Somos empresa dedicada al suministro de materiales para construcción de primera calidad. Formamos parte de las redes de Cementos y Aceros que nos permite una amplia variedad de productos de la mas alta calidad y el precio mas bajo.</div>
                    <!-- <div class="text-subtitle2">{{item.description}}</div> -->
                  </q-card-section>
                  <q-card-section>
                    <div class="text-h6 text-orange-14">Servicios</div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-left text-subtitle2 text-secondary">Contamos con una amplia variedad de servicios para facilitar la cotización, optimización y entrega de los materiales para construcción de tu obra.</div>
                    <!-- <div class="text-subtitle2">{{item.description}}</div> -->
                  </q-card-section>
                  <!-- <q-btn :to="'/product/'+item._id.$oid" align="right" flat class="q-mr-xs" label="Ver" icon-right="search" /> -->
                  <br>
                  </q-card>
                </q-card>
              </div>
            </div>
            </q-card-section>
          </q-card>
          <!-- <div class="col-12 col-sm-4 col-md-4 col-lg-5" v-if="this.data === null">
              <br>
              <div class="text-center">
                <p>
                  <img src="~assets/sad.svg" style="width:30vw;max-width:150px;">
                </p>
                <p class="text-faded">No has seleccionado ningun producto</p>
                <q-btn color="secondary" style="width:200px;" @click="$router.push('/')">Regresar</q-btn>
              </div>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

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
