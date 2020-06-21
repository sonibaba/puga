<template>
  <div>
    <div class="q-px-md q-py-lg" v-if="posts">
      <div class="row q-col-gutter-md">

        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
          <lateral  categorie="Clavos"/>
        </div>
        <div class="col-12 col-sm-8 col-md-9 col-lg-9">
          <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card  class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/clavos/clavo-3.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Clavos para madera
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/clavos-madera" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/clavos/clavo-concreto-3.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Clavos para concreto
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/clavos-concreto" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center">
                <q-card class="my-card">
                  <q-img height="500" :src="require('../../assets/categories/clavos/clavo-paraguas.png')" >
                    <div class="text-subtitle2 absolute-bottom text-center">
                      Clavos paraguas
                    </div>
                  </q-img>
                  <q-card-actions>
                    <q-btn to="/clavos-paraguas" color="orange-14" class="full-width"  label="Ver"
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