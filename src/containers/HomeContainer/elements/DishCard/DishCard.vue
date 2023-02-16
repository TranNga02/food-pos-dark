<template>
  <div class="dish-card">
    <div class="card">
      <div class="image">
        <img :src="require(`@/assets/images/${dishInfo.src}`)" width="130px" />
      </div>
      <div class="information">
        <p class="name">{{ dishInfo.name }}</p>
        <p class="price">${{ dishInfo.price }}</p>
        <p class="available">{{ dishInfo.available }} Bowls available</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./DishCard.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
