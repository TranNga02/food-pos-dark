<template>
  <div :class="classNames" @click="onClickCard">
    <div class="card">
      <div class="image">
        <img :src="`https://pos-api.utilityhelpful.com/storage/images/origins/${productInfo.image}`" width="130px" />
      </div>
      <div class="information">
        <p class="name">{{ productInfo.name }}</p>
        <p class="price">${{ productInfo.price }}</p>
        <p class="available">{{ productInfo.unit }} Bowls available</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./DishCard.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
