import { Vue, Prop, Component } from 'vue-property-decorator';
import Input from '@/components/Input';
import Button from '@/components/Button';

@Component({
  components: { Input, Button },
})
export default class ConfirmDishCard extends Vue {
  @Prop({ required: true }) readonly dishOrder: Dish.DishOrder;
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

  quantity = '1';
  noteValue = '';

  get total(): number {
    return Number((parseInt(this.quantity) * this.dishOrder.price).toFixed(2));
  }

  onChangeNote(value: string): void {
    this.noteValue = value;
    if (this.changeNote) {
      this.changeNote(this.dishOrder.id, this.noteValue);
    }
  }

  onChangeQuantity(value: string): void {
    this.quantity = value;
    if (this.changeQuantity) {
      this.changeQuantity(this.dishOrder.id, Number(this.quantity));
    }
  }

  clickBtn(): void {
    if (this.onDelete) {
      this.onDelete(this.dishOrder.id);
    }
  }
}
