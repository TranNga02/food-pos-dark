import { httpRequest } from './http-request';

export const getShopInfo = async (): Promise<Shop.ShopInfo> => {
  return httpRequest.get('/guest/shop?slug=shop-b');
};

export const getCategories = async (): Promise<Category.CategoryResponse> => {
  return httpRequest.get(`/categories/all?search=r&shop_id=${sessionStorage.getItem('shop_id')}`);
};

export const getProducts = async (): Promise<Product.ProductsResponse> => {
  return httpRequest.get(`/products?search=&shop_id=${sessionStorage.getItem('shop_id')}&category_id=&page=1`);
};

export const postOrder = async (params: Order.OrderInfo): Promise<void> => {
  httpRequest.post('/orders', params);
};
