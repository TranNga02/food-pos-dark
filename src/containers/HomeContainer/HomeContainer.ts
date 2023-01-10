import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/SideBar';
import { DishCard } from '@/components/DishCard';
@Component({
  components: { SideBar, DishCard },
})
export default class HomeContainer extends Vue {}
