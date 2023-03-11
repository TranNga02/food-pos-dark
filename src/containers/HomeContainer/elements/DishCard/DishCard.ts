import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({})
export default class DishCard extends Vue {
  @Prop({ required: true }) readonly dishInfo: Dish.DishInfo;
  @Prop({ required: true }) readonly dishesOrder: Dish.DishOrder[];
  @Prop({ required: false }) readonly className: string;
  @Prop({ required: true }) readonly onChangeDish: (dish: number) => void;

  get classNames(): string {
    if (this.isActive) {
      return `dish-card active ${this.className || ''}`;
    }
    return `dish-card ${this.className || ''}`;
  }

  get isActive(): boolean {
    const result = this.dishesOrder.find(dish => dish.id === this.dishInfo.id);
    return !!result;
  }

  onClickCard(): void {
    this.onChangeDish(this.dishInfo.id);
  }
}
