import { Vue, Component, Prop } from 'vue-property-decorator';
import Tabs from '@/components/Tabs';
import Button from '@/components/Button';
import ConfirmDishCard from '../ConfirmDishCard';

@Component({
  components: { Tabs, ConfirmDishCard, Button },
})
export default class OrderContainer extends Vue {
  @Prop({ default: '' }) readonly orderId: string;
  @Prop({ required: true }) readonly orderType: string;
  @Prop({ required: true }) readonly subTotal: number;
  @Prop({ required: true }) readonly discount: number;
  @Prop({ required: true }) readonly tabOptions: App.Option[];
  @Prop({ required: true }) readonly productOrderInfo: Product.ProductOrderInfo[];
  @Prop({ required: true }) readonly changeOrderType: (value: string) => void;
  @Prop({ required: true }) readonly changeNoteQuantity: (productId: string, quantity: string) => void;
  @Prop({ required: true }) readonly onDelete: (productId: string) => void;
  @Prop({ required: true }) readonly togglePopup: () => void;
}
