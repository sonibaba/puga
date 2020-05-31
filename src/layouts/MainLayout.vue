<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-indico-10" v-if="!this.$q.platform.is.mobile">
        <q-toolbar class="GPL__toolbar" style="height: 64px">
          <a title="Puga" href="/"><img
                  src="../assets/puga-icon.png" width="32" style="width: 52px;"></a> 
          <h6>Distribuidora de Cemento y Aceros PUGA</h6>
          <q-space ></q-space>
          <h6> <q-icon name="local_phone"/>MX (481) - 381 80 97 &nbsp &nbsp</h6> 
          <q-btn align="right" to="/shoppingCart" color="orange-14" bordered class="q-mr-xs" :label="'('+count+')'"
              icon="shopping_cart" />
          <a title="Puga" href="https://web.facebook.com/proyectos.puga"><img
                  src="../assets/facebook_icon.png" width="32" style="width: 32px;"></a> 
        </q-toolbar>
            <q-btn flat to="/post_construction" label="Materiales"/>
 
            <q-btn flat  label="Magueras"/>
 
            <q-btn flat  label="Acero Negro"/>            
 
            <q-btn flat  label="Clavos"/>
 
            <q-btn flat  label="Cercas"/>
 
            <q-btn flat  label="Laminas y Perfiles"/>
 
            <q-btn flat label="Herramientas"/>
      </q-header>

      <q-header elevated class="bg-indico-10" v-if="this.$q.platform.is.mobile">
        <q-toolbar class="GPL__toolbar" style="height: 64px">
          <q-btn
          flat
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
          <q-toolbar-title>Puga</q-toolbar-title>
          <q-space ></q-space>
          <a title="Puga" href="/"><img
                  src="../assets/puga-icon.png" width="32" style="width: 32px;"></a> 
          <!-- <q-toolbar-title> <q-icon name="local_phone"/>MX (481) - 381 80 97</q-toolbar-title>
          <a title="Puga" href="https://web.facebook.com/proyectos.puga"><img
                  src="../assets/facebook_icon.png" width="32" style="width: 32px;"></a>  -->
        </q-toolbar>
      </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
      :width="240"
      behavior="mobile"
      @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <img class="q-pl-md" src="../assets/puga.png" width="52">
            <span class="q-ml-sm">Categorias</span>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-item clickable to="mision_vision">
            <q-item-section>
              <q-item-label>Materiales</q-item-label>              
            </q-item-section>
          </q-item>
          <q-item clickable to="mision_vision">
            <q-item-section>
              <q-item-label>Mangueras</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="mision_vision">
            <q-item-section>
              <q-item-label>Acero Negro</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="mision_vision">
            <q-item-section>
              <q-item-label>Clavos</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="mision_vision">
            <q-item-section>
              <q-item-label>Agropecuarios</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="mision_vision">
            <q-item-section>
              <q-item-label>Cercas Perimetrales</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="mision_vision">
            <q-item-section>
              <q-item-label>Laminas y Perfiles</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="mision_vision">
            <q-item-section>
              <q-item-label>Herramientas</q-item-label>
            </q-item-section>
          </q-item>
          

          <q-separator class="q-mt-lg q-mb-lg" />
          <q-space> </q-space> 
          <q-item clickable>
            <q-item-section>
              <q-item-label>MX (481) - 381 80 97</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>
              <q-item-label>
                <a title="Puga" href="https://web.facebook.com/proyectos.puga">Facebook Puga</a>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="footer">
      <div class="contain">
        <!-- <div class="col">
          <h1></h1>
          <ul>
            <li>Gracias a tu compra, el Voluntariado Estatal de Zacatecas entregará a las personas de más bajos recursos apoyos como: Quimioterapias, hemodiálisis, aparatos funcionales, apoyo económico para transporte de enfermos, para pagos hospitalarios, para medicamentos especializados, para gastos funerarios,  entre muchos otros. </li>
          </ul>
        </div> -->
        <div class="col"> <br>
          <ul>
            <li>ACEROS GALVANIZADOS PUGA</li>>
            <li>Av. Ciro Purata #100 Col. Cuauhtémoc CP 79040</li>
            <li>Tel. (481)-3818097</li>
            <li><a title="Puga" href="https://web.facebook.com/proyectos.puga"><img
                  src="https://image.flaticon.com/icons/svg/124/124010.svg" width="32" style="width: 32px;"></a> </li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      count: 0,
    }
  },
  mounted() {
      this.shopping = JSON.parse(localStorage.getItem('shopping'));
      if (this.shopping != null) {
        this.count = this.shopping.length        
      }

      // EventBus.$on('shoppingCart', () => {
      //   this.shopping = JSON.parse(localStorage.getItem('shopping'));
      //   this.count = this.shopping.length
      // })
    }
}
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }

  li{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color:  #34495e;
  }

  * {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

  .dummy_page {
    height: 200px;
    width: 100%;
    background-color: #f0f0f0;
    text-align: center;
    box-sizing: border-box;
    padding: 60px 0px;
  }

  /* STYLES SPECIFIC TO FOOTER  */
  .footer {
    width: 100%;
    position: relative;
    height: auto;
    background-color: #070617;
  }

  .footer .col {
    width: 400px;
    height: auto;
    float: right;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 20px 20px 20px;
  }
  .fotter-links{
    color: #999999;
    font-size: 14px;
    font-family: inherit;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }
  .footer .col h1 {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: 12px;
    line-height: 17px;
    padding: 20px 0px 5px 0px;
    color: rgba(255, 255, 255, 0.2);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.250em;
  }

  .footer .col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .footer .col ul li {
    color: #999999;
    font-size: 14px;
    font-family: inherit;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }

  .social ul li {
    display: inline-block;
    padding-right: 5px !important;
  }

  .footer .col ul li:hover {
    color: #ffffff;
    transition: .1s;
    -webkit-transition: .1s;
    -moz-transition: .1s;
  }

  .clearfix {
    clear: both;
  }

  @media only screen and (min-width: 1280px) {
    .contain {
      width: 1200px;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 1139px) {
    .contain .social {
      width: 1000px;
      display: block;
    }

    .social h1 {
      margin: 0px;
    }
  }

  @media only screen and (max-width: 950px) {
    .footer .col {
      width: 33%;
    }

    .footer .col h1 {
      font-size: 14px;
    }

    .footer .col ul li {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 500px) {
    .footer .col {
      width: 50%;
    }

    .footer .col h1 {
      font-size: 14px;
    }

    .footer .col ul li {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 340px) {
    .footer .col {
      width: 100%;
    }
  }

</style>
