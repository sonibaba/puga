<template>
  <div>
    <div class="q-px-md q-py-lg">
      <div ref="content" class="row q-col-gutter-md justify-center">
        <div  class="col-12 col-sm-8 col-md-7 col-lg-7 ">
          <q-card flat bordered class="my-card bg-grey-1">
            <q-card-section class="bg-teal text-white">
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h4 text-center">Cotice aqui sus productos</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
          <q-separator />
          <q-card  class="my-card" v-for="(pro,index) in products" :key="index">
            <q-card-section>
              <div class="row q-col-gutter-md justify-around">
              <div class=" col-12 col-sm-6 col-md-3 col-lg-3">
                <img :src="require('../../assets/categories/'+pro.image)" style="height: 120px; max-width: 350px" />
              </div>
              <div class="col-12 col-sm-4 col-md-3 col-lg-3">
                <div class="text-h5">{{ pro.name }}</div>
                <div class="text-h6 text-green-14">Precio unitario: ${{pro.price}} MXN</div>
              </div>
              <div class="col-12 col-sm-3 col-md-3 col-lg-3">
                <select :id="index" @change="watchSelected($event,pro.price,index)">
                    <option v-for="i in 1000" :value="i">{{i}}</option>
                  </select>
              </div>
              <div class="col-12 col-sm-3 col-md-3 col-lg-3 ">
                <div v-if="totalPrice.lentgh != 0" class="text-weight-bold">${{ totalPrice[index] }} MXN</div>
                <q-btn @click="clearProduct(pro.id,index)" flat round color="primary" icon="clear" />
              </div>
            </div>
            </q-card-section>
          </q-card>
          <!-- <div class="col-12 col-sm-4 col-md-4 col-lg-5" v-if="this.data === null">
              <br>
              <div class="text-center">
                <p>
                  <img src="~assets/sad.svg" style="width:30vw;max-width:150px;">
                </p>
                <p class="text-faded">No has seleccionado ningun producto</p>
                <q-btn color="secondary" style="width:200px;" @click="$router.push('/')">Regresar</q-btn>
              </div>
            </div> -->
        </div>
        <div class="col-12 col-sm-8 col-md-7 col-lg-7 ">
          <p class="text-h5 text-center">Los precios pueden variar en la tienda en caso de haber tenido un cambio</p>
          <q-separator />
          <q-card flat bordered class="my-card bg-grey-1">
            <q-card-section class="bg-teal text-white">
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h4 text-center"><b>Total: ${{total.toFixed(2)}}</b> MXN</div>
                </div>
              </div>
            </q-card-section>
            <button @click="downloadWithCSS">Download PDF</button>

          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  select {
    background: #dfe6e9;
     border: none;
     font-size: 14px;
     height: 30px;
     padding: 5px;
     width: 50px;
  }
  option {
    height: 150px;
    white-space:pre-wrap;
    word-wrap: break-word;
  }

</style>
<script>
  import EventBus from '../../bus'
  import cart from '../../products'
  import jsPDF from 'jspdf'
  import html2canvas from "html2canvas"
  export default {
    components: {},
    data() {
      return {
        data: [],
        products: [],
        price: '',
        arrayQuantity: [],
        counter: 0,
        totalPrice: [],
        total: 0,
        loading: false,
        totalProduct: 0
      }
    },
    methods: {
      watchSelected(event, price, index) {
        if (this.totalPrice.length == this.data.length) {
          var quantity = event.target.options[event.target.selectedIndex].value;
          var priceTotal = price * quantity;
          this.totalPrice.splice(index, 1, priceTotal)
          this.arrayQuantity.splice(index, 1, parseInt(quantity))
        } else {
          var quantity = event.target.options[event.target.selectedIndex].value;
          var priceTotal = price * quantity;
          this.arrayQuantity.splice(index, 1, parseInt(quantity))
          this.totalPrice.splice(index, 1, priceTotal)
        }
        this.getPriceTotal()
      },
      getPriceTotal() {
        var suma = 0
        var sumaPro = 0
        for (let i = 0; i < this.totalPrice.length; i++) {
          suma = suma + parseFloat(this.totalPrice[i])
        }
        for (let i = 0; i < this.arrayQuantity.length; i++) {
          sumaPro = sumaPro + parseFloat(this.arrayQuantity[i])
        }
        this.totalProduct = sumaPro
        this.total = suma
        // console.log(this.products);
      },
      async getShopping() {
        // 1 block y 5 cal
        
        for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < cart.length; j++) {
            if (cart[j].id == this.data[i]) {
              this.products.push(cart[j])
            }
          }
        }
        this.getPrice()
        
        
        // console.log(this.products);
        // if (this.data != null) {
        //   try {
        //     var resp = await api.post('/getShopping', this.data,{
        //       headers: {
        //         Authorization: `Bearer ${sessionStorage.getItem("token")}`
        //       }
        //     })
        //     if (resp.data[0] == null) {
        //       localStorage.removeItem('shopping');
        //       location.reload();
        //     } else {
        //       this.products = resp.data
        //       this.getPrice()
        //     }
        //     this.getPriceTotal()
        //   } catch (error) {
        //     console.log(error)
        //   }
        // }
      },
      getPrice() {
        for (let i = 0; i < this.data.length; i++) {
          this.totalPrice.push(parseFloat(this.products[i].price))
        }
        this.getPriceTotal()
      },
      clearProduct(id, index) {
        var newArray = this.data.filter(function(i) {
          return i !== id
        }); // filtramos
        console.log('asu');
        
        localStorage.setItem('shopping', JSON.stringify(newArray));
        this.total = 0
        this.data = JSON.parse(localStorage.getItem('shopping'))
        EventBus.$emit('shoppingCart')
        this.arrayQuantity.splice(index, 1)
        this.getShopping()
        this.getPriceTotal()
        location.reload();
      },
      async buyProduct() {
        var array = []
        for (let i = 0; i < this.data.length; i++) {
          array.push({
            "idPro": this.data[i],
            "quantity": this.arrayQuantity[i]
          })
        }
        localStorage.setItem('payment', JSON.stringify(array));
      }
    },
    computed: {
    },
    created() {
      this.data = JSON.parse(localStorage.getItem('shopping'));
      if (this.data !== null) {
        this.getShopping()
        for (let i = 0; i < this.data.length; i++) {
          this.arrayQuantity.push(1)
        }
      }
    },
    mounted() {
    }
  }
</script>