import { Vue } from 'vue-property-decorator';

export default class SideBar extends Vue {
  readonly logo: string = 'icon-Logo';
  readonly logOut: string = 'icon-Log-Out';
  readonly items: any = [
    {
      icon: 'icon-Home',
      path: '/',
    },
    {
      icon: 'icon-Discount',
      path: '/discount',
    },
    {
      icon: 'icon-Dashboard',
      path: '/dashboard',
    },
    {
      icon: 'icon-Message',
      path: '/message',
    },
    {
      icon: 'icon-Notification',
      path: '/notification',
    },
    {
      icon: 'icon-Setting',
      path: '/setting',
    },
  ];
}
