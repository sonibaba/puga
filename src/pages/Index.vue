<template>
  <div>
    <div class="q-px-md q-py-lg">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-sm-6 col-md-8 col-lg-8">
          <q-carousel animated v-model="slide" arrows navigation infinity autoplay height="505px" infinite>
            <q-carousel-slide :name="1" :img-src="require('../assets/1.jpeg')">
            </q-carousel-slide>
            <q-carousel-slide :name="2" :img-src="require('../assets/2.jpg')">
            </q-carousel-slide>
            <q-carousel-slide :name="3" :img-src="require('../assets/3.jpeg')">
            </q-carousel-slide>
            <q-carousel-slide :name="5" :img-src="require('../assets/4.jpeg')">
            </q-carousel-slide>
            <q-carousel-slide :name="6" :img-src="require('../assets/5.jpeg')">
            </q-carousel-slide>
            <q-carousel-slide :name="7" :img-src="require('../assets/6.jpeg')">
            </q-carousel-slide>
            <q-carousel-slide :name="8" :img-src="require('../assets/fabrica.jpg')">
            </q-carousel-slide>
            <q-carousel-slide :name="9" :img-src="require('../assets/fabrica2.jpg')">
            </q-carousel-slide>
            <q-carousel-slide :name="10" :img-src="require('../assets/presentacion.jpg')">
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
          <div>
            <q-card flat class="my-card bg-orange-8">
              <q-card-section>
                <div class=" text-h4 text-white">Proyectos Puga</div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div class="my-font text-h6 text-white">VARIEDAD DE MATERIALES PARA TUS PROYECTOS</div>
                <!-- <div class="text-subtitle2 text-white">realiza tus ideas al mas bajo costo</div> -->
                <br>
                <q-btn class="full-width" size="22px" color="white" text-color="orange-8" label="Cotice con nosotros" />
              </q-card-section>
            </q-card>
          </div>
          <br>
          <div>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <!-- <q-separator color="orange"/> -->
                <br>
                <div class="text-center text-secondary my-font text-h6">Av. Ciro Purata #100 Col. Cuauhtémoc CP. 79040</div>
              </q-card-section>
              <q-card-section>
                <q-btn class="full-width" to="/location" size="22px" color="orange-8" text-color="white" label="Ubicación" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="q-pt-none q-pr-none q-gutter-xl">
      <q-banner class="bg-white-8 text-black">
        <h4 class="text-center text-secondary my-font">Soluciones para hacer crecer tu negocio</h4>
        <p class="text-center text-secondary my-font">Desde proteger al campo, construir una casa, desarrollar la infraestructura de la ciudad, <br> conoce nuestras soluciones y portafolio para cada mercado </p>
      </q-banner>
    </div>

    <div class="q-pa-none">
    <q-parallax>
      <template v-slot:media>
        <img src="../assets/background.jpeg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.75 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="../assets/puga-blanco.png" style="width: 150px; height: 150px; border-radius: 2em">
          <div class="text-h5 text-white text-center">Distribuidora de Cemento y Aceros <b>PUGA</b></div>
          <div class="text-h6 text-grey-3 text-center">
            2020
          </div>
        </div>
      </template>
    </q-parallax>
  </div>
    </div>
  </div>
</template>


<script>
  import {
    openURL
  } from 'quasar'
  export default {
    name: 'Index',
    components: {
      // banner
    },
    data() {
      return {
        leftDrawerOpen: false,
        slide: 1,
        slide2: 1,
        post: []
      }
    },
    methods: {
      openURL,
      // async getPots() {
      //   try {
      //     var resp = await api.post('/getPostIndex')
      //     this.post = resp.data
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
    },
    created() {}
  }
</script>
<style>
  .my-font {
    font-family: 'sans';
  }  
  * {
    font-family: 'sans';
  }

</style>
