import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Tabs extends Vue {
  @Prop({ default: false }) readonly disabled: boolean;
  @Prop({ required: false }) readonly value: string;
  @Prop({ required: false }) readonly options: App.Option[];
  @Prop({}) readonly className: string;
  @Prop({
    default: () => {
      //
    },
  })
  readonly onChange: (newValue: string) => void;

  selectValue = 0;

  get classNames(): string {
    return `tab ${this.className || ''}`;
  }

  created(): void {
    this.selectValue = parseInt(this.value);
  }

  changeSelect(value: number): void {
    if (this.onChange) {
      this.onChange(value.toString());
    }
  }
}
