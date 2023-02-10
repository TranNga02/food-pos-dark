import { Vue, Prop, Component } from 'vue-property-decorator';
import Input from '@/components/Input';
import DropDown from '@/components/DropDown';
import DishCard from '../DishCard';

@Component({
  components: { Input, DropDown, DishCard },
})
export default class MenuContainer extends Vue {
  @Prop({ default: 'Jaegar Resto' }) readonly title: string;
  @Prop({ default: 'Tuesday, 2 Feb 2021' }) readonly date: string;

  readonly items: App.MenuBarItem[] = [
    {
      name: 'Hot Dishes',
      path: '/home/hot-dishes',
    },
    {
      name: 'Cold Dishes',
      path: '/cold-dishes',
    },
    {
      name: 'Soup',
      path: '/soup',
    },
    {
      name: 'Grill',
      path: '/grill',
    },
    {
      name: 'Appetizer',
      path: '/appetizer',
    },
    {
      name: 'Dessert',
      path: '/dessert',
    },
  ];

  select = '1';

  changeSelect(value: string): void {
    this.select = value;
  }
}
