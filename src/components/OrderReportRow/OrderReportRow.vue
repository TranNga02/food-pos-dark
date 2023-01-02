<template>
    <div class="row order-report-row align-items-center text-start">
      <div class="col-sm-3">
        <img src="../../assets/Avatar/Avatar1.png" class="img-fluid pe-2" alt="">
         {{ customer.name }} 
        </div>
      <div class="col-sm-3"> {{ customer.menu }} </div>
      <div class="col-sm-3"> ${{ customer.totalPayment }} </div>
      <div class="col-sm-3"> <OrderStatus :dishStatus="customer.dishStatus"></OrderStatus> </div>
    </div>
</template>
<script>
import OrderStatus from '../OrderStatus/OrderStatus.vue'
  export default{
    name: 'order-report-row',
    props:{
        customer: Object
    },
    components:{
        OrderStatus,
    }
  }
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("./style.scss");
</style>
  