<template>
  <div class="sign-in-page">
    <div class="sign-in-form">
      <p class="label">Welcome Back!</p>
      <Input label="Email" :value="email" :onChange="onChangeEmail" />
      <Input label="Password" :value="password" type="password" :onChange="onChangePassword" />
      <p class="error-message">{{ errorMessage }}</p>
      <Button :onClick="clickBtn" label="Sign In" variant="primary" block />
    </div>
  </div>
</template>

<script lang="ts" src="./SignInContainer.ts"></script>

<style scoped lang="scss" src="./style.scss"></style>
