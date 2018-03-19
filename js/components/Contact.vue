<template>
  <div id="contact-wrapper">
    <div class="container">
      <h2>Kontakt | Bestellung</h2>
      <p>Fülle einfach die Felder aus, mit denen wir dich kontaktieren dürfen. Wir empfehlen das Telefon. Das ist persönlicher und geht am schnellsten.</p>
      <form method="POST" action="https://formspree.io/info@werbepack.ch">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <input type="name" name="name" placeholder="Dein Name"/>
            <input v-validate="'email'" type="email" name="email" v-model="email" placeholder="Email" :class="{'input': true, 'is-danger': errors.has('email') }"/>
            <span class="error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            <input type="tel" name="phone" placeholder="Deine Nummer"/>
            <input class="gotcha" type="text" name="_gotcha"/>
            <input type="hidden" name="selected_massnahmen" v-model="selected"/>
            <input type="hidden" name="_bcc" value="werbepack@octopusai.com" />
          </div>

          <div class="col-xs-12 col-sm-6">
            <textarea name="message" v-model="message" placeholder="Zusätzliche Nachricht. Wir sind am liebsten per Du."/>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <input type="submit" class="btn btn-default btn-block" value="Jetzt unverbindlich anfragen" :disabled="errors.any() || !isCompleted"/>
            <span class="error" v-show="!isCompleted">Wir benötigen entweder eine Telefonnummer oder eine Email Adresse um Dich zu kontaktieren.</span>
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
        phone: '',
      }
    },
    computed: {
      isCompleted () {
        return this.email || this.phone;
      },
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
  input[disabled]{
    background-color: gray !important;
  }
  input.gotcha{
    display: none;
  }
  input, textarea{
    border-radius: 0 !important;
  }
  input{
    margin-top:1rem;
  }
  span.error{
    color:#604594;
  }
  input:first-of-type{margin-top: 0}
  textarea{
    height: 125px;
  }
  #contact-wrapper{
    margin-top: 5rem;
  }
</style>
