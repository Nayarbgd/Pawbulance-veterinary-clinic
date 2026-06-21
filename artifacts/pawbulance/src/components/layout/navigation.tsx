import { Link, useLocation } from "wouter";
import { Phone, Menu, X, PawPrint } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/forms/appointment-dialog";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm"
          : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#3BA9F5]/10 flex items-center justify-center group-hover:bg-[#3BA9F5]/20 transition-colors">
              <PawPrint className="w-5 h-5 text-[#3BA9F5]" />
            </div>
            <span className="font-serif text-xl font-bold text-[#1F2937]">Pawbulance</span>
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
            <a
              href="tel:+971547371109"
              className="flex items-center gap-2 border border-[#3BA9F5] text-[#3BA9F5] hover:bg-blue-50 transition-colors rounded-full px-5 py-2 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <AppointmentDialog>
              <Button className="bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full px-6 py-2 transition-colors shadow-sm">
                Book Now
              </Button>
            </AppointmentDialog>
          </div>

          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl text-[#1F2937] hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-height overlay */}
      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="lg:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-50 shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <PawPrint className="w-5 h-5 text-[#3BA9F5]" />
                <span className="font-serif text-lg font-bold text-[#1F2937]">Pawbulance</span>
              </Link>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-xl text-[#1F2937] hover:bg-slate-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col px-4 py-4 gap-1 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium px-4 py-3.5 rounded-xl transition-colors ${
                    location === link.href
                      ? "bg-blue-50 text-[#3BA9F5] font-semibold"
                      : "text-[#1F2937] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-4 pb-8 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+971547371109"
                className="flex items-center justify-center gap-2 h-12 border-2 border-[#3BA9F5] text-[#3BA9F5] rounded-full font-semibold transition-colors hover:bg-blue-50"
              >
                <Phone className="w-4 h-4" />
                +971 54 737 1109
              </a>
              <AppointmentDialog>
                <Button className="w-full h-12 bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-full shadow-sm font-semibold">
                  Book Appointment
                </Button>
              </AppointmentDialog>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
