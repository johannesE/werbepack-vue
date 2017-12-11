<template>
<div id="massnahmen-app">
  <transition name="fade" appear mode="out-in">
    <router-view/>
  </transition>
</div>
</template>

<script>

export default {
  methods: {
  },
  data: function() {
    return {
    }
  },
  components: {
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s
}

.fade-enter,
.fade-leave-to
{
  opacity: 0
}
</style>
