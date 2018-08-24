<template>
  <div id="app">
    <Toaster />
  </div>
</template>

<script>
import Toaster from './components/Toaster.vue'

export default {
  name: 'app',
  components: {
    Toaster
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #fff;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 70%;
}
</style>
