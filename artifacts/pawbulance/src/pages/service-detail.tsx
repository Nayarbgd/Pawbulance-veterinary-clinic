import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";
import { getServiceBySlug } from "@/data/services";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = getServiceBySlug(params.slug ?? "");

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      // Update meta description
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", service.metaDescription);

      // Keywords
      let kw = document.querySelector('meta[name="keywords"]');
      if (!kw) {
        kw = document.createElement("meta");
        kw.setAttribute("name", "keywords");
        document.head.appendChild(kw);
      }
      kw.setAttribute("content", service.keywords);
    }
  }, [service]);

  if (!service) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#1F2937] mb-4">Service not found</h1>
            <p className="text-[#64748B] mb-8">This service page doesn't exist yet.</p>
            <Button asChild className="bg-[#3BA9F5] text-white rounded-full px-8">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100 pt-24 pb-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-[#64748B]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#3BA9F5] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-[#3BA9F5] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1F2937] font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F7FBFF] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#3BA9F5] text-sm font-semibold mb-6">
                Pawbulance · JBR, Dubai
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight mb-6">
                {service.heroHeading}
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed mb-8">{service.heroSub}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AppointmentDialog>
                  <Button size="lg" className="h-14 px-8 text-lg bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full shadow-md font-semibold">
                    Book Appointment
                  </Button>
                </AppointmentDialog>
                <a href="https://wa.me/971547371109" className="inline-flex items-center justify-center h-14 px-8 text-lg border-2 border-[#3BA9F5] text-[#3BA9F5] rounded-full hover:bg-blue-50 font-semibold transition-all">
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-sm text-[#64748B]">4.8 stars · 131 reviews · JBR, Dubai</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img src={service.img} alt={service.title} className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-8">{service.whySection.heading}</h2>
            <div className="space-y-5">
              {service.whySection.paragraphs.map((p, i) => (
                <p key={i} className="text-[#64748B] text-lg leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7FBFF]">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-3">What You and Your Pet Get</h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">Every visit to Pawbulance is designed to deliver measurable value for your pet's health.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <CheckCircle className="w-7 h-7 text-[#3BA9F5] mb-4" />
                <h3 className="font-bold text-[#1F2937] mb-2">{b.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-3">How It Works</h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">A clear, simple process from booking to recovery — we make it easy for you and comfortable for your pet.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-blue-100 z-0" />
            {service.process.map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#EAF7FF] border-4 border-white shadow-md flex items-center justify-center mb-4">
                  <span className="text-xl font-extrabold text-[#3BA9F5]">{step.step}</span>
                </div>
                <h3 className="font-bold text-[#1F2937] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#F7FBFF]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#64748B] text-lg">Everything you need to know about {service.title.toLowerCase()} at Pawbulance.</p>
          </motion.div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
              >
                <h3 className="font-bold text-[#1F2937] mb-3 text-base">{faq.q}</h3>
                <p className="text-[#64748B] leading-relaxed text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#3BA9F5] to-[#6CC7FF]">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to book {service.title.toLowerCase()} for your pet?
            </h2>
            <p className="text-blue-50 text-lg mb-10 max-w-xl mx-auto">
              Our team at Pawbulance JBR is ready to help. Book online or reach us instantly on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AppointmentDialog>
                <Button size="lg" className="h-14 px-8 text-lg bg-white text-[#3BA9F5] hover:bg-blue-50 rounded-full font-bold shadow-lg">
                  Book Appointment
                </Button>
              </AppointmentDialog>
              <a href="tel:+971547371109" className="inline-flex items-center justify-center gap-2 h-14 px-8 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full font-bold transition-all">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href="https://wa.me/971547371109" className="inline-flex items-center justify-center h-14 px-8 text-lg border-2 border-white text-white hover:bg-white/10 rounded-full font-bold transition-all">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#64748B] mb-6">Explore our other veterinary services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["general-consultation","vaccinations","grooming","microchipping","preventive-care","diagnostics","dental-care","health-certificates"].filter(s => s !== params.slug).map((s) => (
              <Link key={s} href={`/services/${s}`}
                className="bg-[#F7FBFF] border border-blue-100 text-[#3BA9F5] rounded-full px-5 py-2 text-sm font-semibold hover:bg-blue-50 transition-all capitalize"
              >
                {s.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
