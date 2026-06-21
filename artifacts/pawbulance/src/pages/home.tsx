import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, Shield, Clock, MapPin, PhoneCall, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";

export default function Home() {
  useEffect(() => {
    document.title = "Pawbulance Veterinary Clinic Dubai | JBR | 4.8★";
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7FBFF] to-[#EAF7FF]">
        {/* Soft decorative blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#3BA9F5] opacity-[0.06] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#6CC7FF] opacity-[0.08] blur-3xl pointer-events-none" />
        
        {/* Floating paw prints */}
        <div className="absolute top-[20%] left-[10%] opacity-[0.04] pointer-events-none">
          <Heart className="w-12 h-12 text-[#3BA9F5]" />
        </div>
        <div className="absolute bottom-[30%] right-[15%] opacity-[0.05] pointer-events-none">
          <Heart className="w-16 h-16 text-[#3BA9F5]" />
        </div>
        <div className="absolute top-[40%] right-[30%] opacity-[0.03] pointer-events-none">
          <Heart className="w-8 h-8 text-[#3BA9F5]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-slate-700 mb-8">
                  <Star className="w-4 h-4 fill-[#3BA9F5] text-[#3BA9F5]" />
                  <span className="text-sm font-medium">4.8★ Top Rated Vet Clinic in JBR</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-serif font-extrabold leading-tight mb-6 text-[#1F2937]">
                  Premium care for your <span className="text-[#3BA9F5]">best friend</span>
                </h1>
                
                <p className="text-lg md:text-xl text-[#64748B] mb-8 leading-relaxed max-w-xl">
                  Step into a sanctuary where pets are treated as family. A modern veterinary clinic in the heart of JBR, bringing warmth, expertise, and love to veterinary medicine.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <AppointmentDialog>
                    <Button size="lg" className="h-14 px-8 text-lg bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full shadow-md hover:shadow-lg transition-all font-semibold">
                      Book Appointment
                    </Button>
                  </AppointmentDialog>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-[#3BA9F5] text-[#3BA9F5] rounded-full hover:bg-blue-50 transition-all font-semibold" asChild>
                    <a href="https://wa.me/971547371109">
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl rotate-2">
                <div className="aspect-[4/3] bg-gradient-to-tr from-blue-100 to-white flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1974&auto=format&fit=crop" 
                    alt="Happy dog with vet" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 -rotate-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-[#1F2937]">Expert Care</p>
                  <p className="text-sm text-[#64748B]">Trusted Professionals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F7FBFF] py-20 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Female Owned", desc: "Expert care with a gentle touch" },
              { icon: Clock, title: "Open 6 Days", desc: "Available when you need us" },
              { icon: MapPin, title: "JBR Location", desc: "Convenient Marina access" },
              { icon: Star, title: "130+ Reviews", desc: "Trusted by Dubai owners" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[#3BA9F5]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1F2937] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#64748B]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold mb-4 text-[#1F2937]">Exceptional Services</h2>
              <p className="text-[#64748B] text-lg">Comprehensive veterinary care designed to keep your pet healthy, happy, and thriving.</p>
            </div>
            <Button variant="outline" className="hidden md:flex gap-2 border-2 border-blue-100 text-[#3BA9F5] hover:bg-blue-50 hover:border-blue-200 rounded-full px-6 transition-all" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "General Consultation", desc: "Comprehensive health assessments for your pet's ongoing wellness.", img: "https://images.unsplash.com/photo-1628009368231-7bb7cbcb8127?q=80&w=2070&auto=format&fit=crop" },
              { title: "Vaccinations", desc: "Essential immunizations to protect against common and severe diseases.", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop" },
              { title: "Grooming", desc: "Premium spa and grooming services for a clean, happy pet.", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#1F2937]">{service.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Button variant="outline" className="w-full border-2 border-blue-100 text-[#3BA9F5] rounded-full h-12 font-semibold" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pet Taxi Section */}
      <section className="py-24 bg-gradient-to-br from-[#EAF7FF] to-[#F7FBFF] border-y border-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-blue-100 text-[#3BA9F5] mb-6">
                <span className="text-sm font-bold uppercase tracking-wider">Premium Transport</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1F2937]">The Pawbulance Pet Taxi</h2>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                Don't have time to drop off your pet? Our specialized climate-controlled pet taxi provides door-to-door VIP transport across JBR, Dubai Marina, and surrounding areas.
              </p>
              
              <ul className="space-y-5 mb-10">
                {['Climate-controlled comfort vans', 'Professional animal handlers', 'Reliable scheduling', 'Safe & stress-free travel'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3BA9F5]" />
                    </div>
                    <span className="font-medium text-[#1F2937]">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="h-14 px-8 text-lg bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full shadow-md transition-all font-semibold" asChild>
                <Link href="/pet-taxi">Learn More & Book</Link>
              </Button>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop" alt="Happy dog in car" className="w-full h-auto object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F7FBFF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-[#1F2937]">Happy Pets & Owners</h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">See what our wonderful community has to say about their experience with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah & Luna", loc: "Dubai Marina", text: "The team treated my cat with so much warmth. It truly feels like a place where they care." },
              { name: "Ahmed & Max", loc: "JBR", text: "The pet taxi service is incredibly convenient and the clinic is spotless. Best vet in Dubai." },
              { name: "Jessica & Bella", loc: "Bluewaters", text: "Dr. and the team are fantastic. Bella actually gets excited to visit the clinic!" }
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[#1F2937] font-medium leading-relaxed mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-[#3BA9F5]">{review.name}</p>
                  <p className="text-sm text-[#64748B]">{review.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#3BA9F5] to-[#6CC7FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to prioritize your pet's wellness?</h2>
          <p className="text-blue-50 text-xl mb-10 max-w-2xl mx-auto">Join the Pawbulance family today and experience a new standard of veterinary care.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AppointmentDialog>
              <Button size="lg" className="h-14 px-8 text-lg bg-white text-[#3BA9F5] hover:bg-blue-50 rounded-full font-bold shadow-lg">
                Book an Appointment
              </Button>
            </AppointmentDialog>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full font-bold" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
