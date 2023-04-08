<template>
  <SignInContainer />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SignInContainer from '@/containers/SignInContainer';

@Component({
  components: {
    SignInContainer,
  },
})
export default class SignInPage extends Vue {}
</script>
