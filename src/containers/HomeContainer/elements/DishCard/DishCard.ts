import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({})
export default class DishCard extends Vue {
  @Prop({ required: true }) readonly dishInfo: Dish.DishInfo;
  @Prop({}) readonly className: string;
  @Prop({
    default: () => {
      //
    },
  })
  readonly onChangeDish: (dish: number) => void;

  get classNames(): string {
    return `dish-card ${this.className || ''}`;
  }

  onClick(): void {
    if (this.onChangeDish) {
      this.onChangeDish(this.dishInfo.id);
    }
  }
}
