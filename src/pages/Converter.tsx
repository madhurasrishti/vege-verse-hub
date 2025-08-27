import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Wand2, ArrowRight, Lightbulb, Scale, ChefHat } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Converter = () => {
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [dishType, setDishType] = useState("");
  const [conversion, setConversion] = useState<any>(null);
  const { toast } = useToast();

  const ingredients = {
    "Beef": {
      "Ground beef": { savoury: "1 cup lentils or 200g plant-based ground", sweet: "Cannot convert" },
      "Beef steak": { savoury: "2 large portobello mushroom caps or 200g seitan", sweet: "Cannot convert" },
      "Beef roast": { savoury: "400g jackfruit or large cauliflower head", sweet: "Cannot convert" }
    },
    "Chicken": {
      "Chicken breast": { savoury: "200g firm tofu or tempeh", sweet: "Cannot convert" },
      "Whole chicken": { savoury: "1 large stuffed portobello or whole cauliflower", sweet: "Cannot convert" },
      "Chicken thighs": { savoury: "150g tempeh or extra-firm tofu", sweet: "Cannot convert" }
    },
    "Pork": {
      "Pork chops": { savoury: "2 thick king oyster mushroom steaks", sweet: "Cannot convert" },
      "Bacon": { savoury: "3-4 strips tempeh bacon or coconut bacon", sweet: "Cannot convert" },
      "Ground pork": { savoury: "1 cup seasoned lentils or plant-based ground", sweet: "Cannot convert" }
    },
    "Fish": {
      "Salmon fillet": { savoury: "200g hearts of palm or banana peel 'fish'", sweet: "Cannot convert" },
      "White fish": { savoury: "150g hearts of palm or tofu", sweet: "Cannot convert" },
      "Tuna": { savoury: "1 cup chickpea salad or hearts of palm", sweet: "Cannot convert" }
    },
    "Seafood": {
      "Shrimp": { savoury: "200g king oyster mushrooms or hearts of palm", sweet: "Cannot convert" },
      "Crab": { savoury: "1 cup shredded hearts of palm", sweet: "Cannot convert" },
      "Scallops": { savoury: "6-8 king oyster mushroom rounds", sweet: "Cannot convert" }
    },
    "Eggs": {
      "Whole eggs": { savoury: "1/4 cup aquafaba or 1 tbsp ground flaxseed + 3 tbsp water", sweet: "1/4 cup applesauce or mashed banana" },
      "Egg whites": { savoury: "2 tbsp aquafaba", sweet: "2 tbsp aquafaba" },
      "Egg yolks": { savoury: "1 tbsp tahini or cashew cream", sweet: "1 tbsp cashew cream or vegan butter" }
    },
    "Dairy": {
      "Milk": { savoury: "Plant milk (oat, soy, almond)", sweet: "Plant milk (oat, soy, almond)" },
      "Butter": { savoury: "Vegan butter or coconut oil", sweet: "Vegan butter or coconut oil" },
      "Cheese": { savoury: "Nutritional yeast or vegan cheese", sweet: "Vegan cream cheese" }
    }
  };

  const handleConvert = () => {
    if (!selectedIngredient || !amount || !dishType) {
      toast({
        title: "Please fill all fields",
        description: "Select ingredient, amount, and dish type to convert.",
        variant: "destructive"
      });
      return;
    }

    const [category, ingredient] = selectedIngredient.split(" - ");
    const ingredientData = ingredients[category as keyof typeof ingredients];
    const specificIngredient = ingredientData[ingredient as keyof typeof ingredientData];
    
    if (specificIngredient) {
      const result = specificIngredient[dishType as keyof typeof specificIngredient];
      setConversion({
        original: `${amount} ${unit} ${ingredient}`,
        converted: result,
        canConvert: result !== "Cannot convert"
      });
      
      toast({
        title: result === "Cannot convert" ? "Cannot convert this ingredient" : "Ingredient converted!",
        description: result === "Cannot convert" ? "This ingredient doesn't work well in sweet dishes." : "Your vegetarian alternative is ready.",
        variant: result === "Cannot convert" ? "destructive" : "default"
      });
    }
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
            Ingredient
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Converter
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert specific meat, fish, egg, and dairy ingredients to vegetarian alternatives with precise measurements
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
                  <Scale className="h-5 w-5 text-primary" />
                  <span>Select Ingredient</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ingredient">Choose Ingredient</Label>
                  <Select value={selectedIngredient} onValueChange={setSelectedIngredient}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an ingredient to convert" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(ingredients).map(([category, items]) => (
                        Object.keys(items).map(ingredient => (
                          <SelectItem key={`${category} - ${ingredient}`} value={`${category} - ${ingredient}`}>
                            {ingredient}
                          </SelectItem>
                        ))
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="1"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Select value={unit} onValueChange={setUnit}>
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cup">cup</SelectItem>
                        <SelectItem value="cups">cups</SelectItem>
                        <SelectItem value="g">g</SelectItem>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="oz">oz</SelectItem>
                        <SelectItem value="lb">lb</SelectItem>
                        <SelectItem value="piece">piece</SelectItem>
                        <SelectItem value="pieces">pieces</SelectItem>
                        <SelectItem value="tbsp">tbsp</SelectItem>
                        <SelectItem value="tsp">tsp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dishType">Dish Type</Label>
                  <Select value={dishType} onValueChange={setDishType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select dish type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savoury">Savoury</SelectItem>
                      <SelectItem value="sweet">Sweet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleConvert}
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                  size="lg"
                >
                  <Wand2 className="mr-2 h-5 w-5" />
                  Convert Ingredient
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Output Section */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span>Vegetarian Alternative</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {conversion ? (
                  <div className="space-y-4">
                    {conversion.canConvert ? (
                      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Conversion Successful</h3>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            <strong>Original:</strong> {conversion.original}
                          </p>
                          <p className="text-sm text-foreground">
                            <strong>Replace with:</strong> {conversion.converted}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">❌ Cannot Convert</h3>
                        <p className="text-sm text-muted-foreground">
                          This ingredient doesn't work well in sweet dishes and doesn't have a suitable vegetarian alternative for that context.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="min-h-[200px] flex items-center justify-center text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                        <Scale className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Select an ingredient and get precise vegetarian alternatives with measurements
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
            <h2 className="text-3xl font-bold mb-4">Common Conversions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Popular ingredient substitutions with precise measurements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Ground Beef → Lentils</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">1 lb ground beef = 1.5 cups cooked lentils</p>
                <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                  <p className="text-sm font-medium text-primary">Cook lentils with umami seasonings</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Chicken Breast → Tofu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">1 chicken breast = 200g firm tofu</p>
                <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                  <p className="text-sm font-medium text-primary">Press tofu and marinate well</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Eggs → Flax Eggs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">1 egg = 1 tbsp ground flax + 3 tbsp water</p>
                <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                  <p className="text-sm font-medium text-primary">Let mixture sit for 5 minutes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Conversion Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Measurement Guidelines:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Weight vs Volume:</strong> Use weight for more precision</li>
                    <li>• <strong>Protein density:</strong> Plant proteins may need more seasoning</li>
                    <li>• <strong>Liquid content:</strong> Some substitutes release more moisture</li>
                    <li>• <strong>Cooking time:</strong> May vary from original ingredient</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Best Practices:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Start small:</strong> Test conversions in small batches</li>
                    <li>• <strong>Season well:</strong> Plant proteins need more flavor</li>
                    <li>• <strong>Texture matters:</strong> Consider mouthfeel in substitutions</li>
                    <li>• <strong>Cook properly:</strong> Different proteins need different techniques</li>
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