import { Link } from "wouter";
import { PawPrint, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <PawPrint className="w-8 h-8 text-[#3BA9F5]" />
              <span className="font-serif text-2xl font-bold text-[#1F2937]">Pawbulance</span>
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
              Dubai's premium veterinary clinic and pet taxi service in JBR. We treat your pets as family, providing world-class care in a warm, approachable environment.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/pawbulance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pawbulance on Instagram"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#64748B] hover:text-[#3BA9F5] hover:border-[#3BA9F5] transition-colors shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/pawbulance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pawbulance on Facebook"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#64748B] hover:text-[#3BA9F5] hover:border-[#3BA9F5] transition-colors shadow-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold mb-5 text-[#1F2937] uppercase tracking-wide">Pages</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "All Services", href: "/services" },
                { label: "Pet Taxi", href: "/pet-taxi" },
                { label: "About Us", href: "/about" },
                { label: "Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
                { label: "Emergency", href: "/emergency" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#64748B] hover:text-[#3BA9F5] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-bold mb-5 text-[#1F2937] uppercase tracking-wide">Services</h3>
            <ul className="space-y-3">
              {[
                { label: "General Consultation", href: "/services/general-consultation" },
                { label: "Vaccinations", href: "/services/vaccinations" },
                { label: "Grooming", href: "/services/grooming" },
                { label: "Microchipping", href: "/services/microchipping" },
                { label: "Diagnostics", href: "/services/diagnostics" },
                { label: "Preventive Care", href: "/services/preventive-care" },
                { label: "Health Certificates", href: "/services/health-certificates" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#64748B] hover:text-[#3BA9F5] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-bold mb-5 text-[#1F2937] uppercase tracking-wide">Contact</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-[#64748B]">
                <MapPin className="w-4 h-4 text-[#3BA9F5] shrink-0 mt-0.5" />
                <span className="text-sm">Amwaj 2, Al Mamsha Street,<br />JBR, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-[#64748B]">
                <Phone className="w-4 h-4 text-[#3BA9F5] shrink-0" />
                <a href="tel:+971547371109" className="text-sm hover:text-[#3BA9F5] transition-colors">+971 54 737 1109</a>
              </li>
              <li className="flex items-center gap-3 text-[#64748B]">
                <Mail className="w-4 h-4 text-[#3BA9F5] shrink-0" />
                <a href="mailto:hello@pawbulance.ae" className="text-sm hover:text-[#3BA9F5] transition-colors">hello@pawbulance.ae</a>
              </li>
            </ul>
            <div className="text-xs text-[#64748B] space-y-1">
              <p className="font-semibold text-[#1F2937]">Hours</p>
              <p>Mon, Wed–Sun: 9:30 AM – 6:30 PM</p>
              <p className="text-red-500 font-medium">Tuesday: Closed</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#64748B]">
          <p>&copy; {new Date().getFullYear()} Pawbulance Veterinary Clinic, JBR, Dubai. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#3BA9F5] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#3BA9F5] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
