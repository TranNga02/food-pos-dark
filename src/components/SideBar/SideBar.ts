import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon';
@Component({
  components: { Icon },
})
export default class SideBar extends Vue {
  readonly logo: string = 'logo';
  readonly logOut: string = 'log-out';
  readonly items: any = [
    {
      icon: 'home',
    },
    {
      icon: 'discount',
    },
    {
      icon: 'dashboard',
    },
    {
      icon: 'message',
    },
    {
      icon: 'notification',
    },
    {
      icon: 'setting',
    },
  ];
}
