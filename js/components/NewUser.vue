<template>
<div id="vue-nav" class="container-fluid">
  <h2>Hat Ihr Unternehmen weniger als 11 Angestellte?</h2>
  <div class="row">
    <div class="col-xs-6">
      <router-link :to="{ name: 'startup-massnahmen', params: {} }" class="btn btn-success btn-lg btn-block" href="#">Ja</router-link>
    </div>
    <div class="col-xs-6">
      <router-link :to="{ name: 'kein-startup', params: {} }" class="btn btn-danger btn-lg btn-block" href="#">Nein</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    // select_link(path) {
    //   this.new_user = false;
    //   this.$router.replace(path)
    // }
  },
  components: {}
}
</script>

<style>
h2 {
  text-transform: none;
  text-align: center;
}
</style>
