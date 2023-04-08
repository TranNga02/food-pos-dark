declare namespace Order {
  type OrderInfo = {
    shop_id: string;
    payment_method: number;
    sub_total: number;
    total: number;
    code: string;
    discount: number;
    currency: number;
    status: number;
    shipping_fee: number;
    member: string;
    email: string;
    phone_number: string;
    description: string;
    items: Product.ProductOrder[];
  };
}
