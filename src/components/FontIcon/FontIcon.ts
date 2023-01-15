import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({})
export default class FontIcon extends Vue {
  @Prop({ required: true }) readonly name: string;
  @Prop({ required: true }) readonly color: string;
  @Prop({ required: true }) readonly size: number;
}
