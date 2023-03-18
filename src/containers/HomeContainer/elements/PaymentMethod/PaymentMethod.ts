import { Component, Vue, Prop } from 'vue-property-decorator';
import FontIcon from '@/components/FontIcon';

@Component({
  components: { FontIcon },
})
export default class PaymentMethod extends Vue {
  @Prop({ default: false }) readonly disabled: boolean;
  @Prop({ required: false }) readonly value: string;
  @Prop({}) readonly paymentMethods: Payment.PaymentMethod[];
  @Prop({}) readonly className: string;
  @Prop({
    default: () => {
      //
    },
  })
  readonly onChange: (newValue: string) => void;

  selectValue = 0;

  get classNames(): string {
    return `payment-method ${this.className || ''}`;
  }

  created(): void {
    this.selectValue = parseInt(this.value);
  }

  changeSelect(value: number): void {
    if (this.onChange) {
      this.onChange(value.toString());
    }
  }
}
