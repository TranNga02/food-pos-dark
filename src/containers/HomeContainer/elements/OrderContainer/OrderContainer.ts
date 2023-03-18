import { Vue, Component, Prop } from 'vue-property-decorator';
import Tabs from '@/components/Tabs';
import Button from '@/components/Button';
import ConfirmDishCard from '../ConfirmDishCard';

@Component({
  components: { Tabs, ConfirmDishCard, Button },
})
export default class OrderContainer extends Vue {
  @Prop({ default: '' }) readonly orderId: string;
  @Prop({ required: true }) readonly selectValue: string;
  @Prop({ required: true }) readonly tabOptions: App.Option[];
  @Prop({ required: true }) readonly dishesOrder: Dish.DishOrder[];
  @Prop({ required: true }) readonly changeSelect: (value: string) => void;
  @Prop({ required: true }) readonly changeNoteQuantity: (dishId: number, input: Dish.DishOrderInfo) => void;
  @Prop({ required: true }) readonly onDelete: (dishId: number) => void;
  @Prop({ required: true }) readonly showPopUp: () => void;

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
}
