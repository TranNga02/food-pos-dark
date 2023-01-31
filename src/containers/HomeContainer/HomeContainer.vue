<template>
  <div class="home-page">
    <!-- <SideBar /> -->
    <Button :label="'Confirm Payment'" :color="'primary'" :plain="true" />
    <Button :color="'primary'" :icon="'trash'" />
    <Button :label="'Confirm Payment'" :color="'primary'" :icon="'trash'" />
    <Button :label="'Cancel'" :className="'default'" />
    <Button :color="'default'" :icon="'trash'" />
    <Button :label="'Confirm Payment'" :color="'default'" :icon="'trash'" />
  </div>
</template>

<script lang="ts" src="./HomeContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
