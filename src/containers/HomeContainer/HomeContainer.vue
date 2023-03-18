<template>
  <div class="home-page">
    <v-row>
      <v-col md="8">
        <MenuContainer
          :title="restoName"
          :date="date"
          :dropdownItems="dropdownItems"
          :menuItems="menuItems"
          :listDishes="listDishes"
          :dishesOrder="dishesOrder"
          :changeDishOrder="changeDishOrder"
          :selectValue="selectValue"
          :changeSelect="changeSelect"
        />
      </v-col>
      <v-col md="4">
        <OrderContainer
          :orderId="orderId"
          :tabOptions="dropdownItems"
          :dishesOrder="dishesOrder"
          :onDelete="changeDishOrder"
          :changeNoteQuantity="changeNoteQuantity"
          :showPopUp="showPopUp"
          :selectValue="selectValue"
          :changeSelect="changeSelect"
        />
      </v-col>
    </v-row>
    <v-row class="pop-up" v-if="popUp">
      <v-col md="4"></v-col>
      <v-col md="4">
        <ConfirmationContainer
          :dishesOrder="dishesOrder"
          :onDelete="changeDishOrder"
          :changeNoteQuantity="changeNoteQuantity"
          :orderId="orderId"
          :showPopUp="showPopUp"
        />
      </v-col>
      <v-col md="4">
        <PaymentContainer
          :dropdownItems="dropdownItems"
          :paymentInfo="paymentInfo"
          :paymentMethods="paymentMethods"
          :showPopUp="showPopUp"
          :selectValue="selectValue"
          :changeSelect="changeSelect"
          :numberPayment="numberPayment"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./HomeContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
