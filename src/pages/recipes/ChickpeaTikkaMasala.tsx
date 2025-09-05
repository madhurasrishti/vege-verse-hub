import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { generateRecipeJsonLd, injectJsonLd } from "@/utils/jsonLd";
import chickpeaCurry from "@/assets/chickpea-curry.jpg";

const ChickpeaTikkaMasala = () => {
  const ingredients = [
    "2 cans (15oz each) chickpeas, drained and rinsed",
    "2 tbsp ghee or vegetable oil",
    "1 large onion, diced",
    "4 cloves garlic, minced",
    "1 tbsp fresh ginger, grated",
    "2 tsp garam masala",
    "1 tsp cumin",
    "1 tsp coriander",
    "1 tsp paprika",
    "1/2 tsp turmeric",
    "1/4 tsp cayenne pepper",
    "1 can (14oz) crushed tomatoes",
    "1 can (14oz) coconut milk",
    "1 tbsp tomato paste",
    "1 tsp salt",
    "Fresh cilantro for garnish",
    "Basmati rice for serving"
  ];

  const instructions = [
    "Heat ghee or oil in a large pan over medium heat.",
    "Add diced onion and cook for 5-7 minutes until golden brown.",
    "Add garlic and ginger, cook for 1 minute until fragrant.",
    "Add all the spices (garam masala, cumin, coriander, paprika, turmeric, cayenne) and cook for 30 seconds.",
    "Stir in tomato paste and cook for 1 minute.",
    "Add crushed tomatoes and simmer for 10 minutes, stirring occasionally.",
    "Pour in coconut milk and add chickpeas. Season with salt.",
    "Simmer for 15-20 minutes until sauce thickens to desired consistency.",
    "Taste and adjust seasonings as needed.",
    "Serve over basmati rice and garnish with fresh cilantro."
  ];

  useEffect(() => {
    // SEO Metadata
    document.title =
      "Chickpea Tikka Masala | Authentic Indian Vegetarian Curry Recipe | Veggie Heaven";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn how to make authentic chickpea tikka masala with creamy tomato curry sauce. A flavorful, protein-packed vegetarian Indian recipe ready in 30 minutes."
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content =
        "Learn how to make authentic chickpea tikka masala with creamy tomato curry sauce. A flavorful, protein-packed vegetarian Indian recipe ready in 30 minutes.";
      document.head.appendChild(newMeta);
    }

    // Extra meta tags for SEO & social
    const keywordsMeta = document.createElement("meta");
    keywordsMeta.name = "keywords";
    keywordsMeta.content =
      "chickpea tikka masala recipe, authentic Indian vegetarian curry, restaurant style chickpea curry, vegan Indian dinner, creamy tomato chickpea curry, high protein vegetarian recipes, easy Indian curry for beginners, plant based dinner ideas, healthy vegetarian Indian food, quick chickpea curry 30 minutes";
    document.head.appendChild(keywordsMeta);

    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content =
      "Chickpea Tikka Masala | Authentic Indian Vegetarian Curry | Veggie Heaven";
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    ogDesc.content =
      "Easy restaurant-style chickpea tikka masala with creamy tomato curry sauce. Vegetarian, protein-rich, and perfect for busy weeknights.";
    document.head.appendChild(ogDesc);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.content = "https://your-domain.com" + chickpeaCurry;
    document.head.appendChild(ogImage);

    const canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute(
      "href",
      "https://your-domain.com/recipes/chickpea-tikka-masala"
    );
    document.head.appendChild(canonical);

    // JSON-LD Structured Data
    const recipeData = {
      name: "Chickpea Tikka Masala | Authentic Indian Vegetarian Curry",
      description:
        "Tender chickpeas in a spiced tomato-cream sauce, perfect with basmati rice. A comforting and flavorful vegetarian version of the classic Indian dish ready in just 30 minutes.",
      image: "https://your-domain.com" + chickpeaCurry,
      prepTime: "PT10M",
      cookTime: "PT20M",
      totalTime: "PT30M",
      recipeYield: "6 servings",
      recipeCategory: "Dinner",
      recipeCuisine: "Indian",
      keywords:
        "chickpea tikka masala, Indian curry, vegetarian curry, vegan Indian recipe, healthy plant based dinner, quick vegetarian curry",
      recipeIngredient: ingredients,
      recipeInstructions: instructions.map((step, i) => ({
        "@type": "HowToStep",
        text: step,
        position: i + 1,
      })),
      nutrition: {
        "@type": "NutritionInformation",
        calories: "280 calories",
        proteinContent: "11g",
        carbohydrateContent: "34g",
        fatContent: "12g",
      },
      url: "https://your-domain.com/recipes/chickpea-tikka-masala",
    };

    const jsonLd = generateRecipeJsonLd(recipeData);
    injectJsonLd(jsonLd);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        <Link
          to="/cuisines"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Recipes
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img
              src={chickpeaCurry}
              alt="Chickpea tikka masala Indian vegetarian curry with creamy tomato sauce and aromatic spices"
              className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                Indian
              </Badge>
              <h1 className="text-4xl font-bold mb-4">
                Chickpea Tikka Masala
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Tender chickpeas in a spiced tomato-cream sauce, perfect with
                basmati rice. A comforting and flavorful vegetarian version of
                the classic Indian dish.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">30 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">6 servings</span>
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
                    <span className="text-sm leading-relaxed">
                      {instruction}
                    </span>
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

export default ChickpeaTikkaMasala;
