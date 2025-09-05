import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { generateRecipeJsonLd, injectJsonLd } from "@/utils/jsonLd";
import palakPaneer from "@/assets/palak-paneer.jpg";

const PalakPaneer = () => {
  useEffect(() => {
    document.title = "Restaurant Style Palak Paneer Spinach Curry Recipe | Authentic Indian";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Restaurant style palak paneer spinach curry recipe with homemade paneer. Authentic Indian vegetarian comfort food ready in 40 minutes.');
    }

    const recipeData = {
      name: "Restaurant Style Palak Paneer Spinach Curry",
      description: "Fresh spinach curry with homemade paneer cheese and aromatic spices. A classic North Indian dish that's both nutritious and delicious, ready in just 40 minutes.",
      image: "https://your-domain.com" + palakPaneer,
      prepTime: "15min",
      cookTime: "25min", 
      totalTime: "40min",
      servings: "5 servings",
      difficulty: "Medium",
      cuisine: "Indian",
      ingredients,
      instructions,
      keywords: "restaurant style palak paneer spinach curry recipe, authentic indian vegetarian comfort food, homemade paneer cheese, healthy green curry",
      url: "https://your-domain.com/recipes/palak-paneer"
    };
    
    const jsonLd = generateRecipeJsonLd(recipeData);
    injectJsonLd(jsonLd);
  }, []);
  const ingredients = [
    "1 lb fresh spinach, washed and chopped",
    "8 oz paneer cheese, cubed",
    "2 tbsp ghee or vegetable oil",
    "1 large onion, diced",
    "4 cloves garlic, minced",
    "1 inch fresh ginger, grated",
    "2 green chilies, chopped",
    "1 tsp cumin seeds",
    "1 tsp garam masala",
    "1/2 tsp turmeric",
    "1/2 tsp red chili powder",
    "1/4 cup heavy cream",
    "Salt to taste",
    "Fresh cilantro for garnish",
    "Naan or rice for serving"
  ];

  const instructions = [
    "Blanch spinach in boiling water for 2-3 minutes, then plunge into ice water. Drain and blend to a smooth puree.",
    "Heat 1 tbsp ghee in a pan and lightly fry paneer cubes until golden. Set aside.",
    "In the same pan, heat remaining ghee and add cumin seeds until they splutter.",
    "Add diced onion and cook until golden brown, about 5-7 minutes.",
    "Add garlic, ginger, and green chilies. Cook for 1 minute.",
    "Add turmeric, garam masala, and red chili powder. Cook for 30 seconds.",
    "Add the spinach puree and mix well. Cook for 5-7 minutes.",
    "Gently add the fried paneer cubes to the spinach.",
    "Stir in heavy cream and season with salt.",
    "Simmer for 3-4 minutes until heated through.",
    "Garnish with fresh cilantro and serve hot with naan or rice."
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
              src={palakPaneer} 
              alt="Restaurant style palak paneer spinach curry recipe with homemade paneer cheese and authentic Indian spices"
              className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">Indian</Badge>
              <h1 className="text-4xl font-bold mb-4">Palak Paneer</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Fresh spinach curry with homemade paneer cheese and aromatic spices. 
                A classic North Indian dish that's both nutritious and delicious.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">40 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">5 servings</span>
              </div>
              <div className="flex items-center space-x-2">
                <ChefHat className="h-5 w-5 text-primary" />
                <span className="font-medium">Medium</span>
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

export default PalakPaneer;