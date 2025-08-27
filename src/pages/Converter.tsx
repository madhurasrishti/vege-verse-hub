import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Wand2, ArrowRight, Lightbulb, Clock, ChefHat } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Converter = () => {
  const [originalRecipe, setOriginalRecipe] = useState("");
  const [convertedRecipe, setConvertedRecipe] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const { toast } = useToast();

  const handleConvert = async () => {
    if (!originalRecipe.trim()) {
      toast({
        title: "Please enter a recipe",
        description: "Add the non-vegetarian recipe you'd like to convert.",
        variant: "destructive"
      });
      return;
    }

    setIsConverting(true);
    
    // Simulate API conversion (in a real app, you'd call an AI service)
    setTimeout(() => {
      const converted = convertToVegetarian(originalRecipe);
      setConvertedRecipe(converted);
      setIsConverting(false);
      
      toast({
        title: "Recipe converted successfully!",
        description: "Your vegetarian version is ready.",
      });
    }, 2000);
  };

  const convertToVegetarian = (recipe: string): string => {
    // Comprehensive meat substitution with "cannot convert" for difficult cases
    let converted = recipe;
    let cannotConvert = [];
    
    // Check for items that are too difficult to convert
    const difficultItems = /\b(caviar|foie gras|blood sausage|haggis|tripe|sweetbreads|brain|kidney|liver|tongue|marrow)\b/gi;
    const difficultMatches = recipe.match(difficultItems);
    if (difficultMatches) {
      cannotConvert = [...new Set(difficultMatches.map(item => item.toLowerCase()))];
    }

    // Comprehensive meat replacements
    converted = converted
      // Beef variants
      .replace(/\b(ground beef|beef mince|minced beef|hamburger meat)\b/gi, "lentils or plant-based ground meat")
      .replace(/\b(beef steak|steak|sirloin|ribeye|filet mignon|tenderloin)\b/gi, "portobello mushrooms or seitan steaks")
      .replace(/\b(beef roast|pot roast|chuck roast|brisket)\b/gi, "jackfruit or large portobello caps")
      .replace(/\b(beef)\b/gi, "seitan or mushrooms")
      
      // Poultry variants
      .replace(/\b(chicken breast|chicken thigh|chicken leg|chicken wing)\b/gi, "tofu or tempeh")
      .replace(/\b(whole chicken|roasted chicken)\b/gi, "stuffed portobello or cauliflower")
      .replace(/\b(chicken|poultry)\b/gi, "tofu or tempeh")
      .replace(/\b(turkey|duck|goose)\b/gi, "seasoned seitan or jackfruit")
      
      // Pork variants  
      .replace(/\b(pork chop|pork loin|pork shoulder|pork belly)\b/gi, "king oyster mushrooms or thick tempeh")
      .replace(/\b(ham|prosciutto|pancetta|canadian bacon)\b/gi, "smoky tempeh or coconut bacon")
      .replace(/\b(bacon|crispy bacon)\b/gi, "smoky tempeh strips or mushroom bacon")
      .replace(/\b(sausage|bratwurst|chorizo|pepperoni|salami)\b/gi, "plant-based sausage or seasoned tempeh")
      .replace(/\b(pork|pig)\b/gi, "jackfruit or king oyster mushrooms")
      
      // Lamb and mutton
      .replace(/\b(lamb|mutton|lamb chop|leg of lamb)\b/gi, "eggplant steaks or seasoned jackfruit")
      
      // Seafood
      .replace(/\b(salmon|tuna|cod|halibut|sea bass)\b/gi, "hearts of palm or banana peels")
      .replace(/\b(shrimp|prawns|lobster|crab)\b/gi, "king oyster mushrooms or hearts of palm")
      .replace(/\b(fish|seafood)\b/gi, "hearts of palm or banana peels")
      .replace(/\b(scallops)\b/gi, "king oyster mushroom rounds")
      
      // Stocks and broths
      .replace(/\b(chicken stock|beef stock|meat stock|bone broth)\b/gi, "vegetable stock")
      .replace(/\b(fish sauce)\b/gi, "soy sauce or seaweed broth")
      
      // Other animal products
      .replace(/\b(worcestershire sauce)\b/gi, "vegetarian worcestershire sauce")
      .replace(/\b(gelatin)\b/gi, "agar-agar")
      .replace(/\b(anchovy|anchovies)\b/gi, "capers or nori seaweed")
      .replace(/\b(lard|beef fat|chicken fat)\b/gi, "coconut oil or vegetable oil");

    if (cannotConvert.length > 0) {
      return `⚠️ CANNOT CONVERT:\n\nSorry, this recipe contains ingredients that are too difficult to convert to vegetarian alternatives: ${cannotConvert.join(', ')}.\n\nThese specialty animal products don't have good plant-based substitutes that would maintain the dish's integrity.`;
    }

    return `🌱 VEGETARIAN VERSION:\n\n${converted}\n\n💡 COOKING TIPS:\n• Marinate tofu/tempeh for extra flavor\n• Add umami with mushrooms, soy sauce, or nutritional yeast\n• Season plant-based proteins well before cooking\n• Cook lentils until tender but not mushy\n• For smoky flavor, use liquid smoke or smoked paprika`;
  };

  const examples = [
    {
      title: "Spaghetti Bolognese",
      description: "Classic meat sauce becomes a rich lentil and mushroom sauce",
      tip: "Use green or brown lentils with diced mushrooms"
    },
    {
      title: "Chicken Stir-Fry",
      description: "Crispy tofu or tempeh works perfectly with the same seasonings",
      tip: "Press tofu well and marinate for 30 minutes"
    },
    {
      title: "Fish Tacos",
      description: "Hearts of palm or banana peels create amazing 'fish' texture",
      tip: "Season with kelp powder for oceanic flavor"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wand2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Recipe
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Converter
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform any non-vegetarian recipe into a delicious plant-based version
          </p>
        </div>
      </section>

      {/* Converter Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ChefHat className="h-5 w-5 text-primary" />
                  <span>Original Recipe</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste your non-vegetarian recipe here... Include ingredients and cooking instructions for best results."
                  value={originalRecipe}
                  onChange={(e) => setOriginalRecipe(e.target.value)}
                  className="min-h-[300px] resize-none"
                />
                <Button 
                  onClick={handleConvert}
                  disabled={isConverting}
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                  size="lg"
                >
                  {isConverting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Converting...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5" />
                      Convert to Vegetarian
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Output Section */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span>Vegetarian Version</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {convertedRecipe ? (
                  <div className="bg-muted/50 rounded-lg p-4 min-h-[300px]">
                    <pre className="whitespace-pre-wrap text-sm text-foreground font-medium">
                      {convertedRecipe}
                    </pre>
                  </div>
                ) : (
                  <div className="min-h-[300px] flex items-center justify-center text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                        <Clock className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Your converted vegetarian recipe will appear here
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Conversion Examples</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how popular dishes can be transformed into vegetarian versions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{example.description}</p>
                  <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                    <p className="text-sm font-medium text-primary">{example.tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Pro Conversion Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Protein Substitutions:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Tofu:</strong> Great for stir-fries and grilled dishes</li>
                    <li>• <strong>Tempeh:</strong> Nutty flavor, perfect for bacon substitute</li>
                    <li>• <strong>Lentils:</strong> Excellent for ground meat replacements</li>
                    <li>• <strong>Mushrooms:</strong> Umami-rich, meaty texture</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Flavor Enhancers:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Nutritional yeast:</strong> Adds cheesy, nutty flavor</li>
                    <li>• <strong>Soy sauce:</strong> Provides umami depth</li>
                    <li>• <strong>Liquid smoke:</strong> Creates smoky meat-like taste</li>
                    <li>• <strong>Herbs & spices:</strong> Enhance all plant-based proteins</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Converter;