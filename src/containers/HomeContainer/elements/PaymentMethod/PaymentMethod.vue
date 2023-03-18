<template>
  <v-tabs
    v-model="selectValue"
    :class="classNames"
    :disabled="disabled"
    @change="changeSelect"
    hide-slider
    background-color="transparent"
    height="70px"
  >
    <v-tab v-for="method in paymentMethods" :key="method.name">
      <div>
        <FontIcon :name="method.icon" color="#abbbc2" :size="24" />
        <FontIcon name="checkmark-circle" color="#ea7c69" :size="16" />
        <p class="name">{{ method.name }}</p>
      </div>
      <div></div>
    </v-tab>
  </v-tabs>
</template>

<script lang="ts" src="./PaymentMethod.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
