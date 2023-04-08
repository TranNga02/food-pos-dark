<template>
  <div class="order">
    <div class="order__header">
      <p class="order__id">Order #{{ orderId }}</p>
      <Tabs :options="tabOptions" :onChange="changeOrderType" :value="orderType" />
      <v-row class="order__title">
        <v-col md="8"><p>Item</p></v-col>
        <v-col md="2"><p>Qty</p></v-col>
        <v-col md="2"><p>Price</p></v-col>
      </v-row>
    </div>
    <div class="order__content">
      <ConfirmDishCard
        v-for="product in productOrderInfo"
        :key="product.info.id"
        :productOrderInfo="product"
        :onDelete="onDelete"
        :changeNoteQuantity="changeNoteQuantity"
      />
    </div>
    <div class="order__footer">
      <div class="order__total">
        <div>
          <p>Discount</p>
          <p>$ {{ discount }}</p>
        </div>
        <div>
          <p>Sub total</p>
          <p>$ {{ subTotal }}</p>
        </div>
      </div>
      <div class="order__btn--payment">
        <Button label="Continue to Payment" variant="primary" :onClick="togglePopup" block />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./OrderContainer.ts"></script>

<style lang="scss" src="./style.scss"></style>
