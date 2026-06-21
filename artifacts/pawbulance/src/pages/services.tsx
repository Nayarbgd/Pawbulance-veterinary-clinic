import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Stethoscope, Syringe, Scissors, ShieldCheck, 
  HeartPulse, Activity, FileText, Car
} from "lucide-react";

export default function Services() {
  useEffect(() => {
    document.title = "Veterinary Services Dubai | Vet JBR | Pawbulance";
  }, []);

  const services = [
    {
      title: "General Consultation",
      icon: Stethoscope,
      description: "Comprehensive health assessments for your pet's ongoing wellness. We take the time to understand your pet's unique needs.",
      details: ["Nose-to-tail examination", "Dietary advice", "Behavioral counseling", "Weight management"]
    },
    {
      title: "Vaccinations",
      icon: Syringe,
      description: "Essential immunizations to protect against common and severe diseases, tailored to your pet's lifestyle.",
      details: ["Core vaccines", "Non-core vaccines", "Travel requirements", "Annual boosters"]
    },
    {
      title: "Wellness Checkups",
      icon: HeartPulse,
      description: "Preventative care is the best medicine. Regular checkups help catch potential issues before they become serious.",
      details: ["Senior pet care", "Puppy/kitten exams", "Blood panels", "Dental evaluations"]
    },
    {
      title: "Grooming",
      icon: Scissors,
      description: "Premium spa and grooming services for a clean, happy pet. Because looking good feels good.",
      details: ["Breed-specific cuts", "Medicated baths", "Nail trimming", "Ear cleaning"]
    },
    {
      title: "Diagnostics",
      icon: Activity,
      description: "State-of-art in-house laboratory and imaging equipment for rapid, accurate diagnoses.",
      details: ["Digital X-rays", "Ultrasound", "Blood tests", "Urinalysis"]
    },
    {
      title: "Health Certificates",
      icon: FileText,
      description: "Official documentation for international travel, ensuring your pet meets all destination requirements.",
      details: ["Export documentation", "Microchip verification", "Rabies titer tests", "Fit-to-fly letters"]
    },
    {
      title: "Preventive Care",
      icon: ShieldCheck,
      description: "Proactive treatments to keep parasites and other preventable conditions at bay.",
      details: ["Flea & tick control", "Heartworm prevention", "Deworming", "Nutritional supplements"]
    },
    {
      title: "Pet Transportation",
      icon: Car,
      description: "Our dedicated Pet Taxi service ensures safe, comfortable travel to and from the clinic.",
      details: ["Climate-controlled", "Door-to-door", "Professional handlers", "Stress-free travel"]
    }
  ];

  return (
    <MainLayout>
      <div className="bg-card border-b border-border py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Premium Veterinary Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From routine checkups to specialized treatments, our expert team provides compassionate, comprehensive care using state-of-the-art medical technology.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 h-20">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-primary/5 border border-primary/20 rounded-3xl p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4">Need to schedule a visit?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Our team is ready to provide the best care for your furry family member.
          </p>
          <AppointmentDialog>
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              Book an Appointment
            </Button>
          </AppointmentDialog>
        </div>
      </div>
    </MainLayout>
  );
}