<template>
  <DashboardLayout>
    <HomeContainer />
  </DashboardLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HomeContainer } from '@/containers/HomeContainer';
import DashboardLayout from '@/layout';

@Component({
  components: {
    HomeContainer,
    DashboardLayout,
  },
})
export default class HomePage extends Vue {}
</script>
