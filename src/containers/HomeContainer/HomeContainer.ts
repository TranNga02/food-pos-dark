import { Component, Vue } from 'vue-property-decorator';
import { listDishes, menuItems, dropdownItems } from '@/mockData/mockData';
import MenuContainer from './elements/MenuContainer';
import OrderContainer from './elements/OrderContainer';

@Component({
  components: { MenuContainer, OrderContainer },
})
export default class HomeContainer extends Vue {
  readonly dropdownItems = dropdownItems;
  readonly menuItems = menuItems;
  readonly listDishes = listDishes;

  dishesOrder: Dish.DishOrder[] = [];

  changeDishOrder(dishId: number): void {
    const index = this.dishesOrder.findIndex(dish => dish.id === dishId);
    if (index !== -1) {
      this.dishesOrder = this.dishesOrder.filter(dish => dish.id !== dishId);
    } else {
      this.dishesOrder.push(this.createDishOrder(dishId));
    }
  }

  createDishOrder(dishId: number): Dish.DishOrder {
    const dish: Dish.DishInfo = Object.values(listDishes)
      .flat()
      .find(dish => dish.id === dishId);
    return {
      id: dish.id,
      src: dish.src,
      name: dish.name,
      price: dish.price,
      available: dish.available,
      quantity: 1,
      note: '',
    };
  }

  changeNoteQuantity(dishId: number, note: string, quantity: number): void {
    const index = this.dishesOrder.findIndex(dish => dish.id === dishId);
    if (index !== -1) {
      this.dishesOrder[index].note = note;
      this.dishesOrder[index].quantity = quantity;
    }
  }
}
