<template>
  <div class="confirmation">
    <FontIcon name="back" color="#ffffff" :size="20" :onClick="togglePopup" />
    <div class="confirmation__header">
      <div>
        <p class="confirmation__header__title">Confirmation</p>
        <p class="confirmation__header__id">Order #{{ orderId }}</p>
      </div>
      <Button variant="primary" icon="add" iconColor="#fafafa" />
    </div>
    <div class="confirmation__content">
      <ConfirmDishCard
        v-for="product in productOrderInfo"
        :key="product.info.id"
        :productOrderInfo="product"
        :onDelete="onDelete"
        :changeNoteQuantity="changeNoteQuantity"
      />
    </div>
    <div class="confirmation__footer">
      <div>
        <p>Discount</p>
        <p>$ {{ discount }}</p>
      </div>
      <div>
        <p>Sub total</p>
        <p>$ {{ subTotal }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ConfirmationContainer.ts"></script>

<style lang="scss" src="./style.scss"></style>
