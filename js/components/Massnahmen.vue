<template>
<div>
  <!--<massnahme v-if="massnahmeSelected" v-bind:massnahme="massnahme" v-on:back="listMassnahmen()" v-on:toggleMassnahme="toggleMassnahme()"></massnahme>-->
  <div class="container-flex">
    <div v-for="massnahme in massnahmen" class="massnahme">
      <img class="border" :src="massnahme.src" />
      <h2 class="border">{{ massnahme.title }}</h2>
      <div class="btn btn-block btn-lg btn-info" v-on:click="selectMassnahme(massnahme)" :id="'details' + massnahme.title | format_id"><div class="dashicons dashicons-info"></div> Details</div>
      <div class="btn btn-info btn-block" :id="'select' + massnahme.title | format_id" v-on:click="toggleMassnahme(massnahme)" v-if="!massnahme.selected"><div class="dashicons dashicons-star-empty"></div> Auswählen</div>
      <div class="btn btn-primary btn-block btn-outline" :id="'deselect' + massnahme.title | format_id" v-on:click="toggleMassnahme(massnahme)" v-if="massnahme.selected"><div class="dashicons dashicons-star-filled"></div> Ausgewählt</div>
    </div>
  </div>
  <contact v-bind:massnahmen="massnahmen"></contact>

</div>
</template>

<script>
import Massnahme from './Massnahme.vue'
import Contact from './Contact.vue'

export default {
  components: {
    'massnahme': Massnahme,
    'contact': Contact,
  },
  methods: {
    selectMassnahme: function(massnahme) {
      this.$router.push({path: '/massnahmen/' + massnahme.title})
    },
    toggleMassnahme: function(massnahme) {
      this.$store.commit('toggleMassnahme', massnahme)
    },
  },
  data: function() {
    return {
    }
  },
  computed: {
    massnahmen(){ return this.$store.state.massnahmen }
  }
}
</script>

<style>
  .container-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1170px;
  }

  .container-flex div.massnahme {
    max-width: 30%;
    margin: 1rem;
    min-width: 20rem;
  }

  .btn-lg {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
  }

  .btn {
    border-radius: 0;
    border: none;
  }
  .btn.btn-outline{
    border: 1px solid rgba(91, 0, 107, 0.7);
  }

  img {
    margin-bottom: 0;
  }

  h2 {
    text-align: center;
  }
</style>
