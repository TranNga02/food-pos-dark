<template>
  <v-text-field
    hide-details
    persistent-placeholder
    :solo="solo"
    :class="`${classNames} my-3`"
    :type="type"
    :loading="loading"
    :disabled="disabled"
    :label="label"
    :value="value"
    :placeholder="placeholder"
    background-color="#2D303E"
    color="#ffffff"
  >
    <template v-slot:prepend-inner>
      <FontIcon v-if="icon" name="search" color="#FFFFFF" :size="20" />
    </template>
  </v-text-field>
</template>

<script lang="ts" src="./Input.ts"></script>

<style lang="scss" src="./style.scss"></style>
