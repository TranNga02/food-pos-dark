declare namespace Category {
  type CategoryInfo = {
    id: string;
    name: string;
  };

  type CategoryResponse = {
    items: CategoryType[];
  };
}
