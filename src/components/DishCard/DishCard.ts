import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class DishCard extends Vue {
  @Prop({ required: true }) readonly dishInfo: {
    readonly image: string;
    readonly name: string;
    readonly price: number;
    readonly availableProduct: number;
  };
}
