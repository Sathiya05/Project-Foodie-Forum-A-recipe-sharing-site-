import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    description: "A traditional Italian pizza with fresh basil, mozzarella, and tomatoes",
    prepTime: "30 mins",
    cookTime: "15 mins",
    servings: 4,
    category: "Italian",
    quickMeal: true,
    ingredients: [
      "Pizza dough",
      "San Marzano tomatoes",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Extra virgin olive oil",
      "Salt"
    ],
    instructions: [
      "Preheat oven to 500°F (260°C)",
      "Roll out pizza dough",
      "Spread crushed tomatoes",
      "Add torn mozzarella pieces",
      "Bake for 12-15 minutes",
      "Top with fresh basil and olive oil"
    ]
  },
  {
    id: 2,
    title: "Japanese Ramen",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    description: "Rich and flavorful ramen with tender chashu pork",
    prepTime: "1 hour",
    cookTime: "3 hours",
    servings: 4,
    category: "Japanese",
    ingredients: [
      "Ramen noodles",
      "Pork belly",
      "Soy sauce",
      "Mirin",
      "Soft-boiled eggs",
      "Green onions",
      "Nori sheets"
    ],
    instructions: [
      "Prepare the chashu pork",
      "Make the ramen broth",
      "Cook noodles al dente",
      "Prepare toppings",
      "Assemble bowls",
      "Serve hot"
    ]
  },
  {
    id: 3,
    title: "Thai Green Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
    description: "Aromatic and spicy Thai curry with coconut milk",
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: 4,
    category: "Thai",
    ingredients: [
      "Green curry paste",
      "Coconut milk",
      "Chicken thighs",
      "Thai eggplants",
      "Bamboo shoots",
      "Thai basil",
      "Fish sauce"
    ],
    instructions: [
      "Heat coconut milk in a pan",
      "Add curry paste and stir",
      "Add chicken and cook",
      "Add vegetables",
      "Simmer until done",
      "Garnish with Thai basil"
    ]
  },
  {
    id: 4,
    title: "Classic French Croissants",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    description: "Buttery, flaky French pastries",
    prepTime: "2 hours",
    cookTime: "25 mins",
    servings: 12,
    category: "French",
    ingredients: [
      "All-purpose flour",
      "Active dry yeast",
      "Sugar",
      "Salt",
      "Cold butter",
      "Milk",
      "Egg wash"
    ],
    instructions: [
      "Make the dough",
      "Laminate with butter",
      "Fold and rest three times",
      "Shape croissants",
      "Proof until doubled",
      "Bake until golden"
    ]
  },
  {
    id: 5,
    title: "Mexican Street Tacos",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    description: "Authentic street-style tacos with carne asada",
    prepTime: "30 mins",
    cookTime: "15 mins",
    servings: 6,
    category: "Mexican",
    ingredients: [
      "Corn tortillas",
      "Flank steak",
      "Lime juice",
      "Cilantro",
      "Onion",
      "Salsa verde"
    ],
    instructions: [
      "Marinate the steak",
      "Grill to medium-rare",
      "Rest and slice meat",
      "Warm tortillas",
      "Assemble tacos",
      "Serve with lime wedges"
    ]
  },
  {
    id: 6,
    title: "Hyderabadi Chicken Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
    description: "Aromatic and spicy Indian rice dish with tender chicken and saffron",
    prepTime: "1 hour",
    cookTime: "45 mins",
    servings: 6,
    category: "Indian",
    ingredients: [
      "Basmati rice",
      "Chicken thighs",
      "Yogurt",
      "Biryani masala",
      "Saffron",
      "Onions",
      "Mint leaves",
      "Ghee"
    ],
    instructions: [
      "Marinate chicken with yogurt and spices",
      "Par-boil rice with whole spices",
      "Layer marinated chicken and rice",
      "Add saffron milk and ghee",
      "Cook on dum (slow cook)",
      "Let rest for 10 minutes before serving"
    ]
  },
  {
    id: 7,
    title: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    description: "Creamy and rich North Indian curry with tender chicken pieces",
    prepTime: "30 mins",
    cookTime: "40 mins",
    servings: 4,
    category: "Indian",
    ingredients: [
      "Chicken tikka",
      "Tomatoes",
      "Cream",
      "Butter",
      "Kashmiri red chili",
      "Garam masala",
      "Fenugreek leaves"
    ],
    instructions: [
      "Prepare chicken tikka",
      "Make tomato gravy",
      "Add cream and butter",
      "Simmer with spices",
      "Finish with fenugreek",
      "Garnish with cream"
    ]
  },
  {
    id: 8,
    title: "Sushi Rolls",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    description: "Fresh and delicate Japanese sushi rolls",
    prepTime: "45 mins",
    cookTime: "20 mins",
    servings: 4,
    category: "Japanese",
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Fresh salmon",
      "Cucumber",
      "Avocado",
      "Rice vinegar",
      "Wasabi"
    ],
    instructions: [
      "Prepare sushi rice",
      "Cut fish and vegetables",
      "Assemble rolls",
      "Roll tightly",
      "Cut into pieces",
      "Serve with soy sauce"
    ]
  },
  {
    id: 9,
    title: "Vegetable Biryani",
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833",
    description: "Fragrant rice dish with mixed vegetables and aromatic spices",
    prepTime: "40 mins",
    cookTime: "35 mins",
    servings: 4,
    category: "Indian",
    ingredients: [
      "Basmati rice",
      "Mixed vegetables",
      "Biryani masala",
      "Saffron",
      "Mint",
      "Ghee",
      "Fried onions"
    ],
    instructions: [
      "Cook rice with whole spices",
      "Prepare vegetable masala",
      "Layer rice and vegetables",
      "Add saffron milk",
      "Dum cook",
      "Garnish with fried onions"
    ]
  },
  {
    id: 10,
    title: "Pad Thai",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
    description: "Classic Thai stir-fried rice noodles with tamarind sauce",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 2,
    category: "Thai",
    ingredients: [
      "Rice noodles",
      "Tofu",
      "Shrimp",
      "Bean sprouts",
      "Tamarind paste",
      "Fish sauce",
      "Peanuts"
    ],
    instructions: [
      "Soak noodles",
      "Make sauce",
      "Stir-fry ingredients",
      "Add noodles",
      "Toss with sauce",
      "Garnish and serve"
    ]
  },
  {
    id: 11,
    title: "15-Minute Garlic Shrimp Pasta",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    description: "Quick and delicious pasta with garlic shrimp",
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: 2,
    category: "Italian",
    quickMeal: true,
    ingredients: [
      "Spaghetti",
      "Large shrimp",
      "Garlic cloves",
      "Olive oil",
      "Red pepper flakes",
      "Parsley",
      "Lemon"
    ],
    instructions: [
      "Cook pasta according to package",
      "Sauté garlic in olive oil",
      "Add shrimp and cook until pink",
      "Toss with pasta and seasonings",
      "Finish with lemon juice and parsley"
    ]
  },
  {
    id: 12,
    title: "5-Minute Breakfast Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    description: "Healthy and quick breakfast smoothie bowl",
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: 1,
    category: "Breakfast",
    quickMeal: true,
    ingredients: [
      "Frozen mixed berries",
      "Banana",
      "Greek yogurt",
      "Honey",
      "Granola",
      "Chia seeds",
      "Fresh fruit for topping"
    ],
    instructions: [
      "Blend frozen berries and banana",
      "Add yogurt and honey",
      "Pour into bowl",
      "Top with granola and fresh fruit",
      "Sprinkle with chia seeds"
    ]
  },
  {
    id: 13,
    title: "Quick Chicken Quesadillas",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f",
    description: "Easy and cheesy chicken quesadillas",
    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: 2,
    category: "Mexican",
    quickMeal: true,
    ingredients: [
      "Flour tortillas",
      "Cooked chicken breast",
      "Shredded cheese",
      "Bell peppers",
      "Onion",
      "Taco seasoning",
      "Sour cream"
    ],
    instructions: [
      "Mix chicken with seasoning",
      "Layer tortilla with cheese and chicken",
      "Add vegetables",
      "Fold and cook until crispy",
      "Serve with sour cream"
    ]
  },
  {
    id: 14,
    title: "3-Minute Microwave Mug Cake",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    description: "Quick chocolate cake in a mug",
    prepTime: "2 mins",
    cookTime: "1 min",
    servings: 1,
    category: "Dessert",
    quickMeal: true,
    ingredients: [
      "All-purpose flour",
      "Cocoa powder",
      "Sugar",
      "Baking powder",
      "Milk",
      "Vegetable oil",
      "Vanilla extract"
    ],
    instructions: [
      "Mix dry ingredients in mug",
      "Add wet ingredients",
      "Stir well",
      "Microwave for 1 minute",
      "Let cool slightly before eating"
    ]
  }
];