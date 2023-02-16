import { Component, Vue, Prop } from 'vue-property-decorator';
import FontIcon from '@/components/FontIcon';

@Component({
  components: { FontIcon },
})
export default class DropDown extends Vue {
  @Prop({ required: false }) readonly label: string;
  @Prop({ default: false }) readonly loading: boolean;
  @Prop({ default: false }) readonly disabled: boolean;
  @Prop({ default: '' }) readonly value: string;
  @Prop({ required: false }) readonly options: App.Option[];
  @Prop({}) readonly className: string;
  @Prop({
    default: () => {
      //
    },
  })
  readonly onChange: (newValue: string) => void;

  selectValue = '';

  get classNames(): string {
    return `dropdown ${this.className || ''}`;
  }

  created(): void {
    this.selectValue = this.value;
  }

  changeSelect(value: string): void {
    if (this.onChange) {
      this.onChange(value);
    }
  }
}
