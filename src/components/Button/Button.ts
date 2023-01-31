import { Component, Vue, Prop } from 'vue-property-decorator';
import { ButtonType } from '@/enums/app';
import FontIcon from '@/components/FontIcon';

@Component({
  components: { FontIcon },
})
export default class Button extends Vue {
  @Prop({ required: false }) readonly label: string;
  @Prop({ default: false }) readonly loading: boolean;
  @Prop({ default: false }) readonly disabled: boolean;
  @Prop({ default: false }) readonly plain: boolean;
  @Prop({ required: false }) readonly color: string;
  @Prop({ required: false }) readonly icon: string;
  @Prop({ required: false }) iconColor: string;
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

  setIconColor(): void {
    if (this.color == 'primary') this.iconColor = '#fafafa';
  }
}
