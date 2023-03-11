<template>
  <div class="home-page">
    <v-row>
      <v-col md="7">
        <MenuContainer
          title="Jaegar Resto"
          date="Tuesday, 2 Feb 2021"
          :dropdownItems="dropdownItems"
          :menuItems="menuItems"
          :listDishes="listDishes"
          :dishesOrder="dishesOrder"
          :changeDishOrder="changeDishOrder"
        />
      </v-col>
      <v-col md="5">
        <OrderContainer
          :tabOptions="dropdownItems"
          :dishesOrder="dishesOrder"
          :onDelete="changeDishOrder"
          :changeNote="changeNote"
          :changeQuantity="changeQuantity"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./HomeContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
