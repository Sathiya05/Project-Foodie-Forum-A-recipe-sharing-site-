export interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  category: string;
  quickMeal: boolean;
}

export type FavoriteRecipes = {
  [key: number]: boolean;
};

export type ShoppingList = {
  [ingredient: string]: boolean;
};