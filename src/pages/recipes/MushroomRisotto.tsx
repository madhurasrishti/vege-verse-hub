import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import mushroomRisotto from "@/assets/mushroom-risotto.jpg";

const MushroomRisotto = () => {
  const ingredients = [
    "1 1/2 cups Arborio rice",
    "6 cups warm vegetable broth",
    "1 lb mixed mushrooms (cremini, shiitake, oyster), sliced",
    "1/2 cup dry white wine",
    "1 large onion, finely diced",
    "3 cloves garlic, minced",
    "3 tbsp olive oil",
    "2 tbsp butter",
    "1/2 cup grated Parmesan cheese",
    "2 tbsp fresh parsley, chopped",
    "1 tsp fresh thyme",
    "Salt and pepper to taste",
    "2 tbsp heavy cream (optional)"
  ];

  const instructions = [
    "Heat vegetable broth in a saucepan and keep warm on low heat.",
    "In a large pan, heat 2 tbsp olive oil over medium-high heat. Add mushrooms and cook until golden brown, about 5-7 minutes. Season with salt and pepper. Set aside.",
    "In the same pan, heat remaining oil and 1 tbsp butter. Add onion and cook until translucent, about 5 minutes.",
    "Add garlic and cook for 1 minute until fragrant.",
    "Add Arborio rice and stir for 2-3 minutes until grains are coated and lightly toasted.",
    "Pour in white wine and stir until absorbed.",
    "Add warm broth one ladle at a time, stirring constantly until absorbed before adding the next ladle. This process takes about 18-20 minutes.",
    "When rice is creamy but still has a slight bite, fold in the cooked mushrooms.",
    "Remove from heat and stir in remaining butter, Parmesan cheese, and heavy cream if using.",
    "Season with salt, pepper, and fresh herbs.",
    "Serve immediately while hot and creamy."
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
              src={mushroomRisotto} 
              alt="Creamy Mushroom Risotto"
              className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">Italian</Badge>
              <h1 className="text-4xl font-bold mb-4">Creamy Mushroom Risotto</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Rich and creamy arborio rice with wild mushrooms, herbs, and parmesan cheese. 
                A classic Italian comfort food that's elegant enough for entertaining.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">35 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">4 servings</span>
              </div>
              <div className="flex items-center space-x-2">
                <ChefHat className="h-5 w-5 text-primary" />
                <span className="font-medium">Advanced</span>
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

export default MushroomRisotto;