<template>
  <div class="home-page">
    <v-row>
      <v-col md="7">
        <MenuContainer
          :title="restoName"
          :date="date"
          :dropdownItems="dropdownItems"
          :menuItems="menuItems"
          :listDishes="listDishes"
          :dishesOrder="dishesOrder"
          :changeDishOrder="changeDishOrder"
        />
      </v-col>
      <v-col md="5">
        <OrderContainer
          :orderId="orderId"
          :tabOptions="dropdownItems"
          :dishesOrder="dishesOrder"
          :onDelete="changeDishOrder"
          :changeNoteQuantity="changeNoteQuantity"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./HomeContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
