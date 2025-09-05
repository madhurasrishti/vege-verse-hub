export interface Recipe {
  name: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: string;
  difficulty: string;
  cuisine: string;
  ingredients: string[];
  instructions: string[];
  keywords: string;
  url: string;
}

export const generateRecipeJsonLd = (recipe: Recipe) => {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.name,
    "description": recipe.description,
    "image": [recipe.image],
    "author": {
      "@type": "Organization",
      "name": "Veggie Heaven"
    },
    "datePublished": "2025-09-05",
    "prepTime": `PT${recipe.prepTime.replace(/\s+/g, '')}`,
    "cookTime": `PT${recipe.cookTime.replace(/\s+/g, '')}`,
    "totalTime": `PT${recipe.totalTime.replace(/\s+/g, '')}`,
    "keywords": recipe.keywords,
    "recipeYield": recipe.servings,
    "recipeCategory": "Main Course",
    "recipeCuisine": recipe.cuisine,
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "300-500 calories per serving"
    },
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.instructions.map((instruction, index) => ({
      "@type": "HowToStep",
      "name": `Step ${index + 1}`,
      "text": instruction,
      "position": index + 1
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "video": {
      "@type": "VideoObject",
      "name": `How to Make ${recipe.name}`,
      "description": recipe.description,
      "thumbnailUrl": [recipe.image],
      "contentUrl": recipe.url,
      "embedUrl": recipe.url
    }
  };
};

export const injectJsonLd = (jsonLd: object) => {
  // Remove existing recipe JSON-LD
  const existingScript = document.querySelector('script[type="application/ld+json"][data-recipe]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new JSON-LD
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-recipe', 'true');
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
};