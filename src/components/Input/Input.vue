<template>
  <v-text-field
    hide-details
    persistent-placeholder
    :solo="solo"
    :class="classNames"
    :type="type"
    :loading="loading"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    :min="1"
    :max="max"
    v-model="inputValue"
    @input="changeInput"
    background-color="#2D303E"
    color="#ffffff"
  >
    <template v-slot:prepend-inner>
      <FontIcon v-if="icon" :name="icon" color="#FFFFFF" :size="20" />
    </template>
  </v-text-field>
</template>

<script lang="ts" src="./Input.ts"></script>

<style lang="scss" src="./style.scss"></style>
