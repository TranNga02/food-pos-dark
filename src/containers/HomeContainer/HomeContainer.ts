import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button';

@Component({
  components: { Button },
})
export default class HomeContainer extends Vue {}
