<template>
  <div>
    <div class="q-px-md q-py-lg" v-if="posts">
      <div class="row q-col-gutter-md">

        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
          <lateral  categorie="Cercas"/>
        </div>
        <div class="col-12 col-sm-8 col-md-9 col-lg-9">
          <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/concertina.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Seguridad
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/concertina" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/ciclonica-1-50.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Malla ciclonica
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-ciclonica" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/ciclonica-ref-1-50.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Malla ciclonica reforzada
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-reforzada" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/ciclonica-pvc-1.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Malla ciclonica PVC
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-verde" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/panel-verde-1.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Panel Reja San
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-panel" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/abrazadera-blanca.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Accesorios reja panel
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/panel-accesorios" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/tubo-1-1-2.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Tuberia galvanizada
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-tubo" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/cercha-1-50.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Cerchas solera
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/cercha" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/abrazadera-2-1-2.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Accesorios malla ciclonica
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-accesorios" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/espada-doble-2.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Espadas
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/espadas" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/bisagra-3.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Bisagras
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/bisagras" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/cercas/decorativa-verde-6.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Cinta decorativa
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/decorativa" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
          </div> <br><br>
          <div class="text-center" v-if="posts.length === 0">
      <p>
        <img src="~assets/sad.svg" style="width:30vw;max-width:150px;">
      </p>
      <p class="text-faded">Lo sentimos, no hay productos de mangueras</p>
      <q-btn color="secondary" style="width:200px;" @click="$router.push('/')">Regresar</q-btn>
    </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lateral from '../../components/lateral'
import products from '../../products'
export default {
    components: {
        lateral
    },
  data () {
    return {
        posts: []
    }
    
  },
  computed:{
  },
   methods: {
    async getPost () {
    }
  },
  created(){
      /*this.posts = products*/
      for (var i = 0; i < products.length; i++) {
             if (products[i].categorie == 'mangueras') {
              this.posts.push(products[i])
             } 
           }
  }
}
</script>