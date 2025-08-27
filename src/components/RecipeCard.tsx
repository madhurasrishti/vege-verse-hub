import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

interface RecipeCardProps {
  title: string;
  image: string;
  description: string;
  cookTime: string;
  servings: number;
  category: string;
  className?: string;
}

const RecipeCard = ({ title, image, description, cookTime, servings, category, className }: RecipeCardProps) => {
  return (
    <Card className={`group overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-[1.02] cursor-pointer ${className}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{cookTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{servings} servings</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;