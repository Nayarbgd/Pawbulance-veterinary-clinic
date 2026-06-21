import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";

export default function Reviews() {
  useEffect(() => {
    document.title = "Reviews | Pawbulance Veterinary Clinic Dubai";
  }, []);

  const testimonials = [
    {
      name: "Sarah A.",
      location: "Dubai Marina",
      text: "My cat Luna had an emergency and the Pawbulance team was incredible. The staff treated her with so much care.",
      rating: 5
    },
    {
      name: "Ahmed K.",
      location: "JBR",
      text: "The pet taxi service saved us so much time. Extremely professional team.",
      rating: 5
    },
    {
      name: "Jessica R.",
      location: "Bluewaters",
      text: "The clinic is modern, clean and the veterinarians genuinely care about pets. It feels like a 5-star hotel.",
      rating: 5
    },
    {
      name: "Mohammed H.",
      location: "Palm Jumeirah",
      text: "Best vet experience in Dubai. They remember my dog's name every visit.",
      rating: 5
    },
    {
      name: "Laura C.",
      location: "Jumeirah",
      text: "The WhatsApp support is amazing. Always responsive, always caring. Highly recommend them.",
      rating: 5
    },
    {
      name: "Rania S.",
      location: "Al Sufouh",
      text: "Took my rabbit for a checkup and they treated him like royalty. Incredible service.",
      rating: 5
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 text-primary fill-primary" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Loved by Dubai's pets <br/>(and their humans)
            </h1>
            <p className="text-xl text-muted-foreground">
              With a 4.8-star rating across 131+ Google reviews, we're proud to be the trusted choice for veterinary care in JBR and beyond.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl relative group hover:border-primary/50 transition-colors"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-muted/30 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-card border border-border p-12 rounded-3xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to experience the Pawbulance difference?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AppointmentDialog>
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                Book an Appointment
              </Button>
            </AppointmentDialog>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
              <a href="https://g.page/r/pawbulance/review" target="_blank" rel="noopener noreferrer">
                Leave a Google Review
              </a>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}