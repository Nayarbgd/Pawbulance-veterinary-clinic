import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { motion } from "framer-motion";
import { Heart, Star, Users, MapPin } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Pawbulance | Female-Owned Vet Clinic Dubai";
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <span className="text-sm font-medium uppercase tracking-wider">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              A sanctuary where pets are treated as family
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Pawbulance was founded on a simple but powerful premise: veterinary care in Dubai should feel less like a clinical necessity and more like a premium hospitality experience for your beloved pets.
              </p>
              <p>
                As a proudly female-owned business, we bring a profound level of empathy, attention to detail, and gentleness to our practice. We understand that a visit to the vet can be stressful for both pets and owners, which is why we've designed our clinic in JBR to feel like a calm, luxurious retreat.
              </p>
              <p>
                From our warm amber lighting to our carefully selected calming pheromones, every detail is engineered to whisper, "your pet is safe here."
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <img 
                src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1974&auto=format&fit=crop" 
                alt="Veterinarian with dog" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-card border border-border p-6 rounded-2xl shadow-xl max-w-[240px]">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-primary" />
              </div>
              <p className="font-medium text-sm">"The most compassionate care we've ever experienced in Dubai."</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-border">
          {[
            { icon: Heart, title: "Compassion First", desc: "We prioritize gentle handling and stress-free techniques in all our treatments." },
            { icon: Users, title: "Female Owned", desc: "A dedicated team bringing empathy, precision, and genuine care to veterinary medicine." },
            { icon: MapPin, title: "Community Focused", desc: "Deeply embedded in the JBR and Marina community, serving our neighbors with pride." }
          ].map((value, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-6 shadow-sm">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}