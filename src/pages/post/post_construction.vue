<template>
  <div>
    <!-- <banner /> -->
    <div class="q-px-md q-py-lg" v-if="posts">
      <div class="row q-col-gutter-md">

        <div class="col-12 col-sm-6 col-md-2 col-lg-2">
          <lateral  categorie="Materiales"/>
        </div>
        <div class="col-12 col-sm-6 col-md-10 col-lg-10">
          
          <q-separator />
          <br>
          <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 items-center col-md-3 col-lg-3 justify-center" v-for="(item,idex) in posts" :key="idex">
                <q-card flat bordered class="my-card">

                <!-- <q-img :src="'https://ik.imagekit.io/cozcyt/tienda/'+item.imageOne+''" class="rounded-borders"> -->
                <q-img width="220px" height="220px" :src="require('../../assets/categories/'+item.image)" >
                </q-img>
                <q-separator/>
                <q-card-section>
                    <div class="text-h4 text-orange-14">${{item.price}} MXN </div>
                    <div class="text-subtitle2">{{item.description}}</div>
                </q-card-section>
                <q-card-section>
                    <div class="text-subtitle2 text-secondary">{{ item.title }}</div>
                    <!-- <div class="text-subtitle2">{{item.description}}</div> -->
                </q-card-section>
                
                
                <q-btn :to="'/product/'+item.id" color="orange-14" class="full-width"  label="Ver"
                    icon-right="search" />
                </q-card>
              </div>
          </div> <br><br>
          <div class="text-center" v-if="posts.length === 0">
      <p>
        <img src="~assets/sad.svg" style="width:30vw;max-width:150px;">
      </p>
      <p class="text-faded">Lo sentimos, no hay productos de ropa</p>
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
        var data = []
        data.push({
            'tag': 'Accesorios'
        });
    }
  },
  created(){
      this.posts = products      
      this.getPost()
  }
}
</script>