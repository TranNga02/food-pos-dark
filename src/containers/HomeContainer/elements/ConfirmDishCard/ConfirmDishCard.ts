import { Vue, Prop, Component } from 'vue-property-decorator';
import Input from '@/components/Input';
import Button from '@/components/Button';

@Component({
  components: { Input, Button },
})
export default class ConfirmDishCard extends Vue {
  @Prop({ required: true }) readonly dishOrder: Dish.DishOrder;
  @Prop({ required: true }) readonly changeNoteQuantity: (dishId: number, input: Dish.DishOrderInfo) => void;
  @Prop({ required: true }) readonly onDelete: (dishId: number) => void;

  dishOrderInfo: Dish.DishOrderInfo = {
    quantity: 1,
    note: '',
  };

  get total(): number {
    return Number((this.dishOrderInfo.quantity * this.dishOrder.price).toFixed(2));
  }

  onChangeNote(value: string): void {
    this.dishOrderInfo.note = value;
    this.changeNoteQuantity(this.dishOrder.id, this.dishOrderInfo);
  }

  onChangeQuantity(value: number): void {
    this.dishOrderInfo.quantity = value;
    this.changeNoteQuantity(this.dishOrder.id, this.dishOrderInfo);
  }

  clickBtn(): void {
    this.onDelete(this.dishOrder.id);
  }
}
