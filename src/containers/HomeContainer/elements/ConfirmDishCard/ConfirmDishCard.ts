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
  readonly changeNoteQuantity: (dishId: number, note: string, quantity: number) => void;
  @Prop({ required: true }) readonly onDelete: (dishId: number) => void;

  quantity = '1';
  noteValue = '';

  get total(): number {
    return Number((parseInt(this.quantity) * this.dishOrder.price).toFixed(2));
  }

  onChangeNote(value: string): void {
    this.noteValue = value;
    if (this.changeNoteQuantity) {
      this.changeNoteQuantity(this.dishOrder.id, this.noteValue, Number(this.quantity));
    }
  }

  onChangeQuantity(value: string): void {
    this.quantity = value;
    if (this.changeNoteQuantity) {
      this.changeNoteQuantity(this.dishOrder.id, this.noteValue, Number(this.quantity));
    }
  }

  clickBtn(): void {
    if (this.onDelete) {
      this.onDelete(this.dishOrder.id);
    }
  }
}
