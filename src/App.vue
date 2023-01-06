<template>
  <div id="app" class="container-fluid">
    <div class="row">
        <div class="col-sm-auto sticky-top p-0 d-flex align-items-stretch">
          <SideBar></SideBar>
          <!-- <BarSide></BarSide> -->
        </div>
        <div class="col-sm p-3 min-vh-100">
            <!-- content -->
        </div>
    </div>
    <!-- <div class="div">
      
      <div class="row my-2">
        <div class="col-sm-2">
        </div>
        <div class="col-sm-2">
          <DishCard v-bind:dishInfo=dishInfo></DishCard>
        </div>
        <div class="col-sm-2">
          <CardDish v-bind:dishInfo=dishInfo></CardDish>
        </div>
        <div class="col-sm-2">
          <SummaryCard></SummaryCard>
        </div>
        <div class="col-sm-4">
          <MostOrdered v-bind:dishInfo=dishInfo></MostOrdered>
        </div>
        
      </div>

      <div class="row" v-for="(customer, index) in customers" v-bind:key="index">
        <div class="col-sm-6"></div>
        <div class="col-sm-6">
          <OrderReportRow v-bind:customer="customer"></OrderReportRow>
        </div>
      </div>

      <div class="row my-2">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <ConfirmationItem v-bind:dishInfo=dishInfo></ConfirmationItem>
        </div>
        <div class="col-sm-4">
          <OrderTab></OrderTab>
        </div>
      </div> -->

      
        
      
    </div>
  <!-- </div> -->
</template>

<script>
// import DishCard from './components/DishCard/DishCard.vue';
// import CardDish from './components/CardDish/CardDish.vue';
// import SummaryCard from './components/SummaryCard/SummaryCard.vue';
// import MostOrdered from './components/MostOrdered/MostOrdered.vue';
// import OrderReportRow from './components/OrderReportRow/OrderReportRow.vue';
// import ConfirmationItem from './components/ConfirmationItem/ConfirmationItem.vue';
// import OrderTab from './components/OrderTab/OrderTab.vue';
import SideBar from './components/SideBar/SideBar.vue';
export default {
  name: 'app',
  data() {
    return {
      dishInfo: {
        image: "@/assets/Image/noodles.png",
        name: "Spicy seasoned seafood noodles",
        price: 2.29,
        quantity: 20,
        ordered: 200
      },
      customers: [
        {
          name: "Eren Jaegar",
          avatar: "@/assets/Avatar/Avatar1.png",
          menu: "Spicy seasoned seafood noodles",
          totalPayment: 125,
          dishStatus: "completed"
        },
        {
          name: "Reiner Braunn",
          avatar: "@/assets/Avatar/Avatar2.png",
          menu: "Salted Pasta with mushroom sauce",
          totalPayment: 145,
          dishStatus: "preparing"
        },
        {
          name: "Levi Ackerman",
          avatar: "@/assets/Avatar/Avatar3.png",
          menu: "Beef dumpling in hot and sour soup",
          totalPayment: 105,
          dishStatus: "pending"
        }
      ]
    }
  },
  components: {
    // DishCard,
    // CardDish,
    // SummaryCard,
    // MostOrdered,
    // OrderReportRow,
    // ConfirmationItem,
    // OrderTab,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;                                                                                                                                                                              
}
@import url('./styles/body.scss');
</style>
