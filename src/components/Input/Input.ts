import { Component, Vue, Prop } from 'vue-property-decorator';
import { InputType } from '@/enums/app';
import FontIcon from '@/components/FontIcon';

@Component({
  components: { FontIcon },
})
export default class Button extends Vue {
  @Prop({ required: false }) readonly label: string;
  @Prop({ default: false }) readonly loading: boolean;
  @Prop({ default: false }) readonly disabled: boolean;
  @Prop({ required: false }) readonly placeholder: string;
  @Prop({ required: false }) readonly icon: string;
  @Prop({
    default: InputType.TEXT,
    validator(value: InputType) {
      return [InputType.TEXT, InputType.TEXTAREA, InputType.PASSWORD].includes(value);
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
    return `txt ${this.className}`;
  }
}
