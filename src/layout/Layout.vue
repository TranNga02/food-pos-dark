<template>
  <div class="dark-layout">
    <SideBar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" src="./Layout.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
