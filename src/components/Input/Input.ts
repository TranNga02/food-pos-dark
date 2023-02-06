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

  inputValue = '';

  get classNames(): string {
    return `base-input ${this.className || ''}`;
  }

  created(): void {
    this.inputValue = this.value || '';
  }

  changeInput(value: string): void {
    if (this.onChange) {
      console.log(value);
      this.onChange(value);
    }
  }
}
