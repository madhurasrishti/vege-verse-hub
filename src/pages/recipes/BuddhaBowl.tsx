import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import veggieBuddha from "@/assets/veggie-buddha-bowl.jpg";

// Utility: Inject JSON-LD <script> directly into DOM
const injectJsonLd = (json: object) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(json);
  document.head.appendChild(script);
};

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

  useEffect(() => {
    document.title =
      "Colorful Buddha Bowl Meal Prep Healthy Recipe | Nutritious Plant-Based";
    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Colorful buddha bowl meal prep healthy recipe with quinoa, roasted vegetables and tahini dressing. Nutritious plant-based dinner ready in 25 minutes."
      );
    }

    const recipeJsonLd = {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": "Colorful Buddha Bowl Meal Prep Healthy",
      "author": {
        "@type": "Person",
        "name": "Veggie Heaven"
      },
      "description":
        "Nourishing bowl with quinoa, roasted vegetables, avocado, and tahini dressing. A colorful and nutritious meal packed with plant-based proteins and vitamins, perfect for meal prep.",
      "image": [
        "https://your-domain.com" + veggieBuddha
      ],
      "recipeIngredient": ingredients,
      "recipeInstructions": instructions.map(step => ({
        "@type": "HowToStep",
        "text": step
      })),
      "prepTime": "PT15M",
      "cookTime": "PT10M",
      "totalTime": "PT25M",
      "recipeYield": "2 servings",
      "keywords":
        "colorful buddha bowl meal prep healthy recipe, nutritious plant based dinner, quinoa roasted vegetables tahini dressing, high protein vegetarian bowl",
      "recipeCategory": "Main course",
      "recipeCuisine": "Healthy",
      "url": "https://your-domain.com/recipes/buddha-bowl"
    };

    injectJsonLd(recipeJsonLd);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* ...rest of your JSX unchanged... */}
    </div>
  );
};

export default BuddhaBowl;
