<template>
    <div class="order-status">
      <div class="card">
        <div class="status d-flex align-items-center flex-column p-2">
          <div v-if = "dishStatus == 'completed'" class="completed px-3 py-2 m-2">Completed</div>
          <div v-else-if = "dishStatus == 'preparing'" class="preparing px-3 py-2 m-2">Preparing</div>
          <div v-else class="pending px-3 py-2 m-2">Pending</div>
        </div>
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
  