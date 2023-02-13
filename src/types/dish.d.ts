declare namespace Dish {
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
