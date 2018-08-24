<template>
<div class="container">

<h2>Toaster</h2>
<hr>
<h3>Select a bread:</h3>
<div class="toast">
  <button v-for="bread in breadOptions" :key="bread" v-on:click="toast(bread)"> {{ bread.type }}
 </button>
</div>

<div v-if="resultHistory.length >= 1" class="toast-history">
  <ul>
    <li v-for="item in resultHistory" :key='item'>You selected {{item.type}} and it got {{item.result}}</li>
  </ul>
</div>

<div v-else>
  You have no toast history
</div>

</div>
  
</template>

<script>
import { sourDough, wheat, rye, white, englishMuffin } from './toaster.js';

export default {
  name: 'Toaster',
  data () {
    return {
      resultHistory : [],
      breadOptions : [
        sourDough,
        wheat,
        rye,
        white,
        englishMuffin
      ]
    }
  },
  methods: {
    toast(bread){
      let item = {
        type : bread.type,
        result : bread.toast()
      }
      this.resultHistory.push(item)
      return console.log('Your bread is ready', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: rgba(255, 252, 252, 0.653);
  text-align: center;
  padding-top: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
ul {
  margin: 0;
  padding: 10px;
  list-style-type: none;
}

ul li {
  padding: 10px;
  font-size: 1.2em;
    background-color: rgba(237, 196, 170, 0.886);
    border-left: 5px solid rgba(167, 107, 70, 0.886);
    margin-bottom: 2px;
    color: black;
}
p { 
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

</style>
