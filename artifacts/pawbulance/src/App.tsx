import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import PetTaxi from "@/pages/pet-taxi";
import About from "@/pages/about";
import Reviews from "@/pages/reviews";
import Contact from "@/pages/contact";
import Emergency from "@/pages/emergency";
import Admin from "@/pages/admin";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/pet-taxi" component={PetTaxi} />
      <Route path="/about" component={About} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/contact" component={Contact} />
      <Route path="/emergency" component={Emergency} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;