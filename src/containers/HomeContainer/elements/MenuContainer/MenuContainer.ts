import { Vue, Prop, Component } from 'vue-property-decorator';
import Input from '@/components/Input';
import DropDown from '@/components/DropDown';
import DishCard from '../DishCard';

@Component({
  components: { Input, DropDown, DishCard },
})
export default class MenuContainer extends Vue {
  @Prop({ default: '' }) readonly title: string;
  @Prop({ default: '' }) readonly date: string;
  @Prop({ required: true }) readonly dropdownItems: App.Option[];
  @Prop({ required: true }) readonly menuItems: App.MenuBarItem[];
  @Prop({ required: true }) readonly listDishes: Dish.ListDishes;
  @Prop({ required: true }) readonly dishesOrder: Dish.DishOrder[];
  @Prop({ required: true }) readonly changeDishOrder: (dishId: number) => void;

  selectValue = '';
  menuValue = 0;
  searchValue = '';

  get dishInfo(): Dish.DishInfo[] {
    switch (this.menuValue) {
      case 0:
        return this.listDishes.hotDishes;
      case 1:
        return this.listDishes.coldDishes;
      case 2:
        return this.listDishes.soup;
      case 3:
        return this.listDishes.grill;
      case 4:
        return this.listDishes.appetizer;
      case 5:
        return this.listDishes.dessert;
      default:
        return this.listDishes.hotDishes;
    }
  }

  changeSelect(value: string): void {
    this.selectValue = value;
  }

  changeSearch(value: string): void {
    this.searchValue = value;
  }
}
