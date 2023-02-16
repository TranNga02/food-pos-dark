<template>
  <div class="dashboard-layout">
    <SideBar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" src="./DashboardLayout.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
