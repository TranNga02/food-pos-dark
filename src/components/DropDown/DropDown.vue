<template>
  <v-select
    v-model="selectValue"
    :class="classNames"
    :loading="loading"
    :disabled="disabled"
    :label="label"
    :items="options"
    @change="changeSelect"
    background-color="#1f1d2b"
    solo
    hide-details
  >
    <template v-slot:prepend-inner> <FontIcon name="arrow-ios-down" color="#FFFFFF" :size="10" /> </template>
  </v-select>
</template>

<script lang="ts" src="./DropDown.ts"></script>

<style lang="scss" src="./style.scss"></style>
