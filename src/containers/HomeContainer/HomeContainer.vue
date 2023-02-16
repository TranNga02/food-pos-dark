import OrderContainer from './elements/OrderContainer';

<template>
  <div class="home-page">
    <v-row>
      <v-col md="7">
        <MenuContainer />
      </v-col>
      <v-col md="5">
        <OrderContainer />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./HomeContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
