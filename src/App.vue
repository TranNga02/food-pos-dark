<template>
  <div id="app">
    <div class="div">
      <div class="row">
        <div class="col-sm-2"><DishCard v-bind:dishInfo = dishInfo></DishCard></div>
        <div class="col-sm-2"><CardDish v-bind:dishInfo = dishInfo></CardDish></div>
        <div class="col-sm-2"><SummaryCard></SummaryCard></div>
        <div class="col-sm-4"><MostOrdered v-bind:dishInfo = dishInfo></MostOrdered></div>
        <div class="col-sm-2"><OrderStatus v-bind:dishStatus = "'completed'"></OrderStatus></div>
      </div>
    </div>
  </div>
</template>

<script>
import DishCard from './components/DishCard.vue';
import CardDish from './components/CardDish.vue';
import SummaryCard from './components/SummaryCard.vue';
import MostOrdered from './components/MostOrdered.vue';
import OrderStatus from './components/OrderStatus.vue';
export default {
  name: 'app',
  data(){
    return{
      dishInfo:{
        image: "@/assets/Image/noodles.png",
        name: "Spicy seasoned seafood noodles",
        price: 2.29,
        quantity: 20,
        ordered:200
      }
    }
  },
  components: {
    DishCard,
    CardDish,
    SummaryCard,
    MostOrdered,
    OrderStatus
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
