import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { generateRecipeJsonLd, injectJsonLd } from "@/utils/jsonLd";
import veggieTacos from "@/assets/veggie-tacos.jpg";

const VeggieTacos = () => {
  useEffect(() => {
    document.title = "Loaded Black Bean Tacos Vegetarian Protein Recipe | Quick Mexican";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Loaded black bean tacos vegetarian protein recipe with fresh avocado and salsa. Quick Mexican comfort food ready in 20 minutes for busy weeknights.');
    }

    const recipeData = {
      name: "Loaded Black Bean Tacos Vegetarian Protein",
      description: "Soft tacos filled with seasoned black beans, avocado, and fresh salsa. Quick, healthy, and bursting with Mexican flavors, ready in just 20 minutes.",
      image: "https://your-domain.com" + veggieTacos,
      prepTime: "10min",
      cookTime: "10min", 
      totalTime: "20min",
      servings: "4 servings",
      difficulty: "Easy",
      cuisine: "Mexican",
      ingredients,
      instructions,
      keywords: "loaded black bean tacos vegetarian protein recipe, quick mexican comfort food, healthy avocado tacos, plant based weeknight dinner",
      url: "https://your-domain.com/recipes/veggie-tacos"
    };
    
    const jsonLd = generateRecipeJsonLd(recipeData);
    injectJsonLd(jsonLd);
  }, []);
  const ingredients = [
    "8 small corn or flour tortillas",
    "2 cans (15oz each) black beans, drained and rinsed",
    "1 tbsp olive oil",
    "1 small onion, diced",
    "2 cloves garlic, minced",
    "1 tsp cumin",
    "1 tsp chili powder",
    "1/2 tsp smoked paprika",
    "Salt and pepper to taste",
    "2 avocados, sliced",
    "1 cup shredded lettuce",
    "1 cup diced tomatoes",
    "1/2 cup red onion, finely diced",
    "1/4 cup fresh cilantro, chopped",
    "1 lime, cut into wedges",
    "Hot sauce (optional)"
  ];

  const instructions = [
    "Heat olive oil in a large skillet over medium heat.",
    "Add diced onion and cook until softened, about 5 minutes.",
    "Add garlic and cook for 1 more minute until fragrant.",
    "Add black beans, cumin, chili powder, and smoked paprika.",
    "Season with salt and pepper. Cook for 5-7 minutes, stirring occasionally.",
    "Mash about half the beans with a fork for texture, leaving the rest whole.",
    "Warm tortillas in a dry skillet or microwave according to package directions.",
    "Prepare toppings: slice avocados, dice tomatoes and red onion, chop cilantro.",
    "To assemble tacos: spread black bean mixture on each tortilla.",
    "Top with avocado slices, lettuce, tomatoes, red onion, and cilantro.",
    "Serve with lime wedges and hot sauce on the side.",
    "Enjoy immediately while tortillas are warm."
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
              src={veggieTacos} 
              alt="Loaded black bean tacos vegetarian protein recipe with fresh avocado, salsa and Mexican spices"
              className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">Mexican</Badge>
              <h1 className="text-4xl font-bold mb-4">Black Bean Tacos</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Soft tacos filled with seasoned black beans, avocado, and fresh salsa. 
                Quick, healthy, and bursting with Mexican flavors.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">20 min</span>
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

export default VeggieTacos;