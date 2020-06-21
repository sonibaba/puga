<template>
  <div>
    <div class="q-px-md q-py-lg" v-if="posts">
      <div class="row q-col-gutter-md">

        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
          <lateral  categorie="Agropecuarios"/>
        </div>
        <div class="col-12 col-sm-8 col-md-9 col-lg-9">
          <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/agropecuarios/borreguera-1-20.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Malla borreguera
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-borreguera" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/agropecuarios/pollera-1.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Malla gallinera
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-gallinera" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/agropecuarios/criba-5-5.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Malla criba
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-criba" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/agropecuarios/multimalla-1-22.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Multimalla
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-multimalla" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/agropecuarios/mosquitera-1-20.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Malla Mosquitera
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/malla-mosquitera" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/agropecuarios/grapa-1.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Grapa
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/grapa" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/agropecuarios/puas-351.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Puas
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/puas" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/agropecuarios/poste-t.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Poste ligero y accesorios
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/poste-t" color="orange-14" class="full-width"  label="Ver"
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