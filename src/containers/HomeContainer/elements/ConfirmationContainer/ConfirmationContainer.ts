import { Vue, Component, Prop } from 'vue-property-decorator';
import Button from '@/components/Button';
import FontIcon from '@/components/FontIcon';
import ConfirmDishCard from '../ConfirmDishCard';

@Component({
  components: { ConfirmDishCard, Button, FontIcon },
})
export default class ConfirmationContainer extends Vue {
  @Prop({ default: '' }) readonly orderId: string;
  @Prop({ required: true }) readonly subTotal: number;
  @Prop({ required: true }) readonly discount: number;
  @Prop({ required: true }) readonly productOrderInfo: Product.ProductOrderInfo[];
  @Prop({ required: true }) readonly changeNoteQuantity: (productId: string, quantity: string) => void;
  @Prop({ required: true }) readonly onDelete: (productId: string) => void;
  @Prop({ required: true }) readonly togglePopup: () => void;
}
