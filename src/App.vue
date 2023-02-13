<template>
  <v-app id="app">
    <component :is="$route.meta.layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
export default {};
</script>
