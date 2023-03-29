import { Vue, Component, Prop } from 'vue-property-decorator';
import Button from '@/components/Button';
import Input from '@/components/Input';
import DropDown from '@/components/DropDown';
import PaymentMethod from '../PaymentMethod';

@Component({
  components: { Button, PaymentMethod, Input, DropDown },
})
export default class PaymentContainer extends Vue {
  @Prop({ default: 0 }) readonly numberPayment: number;
  @Prop({ required: true }) readonly selectValue: string;
  @Prop({ required: true }) readonly dropdownItems: App.Option[];
  @Prop({ required: true }) readonly paymentInfo: Payment.CreditCardInfo;
  @Prop({ required: true }) readonly paymentMethods: Payment.PaymentMethod[];
  @Prop({ required: true }) readonly togglePopup: () => void;
  @Prop({ required: true }) readonly changeSelect: (value: string) => void;
}
