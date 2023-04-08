import { Vue, Prop, Component } from 'vue-property-decorator';
import { getShopInfo } from '@/api/call';
import Input from '@/components/Input';
import DropDown from '@/components/DropDown';
import DishCard from '../DishCard';

@Component({
  components: { Input, DropDown, DishCard },
})
export default class MenuContainer extends Vue {
  @Prop({ required: true }) readonly orderType: string;
  @Prop({ required: true }) readonly dropdownItems: App.Option[];
  @Prop({ required: true }) readonly menuCategory: Category.CategoryInfo[];
  @Prop({ required: true }) readonly listProduct: Product.ListProducts;
  @Prop({ required: true }) readonly productOrderInfo: Product.ProductOrderInfo[];
  @Prop({ required: true }) readonly changeProductOrder: (productId: string) => void;
  @Prop({ required: true }) readonly changeOrderType: (value: string) => void;

  menuValue = 0;
  searchValue = '';
  shopInfo: Shop.ShopInfo = null;

  async created(): Promise<void> {
    this.shopInfo = await getShopInfo();
  }

  get productInfo(): Product.ProductInfo[] {
    if (!this.menuCategory || !this.listProduct) {
      return [];
    }
    const categoryId = this.menuCategory[this.menuValue].id;
    return this.listProduct[categoryId];
  }

  getDate(): string {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    return `${weekdays[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  changeSearch(value: string): void {
    this.searchValue = value;
  }
}
