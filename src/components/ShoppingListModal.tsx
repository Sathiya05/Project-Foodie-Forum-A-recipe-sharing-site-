import React from 'react';
import { X, Check, ShoppingCart } from 'lucide-react';
import { ShoppingList } from '../types/Recipe';

interface ShoppingListModalProps {
  isOpen: boolean;
  onClose: () => void;
  shoppingList: ShoppingList;
  onToggleItem: (ingredient: string) => void;
}

export const ShoppingListModal: React.FC<ShoppingListModalProps> = ({
  isOpen,
  onClose,
  shoppingList,
  onToggleItem,
}) => {
  if (!isOpen) return null;

  const items = Object.entries(shoppingList);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingCart className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Shopping List</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              Your shopping list is empty
            </p>
          ) : (
            <ul className="space-y-2">
              {items.map(([ingredient, checked]) => (
                <li
                  key={ingredient}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                >
                  <span className={checked ? 'line-through text-gray-400' : ''}>
                    {ingredient}
                  </span>
                  <button
                    onClick={() => onToggleItem(ingredient)}
                    className={`p-1 rounded-full ${
                      checked ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};