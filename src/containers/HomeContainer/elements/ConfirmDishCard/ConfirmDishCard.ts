import { Vue, Prop, Component } from 'vue-property-decorator';
import Input from '@/components/Input';
import Button from '@/components/Button';

@Component({
  components: { Input, Button },
})
export default class ConfirmDishCard extends Vue {
  @Prop({ required: true }) readonly productOrderInfo: Product.ProductOrderInfo;
  @Prop({ required: true }) readonly changeNoteQuantity: (productId: string, quantity: string) => void;
  @Prop({ required: true }) readonly onDelete: (product: string) => void;

  quantity = 1;

  get total(): number {
    return Number((this.productOrderInfo.quantity * this.productOrderInfo.info.price).toFixed(2));
  }

  onChangeQuantity(value: string): void {
    this.quantity = parseInt(value);
    this.changeNoteQuantity(this.productOrderInfo.info.id, value);
  }

  clickBtn(): void {
    this.onDelete(this.productOrderInfo.info.id);
  }
}
