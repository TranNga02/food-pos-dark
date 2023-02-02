import FontIcon from '../FontIcon';

<template>
  <v-text-field
    hide-details
    :class="classNames"
    :type="type"
    :loading="loading"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    background-color="#2D303E"
    solo
  >
    <template v-slot:prepend-inner>
      <FontIcon v-if="icon" :name="icon" color="#FFFFFF" :size="20" />
    </template>
  </v-text-field>
</template>

<script lang="ts" src="./Input.ts"></script>

<style lang="scss" src="./style.scss"></style>
