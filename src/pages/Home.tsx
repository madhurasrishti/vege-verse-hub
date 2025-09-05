import Navigation from "@/components/Navigation";
import RecipeCard from "@/components/RecipeCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Leaf, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-veggie-bowl.jpg";
import lentilBolognese from "@/assets/lentil-bolognese.jpg";
import chickpeaCurry from "@/assets/chickpea-curry.jpg";
import stuffedPeppers from "@/assets/stuffed-peppers.jpg";

const Home = () => {
  const alternatives = [
    {
      original: "Ground Beef",
      vegetarian: "Lentils, Mushrooms, or Plant-based Ground",
      description: "Perfect for tacos, bolognese, and burgers"
    },
    {
      original: "Chicken Breast", 
      vegetarian: "Tofu, Tempeh, or Cauliflower",
      description: "Great for stir-fries, curries, and grilled dishes"
    },
    {
      original: "Fish",
      vegetarian: "Hearts of Palm, Banana Peels, or Jackfruit",
      description: "Excellent for fish tacos and seafood pasta"
    },
    {
      original: "Pork",
      vegetarian: "Jackfruit, King Oyster Mushrooms, or Seitan",
      description: "Perfect for pulled pork sandwiches and stir-fries"
    }
  ];

  const featuredRecipes = [
    {
      title: "Lentil Bolognese Pasta",
      image: lentilBolognese,
      description: "Rich and hearty lentil bolognese sauce served over fresh pasta with herbs and parmesan.",
      cookTime: "35 min",
      servings: 4,
      category: "Italian",
      recipeUrl: "/recipes/lentil-bolognese"
    },
    {
      title: "Chickpea Curry Bowl",
      image: chickpeaCurry,
      description: "Aromatic spices and fresh vegetables in a creamy coconut curry sauce with chickpeas.",
      cookTime: "30 min",
      servings: 6,
      category: "Indian",
      recipeUrl: "/recipes/chickpea-tikka-masala"
    },
    {
      title: "Quinoa Stuffed Bell Peppers",
      image: stuffedPeppers,
      description: "Colorful bell peppers stuffed with quinoa, vegetables, and herbs for a nutritious meal.",
      cookTime: "45 min",
      servings: 4,
      category: "American",
      recipeUrl: "/recipes/stuffed-peppers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Discover Amazing
                  <span className="bg-gradient-primary bg-clip-text text-transparent block">
                    Vegetarian Recipes
                  </span>
                </h1>
                <p className="text-xl text-foreground/80 max-w-xl">
                  Transform your cooking with delicious plant-based alternatives and recipes from around the world.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cuisines">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                    Explore Recipes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/converter">
                  <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                    Convert Recipe
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src={heroImage} 
                alt="Beautiful vegetarian bowl with fresh vegetables"
                className="relative w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vegetarian Alternatives Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Common Vegetarian Alternatives
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Easily swap these ingredients to make any recipe vegetarian-friendly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {alternatives.map((alt, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-destructive line-through">{alt.original}</span>
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span className="text-primary">{alt.vegetarian}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{alt.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured Vegetarian Recipes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked delicious recipes to inspire your plant-based cooking journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/cuisines">
              <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                View All Recipes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mb-4">100% Plant-Based</CardTitle>
              <p className="text-muted-foreground">
                All our recipes are completely vegetarian, using fresh, wholesome ingredients.
              </p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mb-4">Global Cuisines</CardTitle>
              <p className="text-muted-foreground">
                Explore vegetarian dishes from Italian, Indian, Asian, and many more cuisines.
              </p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mb-4">Health Focused</CardTitle>
              <p className="text-muted-foreground">
                Nutritious recipes that are good for you and good for the planet.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;