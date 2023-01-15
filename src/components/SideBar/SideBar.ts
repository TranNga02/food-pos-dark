import { Component, Vue } from 'vue-property-decorator';
import { SideBarItem } from '@/types/app';
import FontIcon from '../FontIcon';

@Component({
  components: { FontIcon },
})
export default class SideBar extends Vue {
  readonly items: SideBarItem[] = [
    {
      icon: 'icon-home',
      path: '/',
    },
    {
      icon: 'icon-discount',
      path: '/discount',
    },
    {
      icon: 'icon-dashboard',
      path: '/dashboard',
    },
    {
      icon: 'icon-message',
      path: '/message',
    },
    {
      icon: 'icon-notification',
      path: '/notification',
    },
    {
      icon: 'icon-setting',
      path: '/setting',
    },
  ];
}
