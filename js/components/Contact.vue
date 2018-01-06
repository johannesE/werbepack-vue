<template>
  <div id="contact-wrapper">
    <div class="container">
      <h2>Kontakt | Bestellung</h2>
      <p>Du musst nicht alle Felder ausfüllen, nur die, mit denen wir Dich kontaktieren können. Wir empfehlen das Telefon. Das geht am schnellsten.</p>
      <form method="POST" action="https://formspree.io/werbepack@octopusai.com">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <input type="name" name="name" placeholder="Dein Name"/>
            <input type="email" name="email" v-model="email" placeholder="Email"/>
            <input type="number" name="number" placeholder="Deine Nummer"/>
            <input class="gotcha" type="text" name="_gotcha"/>
            <input type="hidden" name="selected_massnahmen" v-model="selected"/>
            <input type="hidden" name="_cc" value="ssprealpromotions.ch" />
          </div>

          <div class="col-xs-12 col-sm-6">
            <textarea name="message" v-model="message" placeholder="Zusätzliche Nachricht. Wir sind am liebsten per Du."/>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <input type="submit" class="btn btn-default btn-block" value="Unverbindlich anfragen"></input>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['massnahmen'],
    methods: {
    },
    data: function () {
      return {
        message: '',
        email: '',
        number: '',
      }
    },
    computed: {
      selected: function () {
        let sel_massnahmen = this.massnahmen.filter(function (el) {
          return (el.selected === true);
        });
        sel_massnahmen.forEach(function(item, index, array) {
          sel_massnahmen[index] = item.title;
        });
        return sel_massnahmen;
      }
    },
  }
</script>

<style>
  h1 {
    text-align: center;
    padding-top: 2rem;
  }
  input.gotcha{
    display: none;
  }
  input, textarea{
    border-radius: 0 !important;
  }
  textarea{
    height: 125px;
  }
  #contact-wrapper{
    margin-top: 5rem;
  }
</style>
