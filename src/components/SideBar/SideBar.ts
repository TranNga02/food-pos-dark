import { Component, Vue, Prop } from 'vue-property-decorator';
import FontIcon from '@/components/FontIcon';

@Component({
  components: { FontIcon },
})
export default class SideBar extends Vue {
  @Prop({ required: true }) readonly logOut: () => void;

  readonly items: App.SideBarItem[] = [
    {
      icon: 'home',
      path: '/',
    },
    {
      icon: 'discount',
      path: '/discount',
    },
    {
      icon: 'dashboard',
      path: '/dashboard',
    },
    {
      icon: 'message',
      path: '/message',
    },
    {
      icon: 'notification',
      path: '/notification',
    },
    {
      icon: 'setting',
      path: '/setting',
    },
  ];
}
