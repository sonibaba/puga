<template>
  <div>
    <div class="q-px-md q-py-lg" v-if="posts">
      <div class="row q-col-gutter-md">

        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
          <lateral  categorie="Acero Negro"/>
        </div>
        <div class="col-12 col-sm-8 col-md-9 col-lg-9">
          <q-btn label="Instalacion de Cercos de Malla Ciclónica" color="orange-14" @click="icon = true" /> <br> <br>
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
      <p class="text-faded">Lo sentimos, no hay productos de CERCAS PERRIMENTALES</p>
      <q-btn color="secondary" style="width:200px;" @click="$router.push('/')">Regresar</q-btn>
    </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Cercas Perimentales</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <img :src="require('../../assets/cerca.png')"/>
          <q-markup-table>
            <tbody>
              <tr>
                <td class="text-left">1. Capucha simple</td>
                <td class="text-left">7. Espada integral simple</td>
              </tr>
              <tr>
                <td class="text-left">2. Abrazadera de arranque</td>
                <td class="text-left">8. Alambre de púas</td>
              </tr>
              <tr>
                <td class="text-left">3. Abrazadera de tensión</td>
                <td class="text-left">9. Cercha de tensión</td>
              </tr>
              <tr>
                <td class="text-left">4. Cople universal</td>
                <td class="text-left">10. Malla ciclónica</td>
              </tr>
              <tr>
                <td class="text-left">5. Barra superior y retenida</td>
                <td class="text-left">11. Poste lineal</td>
              </tr>
              <tr>
                <td class="text-left">6. Capucha marco</td>
                <td class="text-left">12. Poste esquinero</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>
      </q-card>
    </q-dialog>
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
        posts: [],
        icon: false,
        bar: false,
        bar2: false,
        toolbar: false
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
             if (products[i].categorie == 'cercas') {
              this.posts.push(products[i])
             } 
           }
      console.log(this.posts)
  }
}
</script>

