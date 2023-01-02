<template>
    <div class="order-status">
        <div class="status align-items-center p-2">
          <div v-if = "dishStatus == 'completed'" class="completed px-3 py-2 m-2 text-center">Completed</div>
          <div v-else-if = "dishStatus == 'preparing'" class="preparing px-3 py-2 m-2 text-center">Preparing</div>
          <div v-else class="pending px-3 py-2 m-2 text-center">Pending</div>
      </div>
    </div>
</template>
<script>
  export default{
    name: 'order-status',
    props:{
      dishStatus: String
    }
  }
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("../styles/card.scss");
</style>
  