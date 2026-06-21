import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, Shield, Clock, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";

export default function Home() {
  useEffect(() => {
    document.title = "Pawbulance Veterinary Clinic Dubai | JBR | 4.8★";
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Luxury Veterinary Clinic Dubai" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 dark-gradient-bg opacity-80 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-sm font-medium">4.8★ Top Rated in JBR, Dubai</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-foreground">
                Premium care for your <span className="text-primary italic">best friend</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Step into a sanctuary where pets are treated as family. A female-owned luxury veterinary clinic in the heart of JBR, bringing 5-star hotel hospitality to veterinary medicine.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <AppointmentDialog>
                  <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                    Book Appointment
                  </Button>
                </AppointmentDialog>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/50 text-primary hover:bg-primary/10" asChild>
                  <a href="tel:+971547371109">
                    <PhoneCall className="mr-2 w-5 h-5" />
                    Emergency: Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Features Banner */}
      <section className="bg-card border-y border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Female Owned", desc: "Expert care with a gentle touch" },
              { icon: Clock, title: "Open 6 Days", desc: "Available when you need us" },
              { icon: MapPin, title: "JBR Location", desc: "Convenient Marina access" },
              { icon: Star, title: "130+ Reviews", desc: "Trusted by Dubai owners" }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold mb-4">Exceptional Services</h2>
              <p className="text-muted-foreground text-lg">Comprehensive veterinary care designed to keep your pet healthy, happy, and thriving.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex gap-2 text-primary hover:text-primary hover:bg-primary/10" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "General Consultation", desc: "Comprehensive health assessments for your pet's ongoing wellness.", img: "/vet-care.png" },
              { title: "Vaccinations", desc: "Essential immunizations to protect against common and severe diseases.", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop" },
              { title: "Grooming", desc: "Premium spa and grooming services for a clean, happy pet.", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" }
            ].map((service, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pet Taxi Section */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
          <img src="/pet-taxi.png" alt="Pet Taxi" className="w-full h-full object-cover mask-image-fade" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black)' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6">
              <span className="text-sm font-medium uppercase tracking-wider">Premium Transport</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Pawbulance Pet Taxi</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Don't have time to drop off your pet? Our specialized climate-controlled pet taxi provides door-to-door VIP transport across JBR, Dubai Marina, and surrounding areas.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Climate-controlled luxury vans', 'Professional animal handlers', 'Reliable scheduling', 'Safe & stress-free travel'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
              <Link href="/pet-taxi">Learn More & Book</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}