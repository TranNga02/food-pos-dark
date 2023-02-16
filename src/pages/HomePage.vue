<template>
  <DashboardLayout>
    <router-view />
  </DashboardLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DashboardLayout from '@/layout';

@Component({
  components: {
    DashboardLayout,
  },
})
export default class HomePage extends Vue {}
</script>
