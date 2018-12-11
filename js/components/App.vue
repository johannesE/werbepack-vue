<template>
<div id="wrapper">
  <div id="massnahmen-app">
    <transition name="fade" appear mode="out-in">
      <router-view/>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  methods: {},
  data: function() {
    return {}
  },
  components: {}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

/* Theme was overriding this stuff */

.btn-block {
  display: block;
  width: 100%;
}

.btn i {
  color: inherit;
}

.btn-default {
  border-color: #adadad;
}

.btn-info {
  background-color: rgba(91, 0, 107, 0.7);
}

.btn-info:hover {
  background-color: #604594;
  border-color: rgba(91, 0, 107, 0.7);
}

.btn-primary:hover {
  background-color: #604594;
  color: white;
}

.btn-primary {
  background-color: white;
  border-color: #604594;
  color: black;
}
h1, h2, h3, h4, h5, h6, .btn{
  text-transform: none;
}
</style>
