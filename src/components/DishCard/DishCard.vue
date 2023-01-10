<template>
  <div class="dish-card">
    <div class="space"></div>
    <v-card class="card">
      <v-img class="image" :src="require(`../../assets/Image/${dishInfo.image}`)"></v-img>
      <div class="card-info">
        <v-card-title class="name">{{ dishInfo.name }}</v-card-title>
        <v-card-text>
          <p class="price">$ {{ dishInfo.price }}</p>
          <p class="available-product">{{ dishInfo.availableProduct }} Bowls available</p>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" src="./DishCard.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
