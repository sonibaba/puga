<template>
    <div>
        <q-card v-if="!this.$q.platform.is.mobile" flat class="my-card">
        <q-toolbar class="GPL__toolbar">
            <div class="text-center text-h4 text-orange-14">{{categorie}}</div>
        </q-toolbar>

        <q-list padding>
          <q-item clickable to="/post_construction">
            <q-item-section>
              <q-item-label class="label">Materiales</q-item-label>              
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_mangueras">
            <q-item-section>
              <q-item-label class="label">Mangueras</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_construction">
            <q-item-section>
              <q-item-label class="label">Acero Negro</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_mangueras">
            <q-item-section>
              <q-item-label class="label">Clavos</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_construction">
            <q-item-section>
              <q-item-label class="label">Agropecuarios</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_mangueras">
            <q-item-section>
              <q-item-label class="label">Cercas Perimetrales</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_construction">
            <q-item-section>
              <q-item-label class="label">Laminas y Perfiles</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/post_mangueras">
            <q-item-section>
              <q-item-label class="label">Herramientas</q-item-label>
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
        </q-card>
        <div v-else class="text-center text-h3 text-orange-14">{{categorie}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['categorie'],
    }
</script>

<style>
  .label{
    font-size: 20px;
    font-family: 'sans';
  }
</style>