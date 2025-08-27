import { Link, useLocation } from "react-router-dom";
import { Leaf, ChefHat, Globe, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            VeggieCook
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/">
            <Button 
              variant={isActive("/") ? "default" : "ghost"} 
              className="flex items-center space-x-2"
            >
              <ChefHat className="h-4 w-4" />
              <span>Home</span>
            </Button>
          </Link>
          
          <Link to="/cuisines">
            <Button 
              variant={isActive("/cuisines") ? "default" : "ghost"}
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>Cuisines</span>
            </Button>
          </Link>
          
          <Link to="/converter">
            <Button 
              variant={isActive("/converter") ? "default" : "ghost"}
              className="flex items-center space-x-2"
            >
              <Wand2 className="h-4 w-4" />
              <span>Recipe Converter</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-2">
          <Link to="/">
            <Button 
              variant={isActive("/") ? "default" : "ghost"} 
              size="sm"
              className="p-2"
            >
              <ChefHat className="h-4 w-4" />
            </Button>
          </Link>
          
          <Link to="/cuisines">
            <Button 
              variant={isActive("/cuisines") ? "default" : "ghost"}
              size="sm"
              className="p-2"
            >
              <Globe className="h-4 w-4" />
            </Button>
          </Link>
          
          <Link to="/converter">
            <Button 
              variant={isActive("/converter") ? "default" : "ghost"}
              size="sm"
              className="p-2"
            >
              <Wand2 className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;