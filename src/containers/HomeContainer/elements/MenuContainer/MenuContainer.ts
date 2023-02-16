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

  readonly menuItems: App.MenuBarItem[] = [
    {
      name: 'Hot Dishes',
      value: 0,
    },
    {
      name: 'Cold Dishes',
      value: 1,
    },
    {
      name: 'Soup',
      value: 2,
    },
    {
      name: 'Grill',
      value: 3,
    },
    {
      name: 'Appetizer',
      value: 4,
    },
    {
      name: 'Dessert',
      value: 5,
    },
  ];

  readonly dropdownItems: App.Option[] = [
    {
      text: 'Dine In',
      value: '1',
    },
    {
      text: 'To Go',
      value: '2',
    },
    {
      text: 'Delivery',
      value: '3',
    },
  ];

  readonly listDishes: Dish.ListDishes = {
    hotDishes: [
      {
        src: 'Image 1.png',
        name: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
      },
      {
        src: 'Image 1.png',
        name: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
      },
      {
        src: 'Image 1.png',
        name: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
      },
      {
        src: 'Image 1.png',
        name: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
      },
      {
        src: 'Image 1.png',
        name: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
      },
    ],
    coldDishes: [
      {
        src: 'Image 2.png',
        name: 'Salted Pasta with mushroom sauce',
        price: 2,
        available: 11,
      },
      {
        src: 'Image 2.png',
        name: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
      },
      {
        src: 'Image 2.png',
        name: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
      },
      {
        src: 'Image 2.png',
        name: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
      },
      {
        src: 'Image 2.png',
        name: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
      },
    ],
    soup: [
      {
        src: 'Image 3.png',
        name: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
      },
      {
        src: 'Image 3.png',
        name: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
      },
      {
        src: 'Image 3.png',
        name: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
      },
      {
        src: 'Image 3.png',
        name: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
      },
    ],
    grill: [
      {
        src: 'Image 4.png',
        name: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
      },
      {
        src: 'Image 4.png',
        name: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
      },
      {
        src: 'Image 4.png',
        name: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
      },
    ],
    appetizer: [
      {
        src: 'Image 5.png',
        name: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
      },
      {
        src: 'Image 5.png',
        name: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
      },
      {
        src: 'Image 5.png',
        name: 'Hot spicy fried rice with omelet',
        price: 3.49,
        available: 13,
      },
      {
        src: 'Image 5.png',
        name: 'Spicy instant noodle with special omelette',
        price: 3.59,
        available: 17,
      },
    ],
    dessert: [
      {
        src: 'Image 6.png',
        name: 'Salted Pasta with mushroom sauce',
        price: 2.69,
        available: 11,
      },
      {
        src: 'Image 6.png',
        name: 'Beef dumpling in hot and sour soup',
        price: 2.99,
        available: 16,
      },
      {
        src: 'Image 6.png',
        name: 'Healthy noodle with spinach leaf',
        price: 3.29,
        available: 22,
      },
    ],
  };

  selectValue = '';
  menuValue = 0;

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
}
