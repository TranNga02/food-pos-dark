<template>
    <div class="order-tab text-start align-self-center py-3">
      <button type="button" class="btn btn-custom mx-1 active">Dine In</button>
      <button type="button" class="btn btn-custom mx-1">To Go</button>
      <button type="button" class="btn btn-custom mx-1">Delivery</button>
    </div>
  </template>
  <script>
    export default{
      name: 'order-tab',
      props:{
        dishInfo: Object
      }
    }
  </script>
  <style lang="scss">
  @import url("./style.scss");
  </style>
  