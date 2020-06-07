<template>
  <div>
    <div class="q-px-md q-py-lg">
      <div class="row q-col-gutter-md justify-center">
        <q-card flat bordered class="my-card bg-grey-1">
            <div class="col-12 col-sm-6 col-md-10 col-lg-10 ">
          <p class="text-h3">Cotice aqui sus productos</p>
          <q-separator />
          <div class="q-px-md q-py-lg" v-for="(pro,index) in products" :key="index">
            <div class="row q-col-gutter-md justify-center">
              <div class=" col-12 col-sm-6 col-md-3 col-lg-3">
                <img :src="require('../../assets/categories/'+pro.image)" style="height: 120px; max-width: 350px" />
              </div>
              <div class="col-12 col-sm-4 col-md-3 col-lg-3">
                <div class="text-h5">{{ pro.name }}</div>
                <div class="text-h6 text-green-14">${{pro.price}} MXN</div>
              </div>
              <div class="col-12 col-sm-2 col-md-3 col-lg-3">
                <select :id="index" @change="watchSelected($event,pro.price,index)">

                    <option v-for="i in 1000" :value="i">{{i}}</option>
                  </select>
              </div>
              <div class="col-12 col-sm-3 col-md-2 col-lg-2 ">
                <div v-if="totalPrice.lentgh != 0" class="text-h6">$ {{ totalPrice[index] }} MXN</div>
              </div>

              <div class="col-12 col-sm-3 col-md-1 col-lg-1 ">
                
                <q-btn @click="clearProduct(pro.id,index)" flat round color="primary" icon="clear" />
              </div>
            </div><br>
            <q-separator />
          </div>
        </div>
          </q-card>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 ">
          <q-card flat bordered class="my-card bg-grey-1">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h6">Comprar ya!</div>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <b>${{total.toFixed(2)}}</b> MXN
            </q-card-section>
            <q-separator />
            <q-card-actions>
              <q-btn color="positive" @click="getPriceTotal()" label="Cotizar" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EventBus from '../../bus'
  import cart from '../../products'
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
        this.products = []
        this.totalPrice = []
        for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < cart.length; j++) {
            if (cart[j].id == this.data[i]) {
              this.products.push(cart[j])
            }
          }
        }
        this.getPrice()
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
        
        localStorage.setItem('shopping', JSON.stringify(newArray));
        this.total = 0
        this.data = JSON.parse(localStorage.getItem('shopping'))
        EventBus.$emit('shoppingCart')
        this.arrayQuantity.splice(index, 1)
        this.getShopping()
        this.getPriceTotal()
        window.location.reload(false);
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

