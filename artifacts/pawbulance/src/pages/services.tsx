import { useEffect } from "react";
import { Link } from "wouter";
import { MainLayout } from "@/components/layout/main-layout";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Syringe, Scissors, ShieldCheck, HeartPulse, Activity, FileText, Car } from "lucide-react";

export default function Services() {
  useEffect(() => {
    document.title = "Veterinary Services Dubai | Vet JBR | Pawbulance";
  }, []);

  const services = [
    {
      title: "General Consultation",
      href: "/services/general-consultation",
      icon: Stethoscope,
      description: "Comprehensive health assessments for your pet's ongoing wellness. We take the time to understand your pet's unique needs.",
      details: ["Nose-to-tail examination", "Dietary advice", "Behavioral counseling", "Weight management"]
    },
    {
      title: "Vaccinations",
      href: "/services/vaccinations",
      icon: Syringe,
      description: "Essential immunizations to protect against common and severe diseases, tailored to your pet's lifestyle.",
      details: ["Core vaccines", "Non-core vaccines", "Travel requirements", "Annual boosters"]
    },
    {
      title: "Wellness Checkups",
      href: "/services/wellness-checkups",
      icon: HeartPulse,
      description: "Preventative care is the best medicine. Regular checkups help catch potential issues before they become serious.",
      details: ["Senior pet care", "Puppy/kitten exams", "Blood panels", "Dental evaluations"]
    },
    {
      title: "Grooming",
      href: "/services/grooming",
      icon: Scissors,
      description: "Premium spa and grooming services for a clean, happy pet. Because looking good feels good.",
      details: ["Breed-specific cuts", "Medicated baths", "Nail trimming", "Ear cleaning"]
    },
    {
      title: "Diagnostics",
      href: "/services/diagnostics",
      icon: Activity,
      description: "State-of-art in-house laboratory and imaging equipment for rapid, accurate diagnoses.",
      details: ["Digital X-rays", "Ultrasound", "Blood tests", "Urinalysis"]
    },
    {
      title: "Health Certificates",
      href: "/services/health-certificates",
      icon: FileText,
      description: "Official documentation for international travel, ensuring your pet meets all destination requirements.",
      details: ["Export documentation", "Microchip verification", "Rabies titer tests", "Fit-to-fly letters"]
    },
    {
      title: "Preventive Care",
      href: "/services/preventive-care",
      icon: ShieldCheck,
      description: "Proactive treatments to keep parasites and other preventable conditions at bay.",
      details: ["Flea & tick control", "Heartworm prevention", "Deworming", "Nutritional supplements"]
    },
    {
      title: "Pet Transportation",
      href: "/pet-taxi",
      icon: Car,
      description: "Our dedicated Pet Taxi service ensures safe, comfortable travel to and from the clinic.",
      details: ["Climate-controlled", "Door-to-door", "Professional handlers", "Stress-free travel"]
    }
  ];

  return (
    <MainLayout>
      <div className="bg-[#F7FBFF] border-b border-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-[#3BA9F5] mb-6 font-bold uppercase tracking-wider text-sm">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-extrabold mb-6 text-[#1F2937]">
              Premium Veterinary Care
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed">
              From routine checkups to specialized treatments, our expert team provides compassionate, comprehensive care using modern medical technology.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={service.href} className="block h-full bg-white border border-slate-100 p-5 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-blue-200 hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#3BA9F5] group-hover:text-white transition-colors text-[#3BA9F5]">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-[#1F2937]">{service.title}</h3>
                  <p className="text-[#64748B] mb-6 h-auto min-h-[5rem] leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-4 border-t border-slate-50 mb-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#1F2937] font-medium">
                        <div className="w-2 h-2 rounded-full bg-[#3BA9F5]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-[#3BA9F5] font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 bg-[#EAF7FF] rounded-[2.5rem] p-12 text-center max-w-4xl mx-auto border border-blue-100">
            <h2 className="text-3xl font-serif font-bold mb-4 text-[#1F2937]">Need to schedule a visit?</h2>
            <p className="text-[#64748B] mb-8 text-lg">
              Our team is ready to provide the best care for your furry family member.
            </p>
            <AppointmentDialog>
              <Button size="lg" className="h-14 px-10 text-lg bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full font-bold shadow-md">
                Book an Appointment
              </Button>
            </AppointmentDialog>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
