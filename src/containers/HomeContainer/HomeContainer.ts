import { Component, Vue } from 'vue-property-decorator';
import DashboardLayout from '@/layout';
import MenuContainer from './elements/MenuContainer';

@Component({
  components: { MenuContainer, DashboardLayout },
})
export default class HomeContainer extends Vue {}
