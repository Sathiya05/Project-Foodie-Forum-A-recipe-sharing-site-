import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChevronLeft, Heart, Plus, Check } from 'lucide-react';
import { recipes } from '../data/recipes';
import { FavoriteRecipes, ShoppingList } from '../types/Recipe';
import toast from 'react-hot-toast';

interface RecipeDetailProps {
  favorites: FavoriteRecipes;
  onToggleFavorite: (id: number) => void;
  shoppingList: ShoppingList;
  onToggleShoppingList: (ingredient: string) => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({
  favorites,
  onToggleFavorite,
  shoppingList,
  onToggleShoppingList
}) => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number(id));
  const isFavorite = favorites[Number(id)];

  const handleAddToList = (ingredient: string) => {
    onToggleShoppingList(ingredient);
    toast.success(`${ingredient} ${shoppingList[ingredient] ? 'removed from' : 'added to'} shopping list`);
  };

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to recipes
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover"
          />
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          >
            <Heart
              className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{recipe.title}</h1>
            <div className="flex gap-2">
              {recipe.quickMeal && (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  Quick Meal
                </span>
              )}
              <span className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-600">
                {recipe.category}
              </span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">{recipe.description}</p>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Prep Time</p>
                <p className="font-medium">{recipe.prepTime}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Cook Time</p>
                <p className="font-medium">{recipe.cookTime}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Servings</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {ingredient}
                    </div>
                    <button
                      onClick={() => handleAddToList(ingredient)}
                      className={`p-1 rounded-full hover:bg-gray-200 ${
                        shoppingList[ingredient] ? 'text-green-600' : 'text-gray-400'
                      }`}
                      title={shoppingList[ingredient] ? "Remove from shopping list" : "Add to shopping list"}
                    >
                      {shoppingList[ingredient] ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="font-bold mr-4">{index + 1}.</span>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};