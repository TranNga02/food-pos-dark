<template>
  <v-tabs
    v-model="selectValue"
    :class="classNames"
    :disabled="disabled"
    @change="changeSelect"
    hide-slider
    background-color="transparent"
    height="34px"
  >
    <v-tab v-for="tab in options" :key="tab.value">
      {{ tab.text }}
    </v-tab>
  </v-tabs>
</template>

<script lang="ts" src="./Tabs.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
