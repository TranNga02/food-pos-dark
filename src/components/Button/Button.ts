import { Component, Vue, Prop } from 'vue-property-decorator';
import { ButtonType } from '@/enums/app';

@Component({})
export default class Button extends Vue {
  @Prop({ required: true }) readonly label: string;
  @Prop({ default: false }) readonly loading: boolean;
  @Prop({ default: false }) readonly disabled: boolean;
  @Prop({
    default: ButtonType.BUTTON,
    validator(value: ButtonType) {
      return [ButtonType.SUBMIT, ButtonType.BUTTON].includes(value);
    },
  })
  readonly type: string;
  @Prop({}) readonly className: string;
  @Prop({
    default: () => {
      //
    },
  })
  readonly onClick: () => void;

  clickBtn(): void {
    if (this.onClick) {
      this.onClick();
    }
  }

  get classNames(): string {
    return `btn ${this.className}`;
  }
}
