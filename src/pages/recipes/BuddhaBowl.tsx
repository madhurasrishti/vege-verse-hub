import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import veggieBuddha from "@/assets/veggie-buddha-bowl.jpg";

const BuddhaBowl = () => {
  const ingredients = [
    "1 cup quinoa, cooked",
    "2 cups mixed greens (spinach, kale, arugula)",
    "1 avocado, sliced",
    "1 cup roasted sweet potato cubes",
    "1 cup steamed broccoli",
    "1/2 cup shredded purple cabbage",
    "1/2 cup cherry tomatoes, halved",
    "1/4 cup pumpkin seeds",
    "2 tbsp hemp seeds",
    "For Tahini Dressing:",
    "3 tbsp tahini",
    "2 tbsp lemon juice",
    "1 tbsp maple syrup",
    "1 clove garlic, minced",
    "2-3 tbsp warm water",
    "Salt to taste"
  ];

  const instructions = [
    "Preheat oven to 400°F (200°C). Cube sweet potato and toss with olive oil, salt, and pepper.",
    "Roast sweet potato for 20-25 minutes until tender and lightly caramelized.",
    "Cook quinoa according to package directions and let cool slightly.",
    "Steam broccoli until bright green and tender-crisp, about 4-5 minutes.",
    "For the dressing: whisk together tahini, lemon juice, maple syrup, and minced garlic.",
    "Gradually add warm water until desired consistency is reached. Season with salt.",
    "Arrange mixed greens in serving bowls as the base.",
    "Divide quinoa, roasted sweet potato, steamed broccoli, and other vegetables into sections over the greens.",
    "Add sliced avocado, cherry tomatoes, and shredded cabbage.",
    "Sprinkle with pumpkin seeds and hemp seeds.",
    "Drizzle tahini dressing over the bowl before serving.",
    "Serve immediately while vegetables are still warm."
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
              src={veggieBuddha} 
              alt="Healthy Buddha Bowl"
              className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">Healthy</Badge>
              <h1 className="text-4xl font-bold mb-4">Healthy Buddha Bowl</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Nourishing bowl with quinoa, roasted vegetables, avocado, and tahini dressing. 
                A colorful and nutritious meal packed with plant-based proteins and vitamins.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">25 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">2 servings</span>
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

export default BuddhaBowl;