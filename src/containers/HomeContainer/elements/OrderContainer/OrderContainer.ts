import { Vue, Component, Prop } from 'vue-property-decorator';
import Tabs from '@/components/Tabs';
import ConfirmDishCard from '../ConfirmDishCard';
import Button from '@/components/Button';

@Component({
  components: { Tabs, ConfirmDishCard, Button },
})
export default class OrderContainer extends Vue {
  @Prop({ default: 'Orders #34562' }) readonly title: string;
  @Prop({}) readonly tabOptions: App.Option[];
  @Prop({}) readonly dishesOrder: Dish.DishOrder[];
  @Prop({
    default: () => {
      //
    },
  })
  readonly changeQuantity: (dishId: number, quantity: number) => void;
  @Prop({
    default: () => {
      //
    },
  })
  readonly changeNote: (dishId: number, note: string) => void;
  @Prop({
    default: () => {
      //
    },
  })
  readonly onDelete: (dishId: number) => void;

  selectValue = '0';
  subTotal = 0;
  discount = 0;

  get getSubTotal(): number {
    this.subTotal = 0;
    for (const dish of this.dishesOrder) {
      this.subTotal += dish.price * dish.quantity;
    }
    this.subTotal -= this.discount;
    return Number(this.subTotal.toFixed(2));
  }

  changeSelect(value: string): void {
    this.selectValue = value;
  }
}
