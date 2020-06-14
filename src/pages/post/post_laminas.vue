<template>
  <div>
    <div class="q-px-md q-py-lg" v-if="posts">
      <div class="row q-col-gutter-md">

        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
          <lateral  categorie="Acero Negro"/>
        </div>
        <div class="col-12 col-sm-8 col-md-9 col-lg-9">
          <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center" v-for="(item,idex) in posts" :key="idex">
                <q-card flat bordered class="my-card">

                <q-img height="250" :src="require('../../assets/categories/'+item.image)" >
                </q-img>
                <q-separator/>
                <q-card-section>
                    <div class="text-subtitle2 text-center">{{item.description}}</div>
                    <div class="text-h6 text-center text-orange-14">${{item.price}} MXN </div>
                    <div class="text-subtitle2 text-secondary">{{ item.title }}</div>
                    <!-- <div class="text-subtitle2">{{item.description}}</div> -->
                </q-card-section>
                
                <!-- <q-img  width="320px" height="250px" :src="require('../../assets/categories/'+item.image)" >
                  <div class="absolute-bottom text-subtitle2 text-center">
                    <b>{{item.name}}</b>
                  </div>
                </q-img>
                <q-separator/>
                <q-card-section>
                    <div class="text-subtitle2 text-center">{{item.description}}</div>
                    <div class="text-h6 text-center text-orange-14">${{item.price}} MXN </div>
                    <div class="text-subtitle2 text-secondary">{{ item.title }}</div>
                </q-card-section> -->
                
                <q-btn :to="'/product/'+item.id" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                </q-card>
              </div>
          </div> <br><br>
          <div class="text-center" v-if="posts.length === 0">
      <p>
        <img src="~assets/sad.svg" style="width:30vw;max-width:150px;">
      </p>
      <p class="text-faded">Lo sentimos, no hay productos de LAMINAS y PERFILES</p>
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
             if (products[i].categorie == 'laminas') {
              this.posts.push(products[i])
             } 
           }
      console.log(this.posts)
  }
}
</script>

