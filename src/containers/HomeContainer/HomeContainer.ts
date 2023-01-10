import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/SideBar';
import { DishCard } from '@/components/DishCard';
import { MenuContainer } from '../MenuContainer';
@Component({
  components: { SideBar, DishCard, MenuContainer },
})
export default class HomeContainer extends Vue {}
