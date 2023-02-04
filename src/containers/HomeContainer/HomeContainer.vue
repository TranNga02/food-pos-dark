<template>
  <div class="home-page">
    <Input placeholder="Order Note..." :onChange="changeValue" solo />
    <Input placeholder="Order Note..." :onChange="changeValue" :value="value" solo />
    <Input placeholder="Search for food, coffe, etc.." :onChange="changeValue" icon="search" solo />
    <Input placeholder="This is placeholder" :onChange="changeValue" label="Cardholder Name" :value="value" />
    <Input placeholder="This is placeholder" :onChange="changeValue" label="CVV" :value="value" type="password" />
    <Input placeholder="This is placeholder" :onChange="changeValue" label="Cardholder Name" :value="value" />
  </div>
</template>

<script lang="ts" src="./HomeContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
