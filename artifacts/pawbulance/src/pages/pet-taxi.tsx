import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { PetTaxiDialog } from "@/components/forms/pet-taxi-dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Clock, Navigation } from "lucide-react";

export default function PetTaxi() {
  useEffect(() => {
    document.title = "Pet Taxi Dubai | Pet Transport JBR | Pawbulance";
  }, []);

  return (
    <MainLayout>
      <div className="relative pt-20 pb-32 overflow-hidden bg-card border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src="/pet-taxi.png" 
            alt="Pet Taxi Transport" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6">
                <span className="text-sm font-medium uppercase tracking-wider">Premium Transport</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Safe, comfortable travel for your pets
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Our specialized climate-controlled pet taxi provides door-to-door VIP transport across JBR, Dubai Marina, and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PetTaxiDialog>
                  <Button size="lg" className="h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Reserve Pet Taxi
                  </Button>
                </PetTaxiDialog>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/30 hover:bg-primary/10" asChild>
                  <a href="https://wa.me/971547371109">WhatsApp Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: ShieldCheck, title: "Comfort First", desc: "Climate-controlled luxury vans designed specifically for pet safety and comfort." },
            { icon: Navigation, title: "Door-to-Door", desc: "We pick up your pet from your home and return them safely after their appointment." },
            { icon: ShieldCheck, title: "Pro Handlers", desc: "Driven by experienced animal handlers who know how to keep pets calm during transit." },
            { icon: Clock, title: "Reliable", desc: "Punctual scheduling to ensure your pet never misses an appointment." }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 bg-card border border-border rounded-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <div className="p-12 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Coverage Areas</h2>
            <p className="text-muted-foreground mb-8">
              We primarily serve the following areas to ensure prompt and reliable service. If you are located outside these areas, please contact us on WhatsApp to check availability.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {['JBR', 'Dubai Marina', 'Bluewaters', 'Palm Jumeirah', 'Jumeirah', 'Al Sufouh'].map((area, i) => (
                <li key={i} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="font-medium text-foreground/90">{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 bg-muted/50 p-12">
            <h3 className="text-2xl font-serif font-bold mb-6">How it Works</h3>
            <div className="space-y-8">
              {[
                { step: "01", title: "Book Online or WhatsApp", desc: "Schedule your pickup time and location." },
                { step: "02", title: "We Arrive", desc: "Our professional handler arrives at your door." },
                { step: "03", title: "Safe Transport", desc: "Secure travel to the clinic in our luxury van." },
                { step: "04", title: "Return Trip", desc: "We bring them safely back home when they're done." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-secondary font-bold text-xl">{step.step}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}