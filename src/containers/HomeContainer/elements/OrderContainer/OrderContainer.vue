<template>
  <div class="order">
    <div class="order__header">
      <p class="order__id">{{ title }}</p>
      <Tabs :options="tabOptions" :onChange="changeSelect" :value="selectValue" />
      <v-row class="order__title">
        <v-col md="8"><p>Item</p></v-col>
        <v-col md="2"><p>Qty</p></v-col>
        <v-col md="2"><p>Price</p></v-col>
      </v-row>
    </div>

    <div class="order__content">
      <ConfirmDishCard
        v-for="dish in dishesOrder"
        :key="dish.id"
        :dishOrder="dish"
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
          <p>$ {{ getSubTotal }}</p>
        </div>
      </div>
      <div class="order__btn--payment">
        <Button label="Continue to Payment" variant="primary" className="btn--payment" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./OrderContainer.ts"></script>

<style lang="scss" src="./style.scss"></style>
