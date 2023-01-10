import { Component, Vue, Prop } from 'vue-property-decorator';
import Button from '@/components/Button';
@Component({
  components: { Button },
})
export default class MenuContainer extends Vue {
  readonly items: string[] = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert'];
  readonly name = 'Jaegar Resto';
  readonly day = 'Tuesday, 2 Feb 2021';
}
