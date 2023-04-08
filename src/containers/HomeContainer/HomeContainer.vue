<template>
  <div class="home-page">
    <v-row>
      <v-col md="8">
        <MenuContainer
          :dropdownItems="dropdownItems"
          :menuCategory="menuCategory"
          :productOrderInfo="productOrderInfo"
          :listProduct="listProduct"
          :orderType="orderType"
          :changeProductOrder="changeProductOrder"
          :changeOrderType="changeOrderType"
        />
      </v-col>
      <v-col md="4">
        <OrderContainer
          :orderId="orderId"
          :subTotal="getSubTotal"
          :discount="discount"
          :tabOptions="dropdownItems"
          :productOrderInfo="productOrderInfo"
          :orderType="orderType"
          :onDelete="changeProductOrder"
          :changeNoteQuantity="changeNoteQuantity"
          :togglePopup="togglePopup"
          :changeOrderType="changeOrderType"
        />
      </v-col>
    </v-row>
    <v-row class="pop-up" v-if="isShowPopup">
      <v-col md="4"></v-col>
      <v-col md="4">
        <ConfirmationContainer
          :orderId="orderId"
          :subTotal="getSubTotal"
          :discount="discount"
          :productOrderInfo="productOrderInfo"
          :onDelete="changeProductOrder"
          :changeNoteQuantity="changeNoteQuantity"
          :togglePopup="togglePopup"
        />
      </v-col>
      <v-col md="4">
        <PaymentContainer
          :dropdownItems="dropdownItems"
          :paymentInfo="paymentInfo"
          :paymentMethods="paymentMethods"
          :togglePopup="togglePopup"
          :orderType="orderType"
          :paymentMethod="paymentMethod"
          :changeOrderType="changeOrderType"
          :changePaymentMethod="changePaymentMethod"
          :confirmPayment="confirmPayment"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./HomeContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
