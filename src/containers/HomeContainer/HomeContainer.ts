import { Component, Vue } from 'vue-property-decorator';
import { dropdownItems, orderId, paymentInfo, paymentMethods } from '@/mockData/mockData';
import { getCategories, getProducts, postOrder } from '@/api/call';
import { getAccountInfo } from '@/api/auth';
import MenuContainer from './elements/MenuContainer';
import OrderContainer from './elements/OrderContainer';
import ConfirmationContainer from './elements/ConfirmationContainer';
import PaymentContainer from './elements/PaymentContainer';

@Component({
  components: { MenuContainer, OrderContainer, ConfirmationContainer, PaymentContainer },
})
export default class HomeContainer extends Vue {
  readonly dropdownItems = dropdownItems;
  readonly orderId = orderId;
  readonly paymentInfo = paymentInfo;
  readonly paymentMethods = paymentMethods;

  productOrderInfo: Product.ProductOrderInfo[] = [];
  listProduct: Product.ListProducts = null;
  menuCategory: Category.CategoryInfo[] = [];
  isShowPopup = false;
  orderType = '0';
  paymentMethod = '0';
  discount = 0;

  async created(): Promise<void> {
    await getAccountInfo();
    this.menuCategory = (await getCategories()).items;
    this.listProduct = this.getListProduct((await getProducts()).items);
  }

  get getSubTotal(): number {
    let subTotal = 0;
    for (const product of this.productOrderInfo) {
      subTotal += product.info.price * product.quantity;
    }
    subTotal -= this.discount;
    return Number(subTotal.toFixed(2));
  }

  getListProduct(listProduct: Product.ProductInfo[]): Product.ListProducts {
    const listProductArranged: Product.ListProducts = {};
    if (this.menuCategory) {
      listProduct.forEach(product => {
        if (!listProductArranged[product.category_id]) {
          listProductArranged[product.category_id] = [];
        }
        listProductArranged[product.category_id].push(product);
      });
    }
    return listProductArranged;
  }

  changeProductOrder(productId: string): void {
    const index = this.productOrderInfo.findIndex(product => product.info.id === productId);
    if (index !== -1) {
      this.productOrderInfo = this.productOrderInfo.filter(product => product.info.id !== productId);
    } else {
      this.productOrderInfo.push(this.createProductOrder(productId));
    }
  }

  createProductOrder(productId: string): Product.ProductOrderInfo {
    const product: Product.ProductInfo = Object.values(this.listProduct)
      .flat()
      .find(product => product.id === productId);
    return {
      info: product,
      quantity: 1,
    };
  }

  changeNoteQuantity(productId: string, quantity: string): void {
    const index = this.productOrderInfo.findIndex(product => product.info.id === productId);
    if (index !== -1) {
      // this.productOrder[index].note = input.note;
      this.productOrderInfo[index].quantity = parseInt(quantity);
    }
  }

  togglePopup(): void {
    this.isShowPopup = !this.isShowPopup;
  }

  changeOrderType(value: string): void {
    this.orderType = value;
  }

  changePaymentMethod(value: string): void {
    this.paymentMethod = value;
  }

  async confirmPayment(): Promise<void> {
    await postOrder(this.createOrder());
    this.isShowPopup = false;
    this.productOrderInfo = [];
    alert('Order Successful!');
  }

  createOrder(): Order.OrderInfo {
    const listProductOrder: Product.ProductOrder[] = [];

    this.productOrderInfo.forEach(product => {
      const productOrder: Product.ProductOrder = {
        product_id: product.info.id,
        quantity: product.quantity,
        total: product.info.price * product.quantity,
        price: product.info.price,
      };
      listProductOrder.push(productOrder);
    });

    return {
      shop_id: sessionStorage.getItem('shop_id'),
      payment_method: parseInt(this.paymentMethod),
      sub_total: this.getSubTotal + this.discount,
      total: this.getSubTotal,
      code: '',
      discount: 0,
      currency: 1,
      status: 1,
      shipping_fee: 0,
      member: this.paymentInfo.name,
      email: '',
      phone_number: '',
      description: '',
      items: listProductOrder,
    };
  }
}
