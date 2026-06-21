import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, Shield, Clock, MapPin, Phone, Heart, CheckCircle, Car, Calendar, Stethoscope, Award, Users, Syringe, Scissors, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";
import { PetTaxiDialog } from "@/components/forms/pet-taxi-dialog";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Home() {
  useEffect(() => {
    document.title = "Pawbulance Veterinary Clinic Dubai | JBR | 4.8★";
  }, []);

  return (
    <MainLayout>

      {/* ── HERO MOBILE (text on top of image, like desktop) ── */}
      <section className="md:hidden relative overflow-hidden" style={{ minHeight: "85vh" }}>
        <img
          src="/hero-vet.png"
          alt="Pawbulance veterinary clinic Dubai"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "70% center" }}
        />
        {/* Left-to-right gradient so text is readable, subjects visible on right */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.10) 100%)" }}
        />
        <div className="relative z-20 flex flex-col justify-center h-full px-5 pt-28 pb-12">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-100 text-slate-700 mb-5 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-[#3BA9F5] text-[#3BA9F5]" />
              <span className="text-xs font-medium">4.8★ Top Rated Vet Clinic in JBR</span>
            </div>
            <h1 className="text-4xl font-serif font-extrabold leading-tight mb-4 text-[#1F2937]">
              Premium care<br />for your{" "}
              <span className="text-[#3BA9F5]">best friend</span>
            </h1>
            <p className="text-base text-[#4B5563] mb-6 leading-relaxed max-w-[260px]">
              A modern veterinary clinic in the heart of JBR, bringing warmth, expertise, and love to veterinary medicine.
            </p>
            <div className="flex flex-col gap-3">
              <AppointmentDialog>
                <Button size="lg" className="h-12 text-base bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full shadow-md font-semibold w-full">
                  Book Appointment
                </Button>
              </AppointmentDialog>
              <Button size="lg" variant="outline" className="h-12 text-base border-2 border-[#3BA9F5] text-[#3BA9F5] bg-white/70 rounded-full font-semibold w-full" asChild>
                <a href="https://wa.me/971547371109">WhatsApp Us</a>
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-xs text-[#4B5563] font-medium">131+ happy clients · JBR, Dubai</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HERO DESKTOP (full-bleed overlay) ── */}
      <section className="hidden md:flex relative min-h-[90vh] items-center overflow-hidden">
        <img
          src="/hero-vet.png"
          alt="Pawbulance veterinary clinic Dubai"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "60% center" }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.65) 45%, rgba(255,255,255,0.10) 100%)" }}
        />
        <div className="relative z-20 w-full pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-lg">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 shadow-sm border border-slate-100 text-slate-700 mb-6">
                  <Star className="w-3.5 h-3.5 fill-[#3BA9F5] text-[#3BA9F5]" />
                  <span className="text-sm font-medium">4.8★ Top Rated Vet Clinic in JBR</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight mb-5 text-[#1F2937]">
                  Premium care<br />for your{" "}
                  <span className="text-[#3BA9F5]">best friend</span>
                </h1>
                <p className="text-lg text-[#4B5563] mb-7 leading-relaxed max-w-md">
                  A modern veterinary clinic in the heart of JBR, bringing warmth, expertise, and love to veterinary medicine.
                </p>
                <div className="flex gap-4">
                  <AppointmentDialog>
                    <Button size="lg" className="h-14 px-8 text-lg bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full shadow-md font-semibold">
                      Book Appointment
                    </Button>
                  </AppointmentDialog>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-[#3BA9F5] text-[#3BA9F5] bg-white/80 rounded-full hover:bg-blue-50 font-semibold" asChild>
                    <a href="https://wa.me/971547371109">WhatsApp Us</a>
                  </Button>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="text-sm text-[#4B5563] font-medium">131+ happy clients · JBR, Dubai</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS STRIP ── */}
      <section className="bg-white border-y border-slate-100 py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4.8★", label: "Google Rating" },
              { value: "131+", label: "Happy Reviews" },
              { value: "6", label: "Days Open" },
              { value: "100%", label: "Compassionate Care" },
            ].map((stat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <p className="text-3xl md:text-4xl font-extrabold text-[#3BA9F5] mb-1">{stat.value}</p>
                <p className="text-sm text-[#64748B] font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#F7FBFF] py-14 md:py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2937] mb-3">Why Pet Owners Choose Pawbulance</h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-xl mx-auto">We are more than a clinic — we are a community built around the love of animals.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Female Owned", desc: "Expert care with a personal, compassionate touch" },
              { icon: Clock, title: "Open 6 Days", desc: "Mon & Wed–Sun — available when you need us most" },
              { icon: MapPin, title: "JBR Location", desc: "Convenient access from JBR, Marina & Bluewaters" },
              { icon: Award, title: "131+ Reviews", desc: "4.8-star reputation built on trust and results" },
            ].map((feature, idx) => (
              <motion.div key={idx} {...fadeUp} transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[#3BA9F5]" />
                </div>
                <h3 className="font-bold text-lg text-[#1F2937] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#64748B]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2937] mb-3">Your First Visit, Made Easy</h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-xl mx-auto">We make it simple to get your pet the care they deserve — from booking to treatment.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-blue-100 z-0" />
            {[
              { icon: Calendar, step: "01", title: "Book Online", desc: "Choose your service and preferred time slot via our website or WhatsApp." },
              { icon: Car, step: "02", title: "Arrive or We Collect", desc: "Visit our JBR clinic directly or use our Pet Taxi door-to-door service." },
              { icon: Stethoscope, step: "03", title: "Expert Consultation", desc: "Our vet performs a thorough examination in a calm, stress-free environment." },
              { icon: CheckCircle, step: "04", title: "Follow-Up Care", desc: "Receive a complete health report and personalised aftercare recommendations." },
            ].map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#EAF7FF] border-4 border-white shadow-md flex items-center justify-center mb-5">
                  <step.icon className="w-8 h-8 text-[#3BA9F5]" />
                </div>
                <span className="text-xs font-bold text-[#3BA9F5] tracking-widest mb-2">STEP {step.step}</span>
                <h3 className="font-bold text-lg text-[#1F2937] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-14 md:py-24 bg-[#F7FBFF] relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-[#1F2937]">Exceptional Services</h2>
              <p className="text-[#64748B] text-base md:text-lg">Comprehensive veterinary care designed to keep your pet healthy, happy, and thriving.</p>
            </div>
            <Button variant="outline" className="hidden md:flex gap-2 border-2 border-blue-100 text-[#3BA9F5] hover:bg-blue-50 hover:border-blue-200 rounded-full px-6 transition-all" asChild>
              <Link href="/services">View All Services <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: "general-consultation", title: "General Consultation", desc: "Comprehensive health assessments for your pet's ongoing wellness.", img: "/general-consultation.png" },
              { slug: "vaccinations", title: "Vaccinations", desc: "Essential immunizations to protect against common and severe diseases.", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop" },
              { slug: "grooming", title: "Grooming", desc: "Premium spa and grooming services for a clean, happy pet.", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" },
            ].map((service, idx) => (
              <motion.div key={idx} {...fadeUp} transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 text-[#1F2937] group-hover:text-[#3BA9F5] transition-colors">{service.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{service.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3BA9F5] mt-4">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Full services icon grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: Syringe, label: "Microchipping", slug: "microchipping" },
              { icon: Shield, label: "Preventive Care", slug: "preventive-care" },
              { icon: Stethoscope, label: "Diagnostics", slug: "diagnostics" },
              { icon: Scissors, label: "Dental Care", slug: "dental-care" },
              { icon: Award, label: "Health Certs", slug: "health-certificates" },
              { icon: Car, label: "Pet Taxi", slug: null },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.3, delay: i * 0.06 }}>
                <Link href={s.slug ? `/services/${s.slug}` : "/pet-taxi"} className="flex flex-col items-center gap-3 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-[#3BA9F5] transition-colors">
                    <s.icon className="w-5 h-5 text-[#3BA9F5] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-[#64748B] text-center">{s.label}</span>
                </Link>
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

      {/* ── PET TAXI ── */}
      <section className="py-14 md:py-24 bg-gradient-to-br from-[#EAF7FF] to-[#F7FBFF] border-y border-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-blue-100 text-[#3BA9F5] mb-6">
                <span className="text-sm font-bold uppercase tracking-wider">Premium Transport</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1F2937]">The Pawbulance Pet Taxi</h2>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                Don't have time to drop off your pet? Our specialised climate-controlled pet taxi provides door-to-door VIP transport across JBR, Dubai Marina, and surrounding areas.
              </p>
              <ul className="space-y-4 mb-10">
                {['Climate-controlled comfort vans', 'Professional animal handlers', 'Reliable scheduling', 'Safe & stress-free travel'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3BA9F5]" />
                    </div>
                    <span className="font-medium text-[#1F2937]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <PetTaxiDialog>
                  <Button size="lg" className="h-14 px-8 text-lg bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full shadow-md transition-all font-semibold">
                    Reserve Pet Taxi
                  </Button>
                </PetTaxiDialog>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-[#3BA9F5] text-[#3BA9F5] rounded-full hover:bg-blue-50" asChild>
                  <Link href="/pet-taxi">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-white">
                <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop" alt="Happy dog in car" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-[#1F2937]">Happy Pets & Owners</h2>
            <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto">See what our wonderful community has to say about their experience with us.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah A.", pet: "Cat owner — Luna", loc: "Dubai Marina", text: "My cat had an emergency late in the evening and the Pawbulance team was incredible. The staff treated her with so much care and patience." },
              { name: "Ahmed K.", pet: "Dog owner — Max", loc: "JBR", text: "The pet taxi service saved us so much time. Extremely professional team and the clinic is spotless. Genuinely the best vet in Dubai." },
              { name: "Jessica R.", pet: "Dog owner — Bella", loc: "Bluewaters", text: "The clinic is modern, clean and the veterinarians genuinely care about pets. Bella actually gets excited to go to the vet now!" },
              { name: "Mohammed H.", pet: "Dog owner — Bruno", loc: "Palm Jumeirah", text: "Best vet experience in Dubai. They remember my dog's name every single visit. It's that personal attention that makes all the difference." },
              { name: "Laura C.", pet: "Cat owner — Mochi", loc: "Jumeirah", text: "The WhatsApp support is amazing. Always responsive, always caring. I feel like I can reach out any time and someone is there." },
              { name: "Rania S.", pet: "Rabbit owner — Coco", loc: "Al Sufouh", text: "Took my rabbit for a checkup and they treated him like royalty. Not every vet knows how to handle small animals — these do." },
            ].map((review, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-[#1F2937] leading-relaxed mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-[#3BA9F5]">{review.name}</p>
                  <p className="text-xs text-[#64748B]">{review.pet} · {review.loc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-12 text-center">
            <Button variant="outline" className="border-2 border-blue-100 text-[#3BA9F5] hover:bg-blue-50 rounded-full px-8 h-12 font-semibold" asChild>
              <Link href="/reviews">Read All Reviews <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-14 md:py-20 bg-[#F7FBFF] border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <motion.div {...fadeUp} className="w-full lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-[#1F2937] mb-4">Serving Dubai's Finest Neighbourhoods</h2>
              <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
                Our clinic and pet taxi service cover all major communities around JBR and Dubai Marina. If you're nearby, we're your local vet.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["JBR", "Dubai Marina", "Bluewaters Island", "Palm Jumeirah", "Jumeirah", "Al Sufouh", "JLT", "The Greens"].map((area) => (
                  <span key={area} className="bg-white border border-blue-100 text-[#3BA9F5] rounded-full px-4 py-2 text-sm font-semibold shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3BA9F5] shrink-0 mt-1" />
                <p className="text-[#64748B] text-sm">Amwaj 2, Al Mamsha Street, Jumeirah Beach Residence (JBR), Dubai, UAE</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-md h-72 bg-[#EAF7FF]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5!2d55.1318!3d25.0762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0b0a0a0a0a0a%3A0x0!2sJumeirah+Beach+Residence%2C+Dubai!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pawbulance location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY CALLOUT ── */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Pet Emergency? Don't Wait.</h3>
              <p className="text-[#64748B] text-lg">If your pet needs urgent care, contact us immediately. We'll guide you through the next steps and have a team ready when you arrive.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="tel:+971547371109" className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-sm">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Button variant="outline" className="border-2 border-red-200 text-red-500 hover:bg-red-50 rounded-full px-6 font-semibold" asChild>
                <Link href="/emergency">Emergency Info</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-14 md:py-20 bg-[#F7FBFF] border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div {...fadeUp} className="w-full lg:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2000&auto=format&fit=crop" alt="Pawbulance clinic interior" className="w-full h-80 object-cover" />
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="w-full lg:w-1/2">
              <span className="text-sm font-bold text-[#3BA9F5] uppercase tracking-widest mb-3 block">About Us</span>
              <h2 className="text-4xl font-serif font-bold text-[#1F2937] mb-5">Your Pet's Health, Our Mission</h2>
              <p className="text-[#64748B] text-lg leading-relaxed mb-5">
                Pawbulance was founded on a simple belief: every pet deserves the same quality of care and attention as any family member. As a female-owned clinic in the heart of JBR, we have built a space that is calm, modern, and completely focused on your pet's wellbeing.
              </p>
              <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                Our team of experienced veterinarians and compassionate support staff work together to deliver personalised, evidence-based care — from routine checkups to urgent treatment.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Female-Owned", "State-of-the-Art Facilities", "Personalised Care", "Expert Team"].map((tag) => (
                  <span key={tag} className="bg-blue-50 text-[#3BA9F5] border border-blue-100 rounded-full px-4 py-1.5 text-sm font-semibold">{tag}</span>
                ))}
              </div>
              <Button className="bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full px-8 h-12 font-semibold" asChild>
                <Link href="/about">Meet Our Team <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-[#3BA9F5] to-[#6CC7FF]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to prioritize your pet's wellness?</h2>
            <p className="text-blue-50 text-base md:text-xl mb-8 max-w-2xl mx-auto">Join the Pawbulance family today and experience a new standard of veterinary care in Dubai.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <AppointmentDialog>
                <Button size="lg" className="h-14 px-8 text-lg bg-white text-[#3BA9F5] hover:bg-blue-50 rounded-full font-bold shadow-lg">
                  Book an Appointment
                </Button>
              </AppointmentDialog>
              <a href="https://wa.me/971547371109" className="inline-flex items-center justify-center h-14 px-8 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full font-bold transition-all">
                WhatsApp Us
              </a>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full font-bold" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </MainLayout>
  );
}
