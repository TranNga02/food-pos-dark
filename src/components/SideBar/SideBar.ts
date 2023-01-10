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
      path: '',
    },
    {
      icon: 'discount',
      path: 'discount',
    },
    {
      icon: 'dashboard',
      path: 'dashboard',
    },
    {
      icon: 'message',
      path: 'message',
    },
    {
      icon: 'notification',
      path: 'notification',
    },
    {
      icon: 'setting',
      path: 'setting',
    },
  ];
}
