<template>
  <v-btn
    :class="classNames"
    :type="type"
    :loading="loading"
    :disabled="disabled"
    @click="clickBtn"
    :color="color"
    :plain="plain"
    height="48px"
    min-width="fit-content"
  >
    <FontIcon v-if="icon" :name="icon" :color="setIconColor" :size="20" />
    {{ label }}
  </v-btn>
</template>

<script lang="ts" src="./Button.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
