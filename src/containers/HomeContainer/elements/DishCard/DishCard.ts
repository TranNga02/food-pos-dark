import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({})
export default class DishCard extends Vue {
  @Prop({ required: true }) readonly dishInfo: App.DishInfo;
}
