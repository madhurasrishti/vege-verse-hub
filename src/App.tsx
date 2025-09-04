import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cuisines from "./pages/Cuisines";
import Converter from "./pages/Converter";
import NotFound from "./pages/NotFound";
import LentilBolognese from "./pages/recipes/LentilBolognese";
import ChickpeaTikkaMasala from "./pages/recipes/ChickpeaTikkaMasala";
import PalakPaneer from "./pages/recipes/PalakPaneer";
import MushroomRisotto from "./pages/recipes/MushroomRisotto";
import StuffedPeppers from "./pages/recipes/StuffedPeppers";
import BuddhaBowl from "./pages/recipes/BuddhaBowl";
import VeggieTacos from "./pages/recipes/VeggieTacos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisines" element={<Cuisines />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/recipes/lentil-bolognese" element={<LentilBolognese />} />
          <Route path="/recipes/chickpea-tikka-masala" element={<ChickpeaTikkaMasala />} />
          <Route path="/recipes/palak-paneer" element={<PalakPaneer />} />
          <Route path="/recipes/mushroom-risotto" element={<MushroomRisotto />} />
          <Route path="/recipes/stuffed-peppers" element={<StuffedPeppers />} />
          <Route path="/recipes/buddha-bowl" element={<BuddhaBowl />} />
          <Route path="/recipes/veggie-tacos" element={<VeggieTacos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
