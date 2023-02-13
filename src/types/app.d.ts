declare namespace App {
  // eslint-disable-next-line
  export type Any = any;

  export type Callback = {
    onSuccess?: (...args) => void;
    onFailure?: (...args) => void;
    onFinish?: (...args) => void;
  };

  export type ResponseError = {
    message: string;
    errors: Record<string, Record<string, ErrorValue>>;
    status?: number;
  };

  export type ErrorValue = {
    children?: Record<string, ErrorValue>;
    messages: string[];
  };

  export type MessageError = ResponseError['errors'];

  export type RequestCallback = (token: string) => Promise<void>;

  type SideBarItem = {
    icon: string;
    path: string;
  };

  type Option = {
    text: string;
    value: string;
  };

  type MenuBarItem = {
    name: string;
    value: number;
  };

  type DishInfo = {
    src: string;
    name: string;
    price: number;
    available: number;
  };

  type ListDishes = {
    hotDishes: DishInfo[];
    coldDishes: DishInfo[];
    soup: DishInfo[];
    grill: DishInfo[];
    appetizer: DishInfo[];
    dessert: DishInfo[];
  };
}
