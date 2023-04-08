declare namespace Product {
  type ProductInfo = {
    id: string;
    category_id: string;
    shop_id: string;
    name: string;
    image: string;
    price: number;
    unit: number;
    unit_type: number;
    stock_status: number;
  };

  type ProductsResponse = {
    items: ProductInfo[];
  };

  type ListProducts = {
    [key: string]: Product.ProductInfo[];
  };

  type ProductOrder = {
    product_id: string;
    quantity: number;
    total: number;
    price: number;
  };

  type ProductOrderInfo = {
    info: ProductInfo;
    quantity: number;
  };
}
