<template>
  <v-btn :class="classNames" :type="type" :loading="loading" :disabled="disabled" @click="clickBtn">{{ label }}</v-btn>
</template>

<script lang="ts" src="./Button.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
