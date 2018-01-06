<template>
  <div id="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-xs-3">
          <img :src="massnahme.src"/>
          <div class="btn btn-block" v-on:click="goBack()">
            <div class="dashicons dashicons-arrow-left-alt"></div>
            Zurück
          </div>
          <div class="btn btn-info btn-block" v-on:click="toggleMassnahme()" v-if="!massnahme.selected"
               :id="'select' + massnahme.title | format_id">
            <div class="dashicons dashicons-star-empty"></div>
            Auswählen
          </div>
          <div class="btn btn-primary btn-block btn-outline" v-on:click="toggleMassnahme()" v-if="massnahme.selected"
               :id="'deselect' + massnahme.title | format_id">
            <div class="dashicons dashicons-star-filled"></div>
            Ausgewählt
          </div>
        </div>

        <div class="col-xs-9">
          <h1>{{massnahme.title}}</h1>
          <div class="container-flex">
            <p class="hyphencle" style="text-align: justify;">
              <b>Kreation</b><br>
              <span v-html="massnahme.kreation"/>
            </p>
            <p class="hyphencle" style="text-align: justify;">
              <b>Produktion</b><br>
              <span v-html="massnahme.produktion"/>
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['massnahme'],
  methods: {
    goBack: function() {
      this.$emit('back')
    },
    toggleMassnahme: function() {
      this.$emit('toggleMassnahme');
    },
  },
  data: function() {
    return {

    }
  },
}
</script>

<style>
h1 {
  text-align: center;
  padding-top: 2rem;
}
</style>
