declare namespace Dish {
  type DishInfo = {
    id: number;
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

  type DishOrder = {
    id: number;
    src: string;
    name: string;
    price: number;
    available: number;
    quantity: number;
    note: string;
  };

  type Input = {
    quantity: number;
    note: string;
  };
}
