<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-indico-10 " v-if="!this.$q.platform.is.mobile">
        <q-toolbar class="GPL__toolbar" style="height: 64px">
          <a title="Puga" href="/"><img src="../assets/puga-blanco.png" style="width: 45px; border-radius: 2em"/></a> &nbsp; &nbsp;
          <h6 class="my-font "><a class="text-white text-subtitle2">Distribuidora de Cemento y Aceros PUGA</a> &nbsp;</h6> 
          <q-space ></q-space>
          <h6 class="my-font "> <q-icon name="local_phone"/><a class="text-white text-subtitle2" href="tel:4813818097">Tel. (481)-3818097</a> &nbsp;</h6> 
          <q-btn align="right" to="/shoppingCart" color="orange-14" bordered class="q-mr-xs" :label="'('+count+')'"
              icon="shopping_cart" />&nbsp;
          <a title="Puga Facebook" href="https://web.facebook.com/proyectos.puga">
            <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" style="width: 36px;">
          </a> &nbsp;&nbsp;
          <a title="Puga Messenger" href="https://www.messenger.com/t/proyectos.puga">
            <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Facebook_Messenger-512.png" style="width: 36px;">
          </a> 

        </a>
        </q-toolbar>
        <br>
            <q-btn flat to="/post_construction" label="Materiales"/>
            <q-btn flat to="/post_mangueras" label="Magueras"/>
 
            <q-btn flat to="/post_acero" label="Acero Negro"/>            
 
            <q-btn flat to="/post_clavos" label="Clavos"/>

            <q-btn flat to="/post_agropecuarios" label="Agropecuarios"/>
 
            <q-btn flat to="/post_cercas" label="Cercas"/>
 
            <q-btn flat to="/post_laminas" label="Laminas y Perfiles"/>
 
            <q-btn flat to="/post_herramientas"label="Herramientas"/>

            <q-btn flat to="/aviso-de-privacidad" label="Aviso de privacidad"/>
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
          <q-toolbar-title class="my-font">Puga</q-toolbar-title>
          <q-space ></q-space>
          <q-btn align="right" to="/shoppingCart" color="orange-14" bordered class="q-mr-xs" :label="'('+count+')'"
              icon="shopping_cart" />
              &nbsp;
          <a title="Puga" href="/"><img
                  src="../assets/puga-blanco.png" style="width: 32px; border-radius: 2em"></a>
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
          <q-item clickable to="/post_construction">
            <q-item-section>
              <q-item-label>Materiales</q-item-label>              
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_mangueras">
            <q-item-section>
              <q-item-label>Mangueras</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_acero">
            <q-item-section>
              <q-item-label>Acero Negro</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_clavos">
            <q-item-section>
              <q-item-label>Clavos</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_agropecuarios">
            <q-item-section>
              <q-item-label>Agropecuarios</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_cercas">
            <q-item-section>
              <q-item-label>Cercas Perimetrales</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_laminas">
            <q-item-section>
              <q-item-label>Laminas y Perfiles</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_herramientas">
            <q-item-section>
              <q-item-label>Herramientas</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/aviso-de-privacidad">
            <q-item-section>
              <q-item-label>Aviso de prrivacidad</q-item-label>
            </q-item-section>
          </q-item>
          

          <q-separator class="q-mt-lg q-mb-lg" />
          <q-space> </q-space> 
          <q-item clickable>
            <q-item-section>
              <q-item-label><a href="tel:4813818097">Tel. (481)-3818097</a></q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>
              <q-item-label>
                <a title="Puga" href="https://web.facebook.com/proyectos.puga">Facebook Puga</a>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>
              <q-item-label>
                <a title="Puga Messenger" href="https://www.messenger.com/t/proyectos.puga">Messenger Puga</a> 
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
  <div class="col">
    <h1>Página elaborada:</h1>
    <ul>
      <li class="my-font">TeamCoder</li>
      <li class="my-font"><a href="/teamcoder">Mas info. click aquí</a></li>
    </ul>
  </div>
  <div class="col">
    <h1>Secciones</h1>
    <ul>
      <li class="my-font"><a href="/post_construction">Materiales</a></li>
      <li class="my-font"><a href="/post_mangueras">Mangueras</a></li>
      <li class="my-font"><a href="/post_acero">Acero negro</a></li>
      <li class="my-font"><a href="/post_clavos">Clavos</a></li>
      <li class="my-font"><a href="/post_agropecuarios">Agropecuarios</a></li>
      <li class="my-font"><a href="/post_cercas">Cercas</a></li>
      <li class="my-font"><a href="/post_laminas">Laminas y perfiles</a></li>
      <li class="my-font"><a href="/post_herramientas">Herramientas</a></li>
    </ul>
  </div>
  <div class="col">
    <h1>Empresa</h1>
    <ul>
      <li class="my-font">ACEROS GALVANIZADOS PUGA</li>>
            <li class="my-font">Av. Ciro Purata #100 Col. Cuauhtémoc CP 79040</li>
            <li class="my-font"><a href="tel:4813818097">Tel. (481)-3818097</a></li>
    </ul>
  </div>
  <div class="col">
    <h1>Social</h1>
    <ul>
      <li>
        <a class="my-font" title="Puga" href="https://web.facebook.com/proyectos.puga">
          <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" width="32" style="width: 32px;">
        </a>
      </li>
      <li>
        <a class="my-font" title="Puga" href="https://www.messenger.com/t/proyectos.puga">
          <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Facebook_Messenger-512.png" width="32" style="width: 32px;">
        </a>
      </li>
    </ul>
  </div>
<div class="clearfix"></div>
</div>
</div>
<!-- END OF FOOTER -->
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import EventBus from '../bus'
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

      EventBus.$on('shoppingCart', () => {
        this.shopping = JSON.parse(localStorage.getItem('shopping'));
        this.count = this.shopping.length
      })
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
    color: #999999;
  }
  .my-font {
    font-family: 'sans';
  }

  * {
    font-family: 'sans';
  }
  .footer {
    width: 100%;
    position: relative;
    left: 0;
    bottom: 0;
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
  .footer .col ul li:hover a{
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
