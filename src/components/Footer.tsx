import { Link } from "react-router-dom";
import { Leaf, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Veggie Heaven</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your go-to destination for delicious vegetarian recipes and plant-based cooking inspiration.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Made with love for plant-based cooking</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cuisines" className="text-muted-foreground hover:text-primary transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/converter" className="text-muted-foreground hover:text-primary transition-colors">
                  Recipe Converter
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Popular Recipes */}
          <div className="space-y-4">
            <h3 className="font-semibold">Popular Recipes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/recipes/lentil-bolognese" className="text-muted-foreground hover:text-primary transition-colors">
                  Lentil Bolognese
                </Link>
              </li>
              <li>
                <Link to="/recipes/chickpea-tikka-masala" className="text-muted-foreground hover:text-primary transition-colors">
                  Chickpea Tikka Masala
                </Link>
              </li>
              <li>
                <Link to="/recipes/mushroom-risotto" className="text-muted-foreground hover:text-primary transition-colors">
                  Mushroom Risotto
                </Link>
              </li>
              <li>
                <Link to="/recipes/buddha-bowl" className="text-muted-foreground hover:text-primary transition-colors">
                  Buddha Bowl
                </Link>
              </li>
            </ul>
          </div>
          
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© {currentYear} Veggie Heaven®. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
