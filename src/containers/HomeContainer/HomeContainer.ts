import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button';
import SideBar from '@/components/SideBar';
import Input from '@/components/Input';

@Component({
  components: { Button, SideBar, Input },
})
export default class HomeContainer extends Vue {
  value = 'Levi Ackerman';

  changeValue(newValue: string): void {
    this.value = newValue;
  }
}
