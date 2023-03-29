import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({})
export default class FontIcon extends Vue {
  @Prop({ required: true }) readonly name: string;
  @Prop({ default: '#EA7C69' }) readonly color: string;
  @Prop({ default: 24 }) readonly size: number;
  @Prop({
    default: () => {
      //
    },
  })
  readonly onClick: () => void;

  get classNames(): string {
    return `icon icon-${this.name}`;
  }

  get style(): string {
    return `color: ${this.color}; font-size: ${this.size}px;`;
  }

  clickIcon(): void {
    if (this.onClick) {
      this.onClick();
    }
  }
}
