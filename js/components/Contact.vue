<template>
<div id="wrapper">
  <div class="container">
    <h2>Kontakt | Bestellung</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <input type="email" v-model="email" />
        <input type="number" v-model="number" />
      </div>

      <div class="col-xs-12 col-sm-6">
        <textarea v-model="message" placeholder="Zusätzliche Nachricht. Wir sind am liebsten per Du." />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <input type="submit" class="btn btn-default btn-block" value="Unverbindlich anfragen"></input>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['massnahmen'],
  methods: {
    send: function() {
      selected = massnahmen.filter(function(el) {
        return el.selected == true;
      });
      debugger;
      console.log("form has been sumitted.")
    },
  },
  data: function() {
    return {
      message: '',
      email: '',
      number: '',
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
