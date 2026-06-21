import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
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

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

const pageTransition = {
  duration: 0.22,
  ease: [0.25, 0.46, 0.45, 0.94],
};

function AnimatedRoutes() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        style={{ minHeight: "100vh" }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
    </>
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
        {/* FloatingWhatsApp lives outside AnimatePresence so it never disappears */}
        <FloatingWhatsApp />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
