import { Link, useLocation } from "wouter";
import { Phone, Menu, X, PawPrint } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

  const mobileMenu = isOpen
    ? createPortal(
        <>
          {/* Backdrop */}
          <div
            style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.35)" }}
            onClick={() => setIsOpen(false)}
          />
          {/* Drawer panel */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "80%",
              maxWidth: "320px",
              zIndex: 9999,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid #f1f5f9" }}>
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <PawPrint className="w-5 h-5 text-[#3BA9F5]" />
                <span className="font-serif text-lg font-bold text-[#1F2937]">Pawbulance</span>
              </Link>
              <button
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 12, border: "none", background: "transparent", cursor: "pointer" }}
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#1F2937]" />
              </button>
            </div>

            <nav style={{ flex: 1, padding: "8px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "13px 16px",
                    borderRadius: 12,
                    fontWeight: location === link.href ? 700 : 500,
                    fontSize: 16,
                    color: location === link.href ? "#3BA9F5" : "#1F2937",
                    background: location === link.href ? "#EAF7FF" : "transparent",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div style={{ padding: "16px", borderTop: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="tel:+971547371109"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  height: 48, borderRadius: 99, border: "2px solid #3BA9F5",
                  color: "#3BA9F5", fontWeight: 600, fontSize: 15, textDecoration: "none",
                }}
              >
                <Phone className="w-4 h-4" />
                +971 54 737 1109
              </a>
              <AppointmentDialog>
                <button
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "100%", height: 48, borderRadius: 99,
                    background: "#3BA9F5", color: "#fff", fontWeight: 600, fontSize: 15,
                    border: "none", cursor: "pointer",
                  }}
                >
                  Book Appointment
                </button>
              </AppointmentDialog>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

  return (
    <>
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
      </header>

      {mobileMenu}
    </>
  );
}
