import Navigation from "@/components/Navigation";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Filter } from "lucide-react";
import lentilBolognese from "@/assets/lentil-bolognese.jpg";
import chickpeaCurry from "@/assets/chickpea-curry.jpg";
import stuffedPeppers from "@/assets/stuffed-peppers.jpg";
import veggieTacos from "@/assets/veggie-tacos.jpg";
import mushroomRisotto from "@/assets/mushroom-risotto.jpg";
import capreseSalad from "@/assets/caprese-salad.jpg";
import ratatouille from "@/assets/ratatouille.jpg";
import veggieBuddha from "@/assets/veggie-buddha-bowl.jpg";

const Cuisines = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const cuisines = ["All", "Italian", "Indian", "Asian", "Mediterranean", "Mexican", "American"];

  const recipes = [
    {
      title: "Creamy Mushroom Risotto",
      image: mushroomRisotto,
      description: "Rich and creamy arborio rice with wild mushrooms, herbs, and parmesan cheese.",
      cookTime: "35 min",
      servings: 4,
      category: "Italian",
      recipeUrl: "https://www.bbcgoodfood.com/recipes/mushroom-risotto"
    },
    {
      title: "Chickpea Tikka Masala",
      image: chickpeaCurry,
      description: "Tender chickpeas in a spiced tomato-cream sauce, perfect with basmati rice.",
      cookTime: "30 min",
      servings: 6,
      category: "Indian",
      recipeUrl: "https://rainbowplantlife.com/chickpea-tikka-masala/"
    },
    {
      title: "Healthy Buddha Bowl",
      image: veggieBuddha,
      description: "Nourishing bowl with quinoa, roasted vegetables, avocado, and tahini dressing.",
      cookTime: "25 min",
      servings: 2,
      category: "Asian",
      recipeUrl: "https://minimalistbaker.com/the-best-buddha-bowl-recipe/"
    },
    {
      title: "Caprese Salad",
      image: capreseSalad,
      description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze and olive oil.",
      cookTime: "10 min",
      servings: 4,
      category: "Mediterranean",
      recipeUrl: "https://www.foodnetwork.com/recipes/ree-drummond/caprese-salad-recipe"
    },
    {
      title: "Lentil Bolognese Pasta",
      image: lentilBolognese,
      description: "Hearty lentil sauce with herbs and tomatoes served over fresh pasta.",
      cookTime: "35 min",
      servings: 4,
      category: "Italian",
      recipeUrl: "https://www.loveandlemons.com/lentil-bolognese/"
    },
    {
      title: "Quinoa Stuffed Bell Peppers",
      image: stuffedPeppers,
      description: "Bell peppers stuffed with quinoa, vegetables, herbs, and melted cheese.",
      cookTime: "45 min",
      servings: 4,
      category: "American",
      recipeUrl: "https://cookieandkate.com/stuffed-peppers-recipe/"
    },
    {
      title: "Palak Paneer",
      image: chickpeaCurry,
      description: "Fresh spinach curry with homemade paneer cheese and aromatic spices.",
      cookTime: "40 min",
      servings: 5,
      category: "Indian",
      recipeUrl: "https://www.indianhealthyrecipes.com/palak-paneer-recipe/"
    },
    {
      title: "Black Bean Tacos",
      image: veggieTacos,
      description: "Soft tacos filled with seasoned black beans, avocado, and fresh salsa.",
      cookTime: "20 min",
      servings: 4,
      category: "Mexican",
      recipeUrl: "https://cookieandkate.com/best-black-bean-tacos-recipe/"
    },
    {
      title: "French Ratatouille",
      image: ratatouille,
      description: "Traditional French vegetable stew with eggplant, zucchini, and tomatoes.",
      cookTime: "45 min",
      servings: 6,
      category: "Mediterranean",
      recipeUrl: "https://www.bbcgoodfood.com/recipes/ratatouille"
    }
  ];

  const filteredRecipes = selectedCuisine === "All" 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCuisine);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vegetarian Recipes by
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Global Cuisines
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover plant-based versions of your favorite dishes from around the world
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium text-muted-foreground">Filter by cuisine:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <Button
                key={cuisine}
                variant={selectedCuisine === cuisine ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCuisine(cuisine)}
                className="transition-all duration-200"
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-12">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {selectedCuisine === "All" ? "All Recipes" : `${selectedCuisine} Recipes`}
              </h2>
              <p className="text-muted-foreground">
                {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            {selectedCuisine !== "All" && (
              <Badge variant="secondary" className="text-sm">
                {selectedCuisine} Cuisine
              </Badge>
            )}
          </div>
          
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No recipes found for {selectedCuisine} cuisine.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCuisine("All")}
              >
                View All Recipes
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cuisines;