<template>
  <div class="payment">
    <div class="payment__header">
      <p class="payment__header__title">Payment</p>
      <p class="payment__header__number">{{ paymentMethods.length }} payment method available</p>
    </div>
    <div class="payment__method">
      <p class="payment__method__title">Payment method</p>
      <PaymentMethod :onChange="changePaymentMethod" :value="paymentMethod" :paymentMethods="paymentMethods" />
      <Input placeholder="Enter Cardholder Name..." label="Cardholder Name" :value="paymentInfo.name" />
      <Input placeholder="Enter Card Number..." label="Card Number" :value="paymentInfo.number" />
      <v-row>
        <v-col md="6">
          <Input placeholder="Enter Expiration Date..." label="Expiration Date" :value="paymentInfo.expirationDate" />
        </v-col>
        <v-col md="6">
          <Input placeholder="Enter CVV..." label="CVV" :value="paymentInfo.cvv" type="password" />
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6">
          <DropDown
            :options="dropdownItems"
            :value="orderType"
            label="Order Type"
            :onChange="changeOrderType"
            className="dropdown--payment"
          />
        </v-col>
        <v-col md="6">
          <Input placeholder="Enter Table no..." label="Table no." />
        </v-col>
      </v-row>
    </div>
    <div class="payment__footer">
      <v-row>
        <v-col md="6">
          <Button label="Cancel" variant="primary" plain :onClick="togglePopup" block />
        </v-col>
        <v-col md="6">
          <Button label="Confirm Payment" variant="primary" block :onClick="confirmPayment" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" src="./PaymentContainer.ts"></script>

<style lang="scss" src="./style.scss"></style>
