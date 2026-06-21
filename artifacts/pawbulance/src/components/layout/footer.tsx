import { Link } from "wouter";
import { PawPrint, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <PawPrint className="w-8 h-8 text-primary" />
              <span className="font-serif text-2xl font-bold">Pawbulance</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dubai's premium veterinary clinic and pet taxi service. We treat your pets as family, providing world-class care in a luxurious environment.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Our Services", href: "/services" },
                { label: "Pet Taxi", href: "/pet-taxi" },
                { label: "About Us", href: "/about" },
                { label: "Testimonials", href: "/reviews" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Amwaj 2, Al Mamsha Street, Jumeirah Beach Residence (JBR), Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+971547371109" className="text-sm hover:text-primary transition-colors">+971 54 737 1109</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@pawbulance.ae" className="text-sm hover:text-primary transition-colors">hello@pawbulance.ae</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between items-center pb-2 border-b border-border/50">
                <span>Monday</span>
                <span>9:30 AM – 6:30 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-border/50 text-destructive">
                <span>Tuesday</span>
                <span>CLOSED</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-border/50">
                <span>Wednesday</span>
                <span>9:30 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-border/50">
                <span>Thu - Sun</span>
                <span>9:30 AM – 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pawbulance Veterinary Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}