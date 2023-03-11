import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({})
export default class DishCard extends Vue {
  @Prop({ required: true }) readonly dishInfo: Dish.DishInfo;
  @Prop({}) readonly dishesOrder: Dish.DishOrder[];
  @Prop({}) readonly className: string;
  @Prop({
    default: () => {
      //
    },
  })
  readonly onChangeDish: (dish: number) => void;

  get classNames(): string {
    if (this.isActive) {
      return `dish-card active ${this.className || ''}`;
    }
    return `dish-card ${this.className || ''}`;
  }

  get isActive(): boolean {
    const index = this.dishesOrder.findIndex(dish => dish.id === this.dishInfo.id);
    if (index != -1) {
      return true;
    }
    return false;
  }

  onClickCard(): void {
    if (this.onChangeDish) {
      this.onChangeDish(this.dishInfo.id);
    }
  }
}
