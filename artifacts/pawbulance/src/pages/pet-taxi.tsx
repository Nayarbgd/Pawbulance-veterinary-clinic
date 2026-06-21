import { useSEO } from "@/hooks/use-seo";
import { MainLayout } from "@/components/layout/main-layout";
import { PetTaxiDialog } from "@/components/forms/pet-taxi-dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Clock, Navigation } from "lucide-react";

export default function PetTaxi() {
  useSEO({
    title: "Pet Taxi Dubai | Pet Transport JBR | Pawbulance",
    description: "Safe, stress-free pet transport in Dubai. Pawbulance's pet taxi service picks up and drops off your pet to and from the clinic.",
    canonical: "/pet-taxi",
  });

  return (
    <MainLayout>
      <div className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-[#EAF7FF] to-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-[#3BA9F5] mb-6 font-bold uppercase tracking-wider text-sm shadow-sm">
                Door-to-Door Transport
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-6 text-[#1F2937]">
                Safe, comfortable travel for your pets
              </h1>
              <p className="text-xl text-[#64748B] mb-10 leading-relaxed">
                Our specialized climate-controlled pet taxi provides reliable VIP transport across JBR, Dubai Marina, and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <PetTaxiDialog>
                  <Button size="lg" className="h-14 px-8 text-lg bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full font-bold shadow-md">
                    Reserve Pet Taxi
                  </Button>
                </PetTaxiDialog>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-[#3BA9F5] text-[#3BA9F5] bg-white hover:bg-blue-50 rounded-full font-bold" asChild>
                  <a href="https://wa.me/971547371109">WhatsApp Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: ShieldCheck, title: "Comfort First", desc: "Climate-controlled vans designed specifically for pet safety and comfort." },
            { icon: Navigation, title: "Door-to-Door", desc: "We pick up your pet from your home and return them safely after their visit." },
            { icon: ShieldCheck, title: "Pro Handlers", desc: "Driven by experienced staff who know how to keep pets calm during transit." },
            { icon: Clock, title: "Reliable", desc: "Punctual scheduling to ensure your pet never misses an appointment." }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#EAF7FF] flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-[#3BA9F5]" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-[#1F2937]">{feature.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white border border-slate-100 shadow-sm rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row">
          <div className="p-12 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#1F2937]">Coverage Areas</h2>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              We serve the following areas to ensure prompt and reliable service. If you are located outside these areas, please contact us on WhatsApp to check availability.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {['JBR', 'Dubai Marina', 'Bluewaters', 'Palm Jumeirah', 'Jumeirah', 'Al Sufouh'].map((area, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#3BA9F5]" />
                  </div>
                  <span className="font-semibold text-[#1F2937]">{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 bg-[#F8FAFC] p-12">
            <h3 className="text-3xl font-serif font-bold mb-8 text-[#1F2937]">How it Works</h3>
            <div className="space-y-8">
              {[
                { step: "01", title: "Book Online", desc: "Schedule your pickup time and location." },
                { step: "02", title: "We Arrive", desc: "Our professional handler arrives at your door." },
                { step: "03", title: "Safe Transport", desc: "Secure travel to the clinic in our clean van." },
                { step: "04", title: "Return Trip", desc: "We bring them safely back home when they're done." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#3BA9F5] text-white font-bold flex items-center justify-center shrink-0 shadow-sm">
                    {step.step}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-lg mb-1 text-[#1F2937]">{step.title}</h4>
                    <p className="text-[#64748B]">{step.desc}</p>
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
