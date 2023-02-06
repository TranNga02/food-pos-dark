import { Component, Vue, Prop } from 'vue-property-decorator';
import { InputType } from '@/enums/app';
import FontIcon from '@/components/FontIcon';

@Component({
  components: { FontIcon },
})
export default class Input extends Vue {
  @Prop({ required: false }) readonly label: string;
  @Prop({ default: false }) readonly loading: boolean;
  @Prop({ default: false }) readonly disabled: boolean;
  @Prop({ required: false }) readonly placeholder: string;
  @Prop({ required: false }) readonly value: string;
  @Prop({ required: false }) readonly icon: string;
  @Prop({ default: false }) readonly solo: boolean;
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
  readonly onChange: (newValue: string) => void;

  changeInput(e: Event): void {
    if (this.onChange) {
      this.onChange(e.toString());
    }
  }

  inputValue = '';

  created(): void {
    this.inputValue = this.value || '';
  }

  get classNames(): string {
    return `base-input my-3 ${this.className || ''}`;
  }
}
