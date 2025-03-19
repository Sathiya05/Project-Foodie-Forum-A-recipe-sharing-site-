import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChefHat, Search, Clock, ShoppingCart } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { recipes } from './data/recipes';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';
import { ShoppingListModal } from './components/ShoppingListModal';
import { FavoriteRecipes, ShoppingList } from './types/Recipe';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showQuickMealsOnly, setShowQuickMealsOnly] = useState(false);
  const [favorites, setFavorites] = useState<FavoriteRecipes>({});
  const [shoppingList, setShoppingList] = useState<ShoppingList>({});
  const [isShoppingListOpen, setIsShoppingListOpen] = useState(false);

  const categories = useMemo(() => {
    const cats = recipes.map(recipe => recipe.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      const matchesQuickMeal = !showQuickMealsOnly || recipe.quickMeal;
      return matchesSearch && matchesCategory && matchesQuickMeal;
    });
  }, [searchTerm, selectedCategory, showQuickMealsOnly]);

  const toggleFavorite = (recipeId: number) => {
    setFavorites(prev => ({
      ...prev,
      [recipeId]: !prev[recipeId]
    }));
  };

  const toggleShoppingListItem = (ingredient: string) => {
    setShoppingList(prev => ({
      ...prev,
      [ingredient]: !prev[ingredient]
    }));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="bottom-right" />
        <nav className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <ChefHat className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Foodie Forum</span>
              </div>
              <button
                onClick={() => setIsShoppingListOpen(true)}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span>Added Ingredients</span>
              </button>
            </div>
          </div>
        </nav>

        <ShoppingListModal
          isOpen={isShoppingListOpen}
          onClose={() => setIsShoppingListOpen(false)}
          shoppingList={shoppingList}
          onToggleItem={toggleShoppingListItem}
        />

        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Delicious Recipes</h1>
                <p className="text-lg text-gray-600">Explore our collection of mouth-watering dishes from around the world</p>
              </div>

              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search recipes..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => setShowQuickMealsOnly(!showQuickMealsOnly)}
                      className={`flex items-center px-4 py-2 rounded-lg border ${
                        showQuickMealsOnly
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Quick Meals
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={favorites[recipe.id]}
                    onToggleFavorite={() => toggleFavorite(recipe.id)}
                  />
                ))}
              </div>
            </main>
          } />
          <Route 
            path="/recipe/:id" 
            element={
              <RecipeDetail 
                favorites={favorites} 
                onToggleFavorite={toggleFavorite}
                shoppingList={shoppingList}
                onToggleShoppingList={toggleShoppingListItem}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;