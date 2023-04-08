import { Component, Vue } from 'vue-property-decorator';
import { logOut } from '@/api/auth';
import SideBar from '@/components/SideBar';

@Component({
  components: { SideBar },
})
export default class DashboardLayout extends Vue {
  onLogOut(): void {
    logOut();
  }
}
