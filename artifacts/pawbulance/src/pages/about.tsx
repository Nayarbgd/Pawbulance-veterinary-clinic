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
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F1E8] border border-[#F7E9D3] text-[#1F2937] mb-6">
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                <span className="text-sm font-bold uppercase tracking-wider">Female-Owned Clinic</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-extrabold mb-8 text-[#1F2937] leading-tight">
                A sanctuary where pets are treated as family
              </h1>
              <div className="space-y-6 text-lg text-[#64748B] leading-relaxed">
                <p>
                  Pawbulance was founded on a simple but powerful premise: veterinary care in Dubai should feel less like a clinical necessity and more like a warm, welcoming experience for your beloved pets.
                </p>
                <p>
                  We bring a profound level of empathy, attention to detail, and gentleness to our practice. We understand that a visit to the vet can be stressful for both pets and owners, which is why we've designed our clinic in JBR to feel calm, clean, and friendly.
                </p>
                <p>
                  Every detail, from our modern equipment to our approachable staff, is engineered to whisper, "your pet is safe here."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-[#F8FAFC] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1974&auto=format&fit=crop" 
                  alt="Veterinarian with dog" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white border border-slate-100 p-6 rounded-3xl shadow-xl max-w-[260px]">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-[#3BA9F5] fill-[#3BA9F5]" />)}
                </div>
                <p className="font-bold text-[#1F2937] text-sm leading-relaxed">"The most compassionate care we've ever experienced in Dubai."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-[#F8FAFC] py-24 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Compassion First", desc: "We prioritize gentle handling and stress-free techniques in all our treatments." },
              { icon: Users, title: "Expert Team", desc: "A dedicated team bringing empathy, precision, and genuine care to veterinary medicine." },
              { icon: MapPin, title: "Community Focused", desc: "Deeply embedded in the JBR and Marina community, serving our neighbors with pride." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full bg-[#EAF7FF] flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-[#3BA9F5]" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-[#1F2937]">{value.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
