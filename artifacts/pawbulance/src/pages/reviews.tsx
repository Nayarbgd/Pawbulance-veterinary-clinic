import { useSEO } from "@/hooks/use-seo";
import { MainLayout } from "@/components/layout/main-layout";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";

export default function Reviews() {
  useSEO({
    title: "Reviews | Pawbulance Veterinary Clinic Dubai",
    description: "See what pet owners in Dubai are saying about Pawbulance. 4.8★ rated vet clinic in JBR with 131+ happy clients.",
    canonical: "/reviews",
  });

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
      text: "The clinic is modern, clean and the veterinarians genuinely care about pets. Highly recommend.",
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
      text: "The WhatsApp support is amazing. Always responsive, always caring.",
      rating: 5
    },
    {
      name: "Rania S.",
      location: "Al Sufouh",
      text: "Took my rabbit for a checkup and they treated him wonderfully. Incredible service.",
      rating: 5
    }
  ];

  return (
    <MainLayout>
      <div className="bg-[#F7FBFF] py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100 items-center justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="font-bold ml-2 text-[#1F2937]">4.8 Google Rating</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-6 text-[#1F2937] leading-tight">
              Loved by Dubai's pets <br className="hidden md:block" />(and their humans)
            </h1>
            <p className="text-xl text-[#64748B] leading-relaxed">
              We're proud to be the trusted choice for veterinary care in JBR and beyond.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm relative group hover:shadow-md transition-all"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[#1F2937] font-medium leading-relaxed mb-8 italic text-lg">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-100 pt-6">
                  <p className="font-bold text-[#1F2937] text-lg">{testimonial.name}</p>
                  <p className="text-sm font-medium text-[#64748B] uppercase tracking-wide mt-1">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-[#EAF7FF] border border-blue-100 p-16 rounded-[3rem] max-w-4xl mx-auto shadow-sm">
            <h2 className="text-4xl font-serif font-bold mb-8 text-[#1F2937]">Experience the difference</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AppointmentDialog>
                <Button size="lg" className="h-14 px-10 text-lg bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full font-bold shadow-md">
                  Book an Appointment
                </Button>
              </AppointmentDialog>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2 border-[#3BA9F5] text-[#3BA9F5] bg-white hover:bg-blue-50 rounded-full font-bold" asChild>
                <a href="https://g.page/r/pawbulance/review" target="_blank" rel="noopener noreferrer">
                  Leave a Review
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
