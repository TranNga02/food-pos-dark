<template>
  <div class="home-page">
    <Input placeholder="Order Note..." solo />
    <Input placeholder="Order Note..." value="Please, just a little bit spicy only." solo />
    <Input placeholder="Search for food, coffe, etc.." :icon="true" solo />
    <Input placeholder="This is placeholder" label="Cardholder Name" value="Levi Ackerman" />
    <Input placeholder="This is placeholder" label="CVV" value="123" type="password" />
    <Input placeholder="This is placeholder" label="Cardholder Name" value="Levi Ackerman" />
  </div>
</template>

<script lang="ts" src="./HomeContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
