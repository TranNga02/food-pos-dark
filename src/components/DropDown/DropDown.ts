import { Component, Vue, Prop } from 'vue-property-decorator';
import FontIcon from '../FontIcon';

@Component({
  components: { FontIcon },
})
export default class DropDown extends Vue {
  @Prop({ required: false }) readonly label: string;
  @Prop({ default: false }) readonly loading: boolean;
  @Prop({ default: false }) readonly disabled: boolean;
  @Prop({}) readonly className: string;
  @Prop({
    default: () => {
      //
    },
  })
  readonly onChange: (newValue: string) => void;

  readonly items: App.Option[] = [
    {
      name: 'Dine In',
      value: '1',
    },
    {
      name: 'To Go',
      value: '2',
    },
    {
      name: 'Delivery',
      value: '3',
    },
  ];

  selectValue = '';

  get classNames(): string {
    return `dropdown ${this.className || ''}`;
  }

  created(): void {
    this.selectValue = this.items[0].value;
  }

  changeSelect(value: string): void {
    if (this.onChange) {
      console.log(value);
      this.onChange(value);
    }
  }
}
