<template>
  <HomeContainer />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HomeContainer } from '@/containers/HomeContainer';

@Component({
  components: {
    HomeContainer,
  },
})
export default class Home extends Vue {}
</script>
