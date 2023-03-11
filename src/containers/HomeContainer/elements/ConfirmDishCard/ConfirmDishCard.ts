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
  readonly changeNoteQuantity: (dishId: number, input: Dish.Input) => void;
  @Prop({ required: true }) readonly onDelete: (dishId: number) => void;

  input: Dish.Input = {
    quantity: 1,
    note: '',
  };

  get total(): number {
    return Number((this.input.quantity * this.dishOrder.price).toFixed(2));
  }

  onChangeNote(value: string): void {
    this.input.note = value;
    this.changeNoteQuantity(this.dishOrder.id, this.input);
  }

  onChangeQuantity(value: number): void {
    this.input.quantity = value;
    this.changeNoteQuantity(this.dishOrder.id, this.input);
  }

  clickBtn(): void {
    this.onDelete(this.dishOrder.id);
  }
}
