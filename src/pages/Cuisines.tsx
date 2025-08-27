import Navigation from "@/components/Navigation";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Filter } from "lucide-react";
import indianCurry from "@/assets/indian-veggie-curry.jpg";
import mediterraneanPasta from "@/assets/mediterranean-pasta.jpg";
import asianStirFry from "@/assets/asian-stir-fry.jpg";

const Cuisines = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const cuisines = ["All", "Italian", "Indian", "Asian", "Mediterranean", "Mexican", "American"];

  const recipes = [
    {
      title: "Creamy Mushroom Risotto",
      image: mediterraneanPasta,
      description: "Rich and creamy arborio rice with wild mushrooms and parmesan cheese.",
      cookTime: "35 min",
      servings: 4,
      category: "Italian"
    },
    {
      title: "Chickpea Tikka Masala",
      image: indianCurry,
      description: "Tender chickpeas in a spiced tomato-cream sauce, perfect with basmati rice.",
      cookTime: "30 min",
      servings: 6,
      category: "Indian"
    },
    {
      title: "Teriyaki Tofu Bowl",
      image: asianStirFry,
      description: "Crispy tofu with steamed vegetables in a sweet teriyaki glaze.",
      cookTime: "20 min",
      servings: 3,
      category: "Asian"
    },
    {
      title: "Mediterranean Quinoa Salad",
      image: mediterraneanPasta,
      description: "Fresh quinoa with tomatoes, cucumbers, olives, and feta cheese.",
      cookTime: "15 min",
      servings: 5,
      category: "Mediterranean"
    },
    {
      title: "Vegetarian Pad Thai",
      image: asianStirFry,
      description: "Classic Thai noodles with tofu, bean sprouts, and tamarind sauce.",
      cookTime: "25 min",
      servings: 4,
      category: "Asian"
    },
    {
      title: "Stuffed Bell Peppers",
      image: mediterraneanPasta,
      description: "Bell peppers stuffed with rice, vegetables, and melted cheese.",
      cookTime: "45 min",
      servings: 4,
      category: "American"
    },
    {
      title: "Palak Paneer",
      image: indianCurry,
      description: "Fresh spinach curry with homemade paneer cheese and aromatic spices.",
      cookTime: "40 min",
      servings: 5,
      category: "Indian"
    },
    {
      title: "Vegetarian Tacos",
      image: asianStirFry,
      description: "Soft tacos filled with seasoned black beans, avocado, and fresh salsa.",
      cookTime: "20 min",
      servings: 4,
      category: "Mexican"
    },
    {
      title: "Eggplant Parmigiana",
      image: mediterraneanPasta,
      description: "Layers of breaded eggplant with marinara sauce and mozzarella cheese.",
      cookTime: "60 min",
      servings: 6,
      category: "Italian"
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