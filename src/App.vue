<template>
  <div id="app">
    <div class="div">
      <div class="row">
        <div class="col-sm-2"><DishCard></DishCard></div>
        <div class="col-sm-2"><DishCard></DishCard></div>
        <div class="col-sm-2"><CardDish></CardDish></div>
        <div class="col-sm-2"><CardDish></CardDish></div>
        <div class="col-sm-2"><CardDish></CardDish></div>
        <div class="col-sm-2"><CardDish></CardDish></div>
      </div>
    </div>
  </div>
</template>

<script>
import DishCard from './components/DishCard.vue';
import CardDish from './components/CardDish.vue';
export default {
  name: 'App',
  components: {
    DishCard,
    CardDish
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
