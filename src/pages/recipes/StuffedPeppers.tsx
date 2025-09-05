import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { generateRecipeJsonLd, injectJsonLd } from "@/utils/jsonLd";
import stuffedPeppers from "@/assets/stuffed-peppers.jpg";

const StuffedPeppers = () => {
  useEffect(() => {
    document.title = "Quinoa Stuffed Bell Peppers Vegetarian Recipe | Healthy Family Dinner";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Quinoa stuffed bell peppers vegetarian recipe with black beans and cheese. Healthy family dinner that\'s colorful, nutritious and ready in 45 minutes.');
    }

    const recipeData = {
      name: "Quinoa Stuffed Bell Peppers Vegetarian",
      description: "Bell peppers stuffed with quinoa, vegetables, herbs, and melted cheese. A nutritious and colorful meal that's both filling and healthy, perfect for family dinners.",
      image: "https://your-domain.com" + stuffedPeppers,
      prepTime: "15min",
      cookTime: "30min", 
      totalTime: "45min",
      servings: "4 servings",
      difficulty: "Easy",
      cuisine: "American",
      ingredients,
      instructions,
      keywords: "quinoa stuffed bell peppers vegetarian recipe, healthy family dinner, colorful nutritious meal, high protein vegetarian comfort food",
      url: "https://your-domain.com/recipes/stuffed-peppers"
    };
    
    const jsonLd = generateRecipeJsonLd(recipeData);
    injectJsonLd(jsonLd);
  }, []);
  const ingredients = [
    "4 large bell peppers (any color), tops cut and seeds removed",
    "1 cup quinoa, cooked",
    "1 can (15oz) black beans, drained and rinsed",
    "1 cup corn kernels",
    "1/2 cup diced tomatoes",
    "1/2 cup diced onion",
    "2 cloves garlic, minced",
    "1 cup shredded cheese (cheddar or Mexican blend)",
    "2 tbsp olive oil",
    "1 tsp cumin",
    "1 tsp chili powder",
    "1/2 tsp paprika",
    "Salt and pepper to taste",
    "Fresh cilantro for garnish",
    "Lime wedges for serving"
  ];

  const instructions = [
    "Preheat oven to 375°F (190°C).",
    "Cut tops off bell peppers and remove seeds and membranes. If needed, trim bottom slightly so peppers stand upright.",
    "Heat olive oil in a large skillet over medium heat. Add onion and cook until softened, about 5 minutes.",
    "Add garlic and cook for 1 more minute.",
    "Stir in cooked quinoa, black beans, corn, diced tomatoes, cumin, chili powder, and paprika.",
    "Season with salt and pepper. Cook for 3-4 minutes until heated through.",
    "Remove from heat and stir in 1/2 cup of cheese.",
    "Stuff each pepper with the quinoa mixture, packing gently.",
    "Place stuffed peppers in a baking dish with a little water in the bottom.",
    "Cover with foil and bake for 35-40 minutes.",
    "Remove foil, top with remaining cheese, and bake uncovered for 10 more minutes.",
    "Garnish with fresh cilantro and serve with lime wedges."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-8">
        <Link to="/cuisines" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Recipes
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={stuffedPeppers} 
              alt="Quinoa stuffed bell peppers vegetarian recipe with black beans, vegetables and melted cheese"
              className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">American</Badge>
              <h1 className="text-4xl font-bold mb-4">Quinoa Stuffed Bell Peppers</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Bell peppers stuffed with quinoa, vegetables, herbs, and melted cheese. 
                A nutritious and colorful meal that's both filling and healthy.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">45 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">4 servings</span>
              </div>
              <div className="flex items-center space-x-2">
                <ChefHat className="h-5 w-5 text-primary" />
                <span className="font-medium">Easy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link to="/cuisines">
            <Button variant="outline" size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Explore More Recipes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StuffedPeppers;