import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({})
export default class DishCard extends Vue {
  @Prop({ required: true }) readonly productInfo: Product.ProductInfo;
  @Prop({ required: true }) readonly productOrderInfo: Product.ProductOrderInfo[];
  @Prop({ required: false }) readonly className: string;
  @Prop({ required: true }) readonly onChangeDish: (productId: string) => void;

  get classNames(): string {
    if (this.isActive) {
      return `dish-card active ${this.className || ''}`;
    }
    return `dish-card ${this.className || ''}`;
  }

  get isActive(): boolean {
    const result = this.productOrderInfo.find(product => product.info.id === this.productInfo.id);
    return !!result;
  }

  onClickCard(): void {
    this.onChangeDish(this.productInfo.id);
  }
}
