<template>
  <div>
    <div class="q-px-md q-py-lg" v-if="posts">
      <div class="row q-col-gutter-md">

        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
          <lateral  categorie="Mangueras"/>
        </div>
        <div class="col-12 col-sm-8 col-md-9 col-lg-9">
          <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/segueta1.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Segueta
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-segueta" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/barreta.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Barreta
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-barreta" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/carretrilla-50.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Carretillas
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-carretillas" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/cavador-madera.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Excavacion
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-excavacion" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/cincel-1-2-10.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Cincel y cuña
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-cincel" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/cuchara.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Cuchara
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-cuchara" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/hacha.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Hacha
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-hacha" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/marro-2.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Marro y martillo
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-marro" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/azadon.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Azadon
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-azadon" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/taquete-plastico-1-4.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Taquetes
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-taquetes" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/broca-1-2-larga.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Brocas
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-brocas" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/aramella-cerrada-25.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Armellas
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-armellas" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/omega-3.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Abrazadera omega
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-omega" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/caja-3.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Cajas y chalupas
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-caja" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/herramientas/guantes.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                    Guantes
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/herramientas-guantes" color="orange-14" class="full-width"  label="Ver"
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