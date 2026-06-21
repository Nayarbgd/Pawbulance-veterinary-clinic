import { Link, useLocation } from "wouter";
import { Phone, MapPin, Clock, Menu, X, PawPrint } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pet-taxi", label: "Pet Taxi" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
    { href: "/emergency", label: "Emergency" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm" : "bg-white py-5 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-[#3BA9F5]/10 flex items-center justify-center group-hover:bg-[#3BA9F5]/20 transition-colors">
              <PawPrint className="w-6 h-6 text-[#3BA9F5]" />
            </div>
            <span className="font-serif text-2xl font-bold text-[#1F2937]">Pawbulance</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  location === link.href ? "text-[#3BA9F5]" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+971547371109" className="text-sm font-medium text-slate-700 hover:text-[#3BA9F5] transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +971 54 737 1109
            </a>
            <AppointmentDialog>
              <Button className="bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full px-6 py-2 transition-colors shadow-sm">
                Book Now
              </Button>
            </AppointmentDialog>
          </div>

          <button
            className="lg:hidden text-[#1F2937] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium p-2 rounded-md transition-colors ${
                location === link.href ? "bg-blue-50 text-[#3BA9F5]" : "text-[#1F2937] hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
            <a href="tel:+971547371109" className="flex items-center gap-3 text-[#1F2937] p-2 hover:text-[#3BA9F5] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#3BA9F5]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#3BA9F5]" />
              </div>
              <span className="font-medium">+971 54 737 1109</span>
            </a>
            <AppointmentDialog>
              <Button className="w-full bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full shadow-sm">
                Book Appointment
              </Button>
            </AppointmentDialog>
          </div>
        </div>
      )}
    </header>
  );
}
