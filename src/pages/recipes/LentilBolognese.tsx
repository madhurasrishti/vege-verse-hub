import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import lentilBolognese from "@/assets/lentil-bolognese.jpg";

const LentilBolognese = () => {
  const ingredients = [
    "1 cup green or brown lentils",
    "2 tbsp olive oil",
    "1 large onion, diced",
    "2 carrots, diced",
    "2 celery stalks, diced",
    "4 cloves garlic, minced",
    "1 can (28oz) crushed tomatoes",
    "2 tbsp tomato paste",
    "1 cup vegetable broth",
    "1 tsp dried oregano",
    "1 tsp dried basil",
    "1/2 tsp dried thyme",
    "Salt and pepper to taste",
    "1 lb pasta of choice",
    "Fresh basil for garnish",
    "Grated parmesan cheese"
  ];

  const instructions = [
    "Rinse lentils and cook in salted water for 20-25 minutes until tender. Drain and set aside.",
    "Heat olive oil in a large pan over medium heat. Add onion, carrots, and celery. Cook for 5-7 minutes until softened.",
    "Add garlic and cook for another minute until fragrant.",
    "Stir in tomato paste and cook for 2 minutes.",
    "Add crushed tomatoes, cooked lentils, vegetable broth, oregano, basil, and thyme.",
    "Simmer for 20-25 minutes, stirring occasionally, until sauce thickens.",
    "Season with salt and pepper to taste.",
    "Cook pasta according to package directions. Drain and serve with lentil bolognese.",
    "Garnish with fresh basil and grated parmesan cheese."
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
              src={lentilBolognese} 
              alt="Lentil Bolognese Pasta"
              className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">Italian</Badge>
              <h1 className="text-4xl font-bold mb-4">Lentil Bolognese Pasta</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Rich and hearty lentil bolognese sauce served over fresh pasta with herbs and parmesan. 
                A perfect plant-based alternative to traditional meat sauce.
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

export default LentilBolognese;