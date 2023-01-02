<template>
  <div class="most-ordered">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-3 text-start">
          <img src="../../assets/Image/noodles.png" class="img-fluid rounded-start w-75" alt="..." />
        </div>
        <div class="col-md-9">
          <div class="text-start">
            <h5 class="card-title">{{ dishInfo.name }}</h5>
            <p class="card-text">{{ dishInfo.ordered }} dishes ordered</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'most-ordered',
    props:{
      dishInfo: Object
    }
  }
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("./style.scss");
</style>
