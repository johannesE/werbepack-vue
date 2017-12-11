<template>
<div id="vue-nav" class="container-fluid">
  <h2>Hat Ihr Unternehmen weniger als 11 Angestellte?</h2>
  <div class="row">
    <div class="col-xs-6">
      <a class="btn btn-success btn-lg btn-block" href="#" v-on:click="select_link('/startup-massnahmen')">Ja</a>
    </div>
    <div class="col-xs-6">
      <a class="btn btn-danger btn-lg btn-block" href="#" v-on:click="select_link('/kein-startup')">Nein</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    select_link(path) {
      this.new_user = false;
      this.$router.push({
        path: path
      })
    }
  },
  components: {}
}
</script>

<style>
.btn-block {
  display: block;
  width: 100%;
}
h2 {
  text-transform: none;
  text-align: center;
}
</style>
