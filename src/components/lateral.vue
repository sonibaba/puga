<template>
    <div>
        <q-card v-if="!this.$q.platform.is.mobile" flat class="my-card">
        <q-toolbar class="GPL__toolbar">
            <div class="text-center text-h6 text-orange-14">{{categorie}}</div>
        </q-toolbar>

        <q-list padding>
          <q-item clickable to="/post_construction">
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