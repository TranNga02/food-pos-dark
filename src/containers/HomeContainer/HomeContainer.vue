<template>
  <div class="home-page">
    <SideBar></SideBar>
    <div class="content">
      <v-row>
        <v-col-2>
          <div class="div"></div>
        </v-col-2>
        <v-col-2>
          <DishCard></DishCard>
        </v-col-2>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" src="./HomeContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
