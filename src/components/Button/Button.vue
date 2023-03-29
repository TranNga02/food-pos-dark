<template>
  <v-btn
    :class="classNames"
    :type="type"
    :loading="loading"
    :disabled="disabled"
    @click="clickBtn"
    :color="variant"
    :plain="plain"
    height="48px"
    :width="width"
    min-width="48px"
    :block="block"
  >
    <FontIcon v-if="icon" :name="icon" :color="iconColor" :size="20" />
    {{ label }}
  </v-btn>
</template>

<script lang="ts" src="./Button.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
