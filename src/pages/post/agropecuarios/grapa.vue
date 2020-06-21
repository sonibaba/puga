<template>
  <div>
    <div class="q-px-md q-py-lg" v-if="posts">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
          <lateral  categorie="Grapa"/>
        </div>
          <div class="col-12 col-sm-8 col-md-9 col-lg-9">
              <div>
                <q-option-group
                  v-model="separator"
                  inline
                  class="q-mb-md"
                  :options="[
                    { label: 'Horizontal', value: 'horizontal' },
                    { label: 'Vertical', value: 'vertical' },
                    { label: 'En celda', value: 'cell' },
                    { label: 'Nada', value: 'none' },
                  ]"
                />
                <q-markup-table :separator="separator" flat bordered>
                  <thead>
                    <tr>
                      <th class="text-left">Nombre</th>
                      <th class="text-left">Descripción</th>
                      <th class="text-left">Precio</th>
                      <th class="text-left">Detalles</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr v-for="(item,idex) in posts" :key="idex">
                      <td class="text-left">{{item.name}}</td>
                      <td class="text-left">{{item.description}}</td>
                      <td class="text-left text-green my-font"><strong>$ {{item.price}}</strong></td>
                      <td class="text-left">
                        <q-btn :to="'/product/'+item.id" color="orange-14" class="full-width"  label="Ver" icon-right="search" />
                      </td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import lateral from '../../../components/lateral'
import products from '../../../products'
export default {
    components: {
        lateral
    },
  data () {
    return {
        posts: [],
        separator: 'vertical'
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
             if (products[i].categorie == 'agropecuarios-grapa') {
              this.posts.push(products[i])
             } 
           }
  }
}
</script>