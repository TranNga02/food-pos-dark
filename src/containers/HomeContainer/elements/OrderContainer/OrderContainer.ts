import { Vue, Component, Prop } from 'vue-property-decorator';
import Tabs from '@/components/Tabs';
import Button from '@/components/Button';
import ConfirmDishCard from '../ConfirmDishCard';

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
  readonly changeNoteQuantity: (dishId: number, input: Dish.Input) => void;
  @Prop({ required: true }) readonly onDelete: (dishId: number) => void;

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
