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
                <div class=" text-h4 text-white text-center">Proyectos Puga</div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div class="my-font text-h6 text-white ">VARIEDAD DE MATERIALES PARA TUS PROYECTOS</div>
                <!-- <div class="text-subtitle2 text-white">realiza tus ideas al mas bajo costo</div> -->
                <br>
                <q-card class="my-card">
                  <q-card-section>
                     <p class="text-center text-secondary text-h6 my-font">
                        <q-icon style="font-size: 1.4em;" name="access_time"/>
                        Horario de atención
                      </p>
                      <p class="text-center text-secondary text-subtitle2 my-font">
                        Lunes a Viernes <br> 08:00 - 17:00 <br>
                        Sabado <br> 08:00 - 13:00
                      </p>
                  </q-card-section>
                </q-card>
              </q-card-section>
            </q-card>
          </div>
          <br>

          <q-btn class="full-width" size="22px" color="orange-8" text-color="white" label="Escribenos" />
        </div>
      </div>
      <div> <br><br><br><br>
            <q-card flat class="my-card">
              <q-card-section>
                <div class="text-center text-secondary my-font text-h6">
                  <q-img width="80px" src="https://www.pinclipart.com/picdir/big/258-2581791_google-maps-markerphoto-imagegoogle-maps-api-clipart.png"/>
                </div>
                <div class="text-center text-secondary my-font text-h6">
                  Av. Ciro Purata #100 Col. Cuauhtémoc CP. 79040 <br> (frente a las taquillas de la feria)
                </div>
              </q-card-section>
              <q-card-section>
                <q-btn class="full-width" to="/location" size="22px" color="orange-8" text-color="white" label="Ubicación" />
              </q-card-section>
            </q-card>
          </div>
          <br><br>
      <div class="q-pt-none q-pr-none q-gutter-xl">
      <q-banner class="bg-white-8 text-black">
        <h4 class="text-center text-secondary my-font">Soluciones para hacer crecer tu negocio</h4>
        <p class="text-center text-secondary my-font">Desde proteger al campo, construir una casa, desarrollar la infraestructura de la ciudad, <br> conoce nuestras soluciones y portafolio para cada mercado </p> <br>
      </q-banner>
    </div>
<br><br><br><br>
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
    <div class="q-px-md q-py-lg" id="contacto">
      <q-card flat class="flex flex-center" >
        <!-- <q-parallax :src="require('../../assets/02.jpg')" :width="" :height="150" /> -->
        <q-card-section class="q-pa-md q-gutter-md">
          <div class="text-h3">Contactanos</div> <br>

          <form @submit.prevent.stop="simulateProgress">

            <q-input ref="name"  v-model="form.name" label="Nombre" lazy-rules
              :rules="[rules.required]" />

            <q-input ref="email"  v-model="form.email" label="Correo Electronico" lazy-rules
              :rules="[rules.required, rules.email]" />

            <q-input ref="tel"  v-model="form.tel" mask="###-###-####" label="Numero telefonico" lazy-rules
              :rules="[rules.minTel]" />

            <q-input
              ref="text"
              v-model="form.text"
              label="Escribenos algo"
              :rules="[rules.required]"              
              autogrow
            />

            <q-btn class="full-width q-mt-md" type="submit" :loading="loading"
              color="positive" label="Enviar" icon="cloud_upload" />
          </form>
        </q-card-section>
      </q-card>
    </div>
  </div>
    </div>
  </div>
</template>
<script>
  import {
    openURL
  } from 'quasar'
  import emailjs from 'emailjs-com';  
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
        post: [],
        email: '',
        /*form: {
          name: 'soni',
          email: 'soni15690216@gmail.com',
          text: 'prueba ',
          tel: '4811475172'
        },*/
        form: {
          name: '',
          email: '',
          text: ' ',
          tel: ''
        },
        isPwd: true,
        loading: false,
        rules: {
          required: value => !!value || 'Campo requerido',
          counter: value => value.length <= 20 || 'Maximo 20 carácteres',
          min: v => v.length >= 8 || 'Minimo 8 carácteres',
          minTel: v => v.length === 12 || 'Inserte los 10 digitos',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Correo invalido'
        }
        }
      }
    },
    methods: {
      openURL,
      simulateProgress() {
        event.preventDefault()
        this.$refs.name.validate()
        this.$refs.email.validate()
        this.$refs.tel.validate()
        this.$refs.text.validate()
        if (this.$refs.email.hasError || this.$refs.name.hasError || this.$refs.tel.hasError || this.$refs.text.hasError) {
          this.$q.notify({
            color: 'negative',
            position: 'top-right',
            timeout: 3500,
            message: 'Llena los campos correctamente'
          })
        } else {
          this.sendEmail()
        }
      },
      sendEmail(){
        
        var message = this.form.text + "<br><br> <b>Tel:</b> " + this.form.tel
        /*console.log(message)*/
        var template_params = {
           "reply_to": this.form.email,
           "from_name": this.form.name,
           "to_name": "Proyectos puga",
           "message_html": message 
        }

        var service_id = "default_service";
        var template_id = "puga2";
        emailjs.send(service_id, template_id, template_params)
          .then((result) => {
              console.log('SUCCESS!', result.status, result.text);
              this.succes()
          }, (error) => {
              console.log('FAILED...', error);
          });
      },
      succes(){
        this.$q.notify({
          message: 'Mensaje enviado',
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
        this.form.name = ''
        this.form.email = ''
        this.form.tel = ''
        this.form.text = ''
      }
    },
    created() {
      emailjs.init("user_D6GyQpULvCwA4JWXdZz5r");
    }
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
