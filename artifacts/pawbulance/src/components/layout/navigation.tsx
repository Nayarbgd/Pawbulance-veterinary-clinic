import { Link, useLocation } from "wouter";
import { Phone, Menu, X, PawPrint } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
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

            <motion.button
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl text-[#1F2937]"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.88 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(15,23,42,0.45)", backdropFilter: "blur(2px)" }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                key="drawer"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 320, mass: 0.8 }}
                style={{
                  position: "fixed", top: 0, right: 0, bottom: 0,
                  width: "80%", maxWidth: 320, zIndex: 9999,
                  background: "#fff", display: "flex", flexDirection: "column",
                  overflowY: "auto", boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid #f1f5f9" }}>
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <PawPrint className="w-5 h-5 text-[#3BA9F5]" />
                    <span className="font-serif text-lg font-bold text-[#1F2937]">Pawbulance</span>
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 12, border: "none", background: "#f8fafc", cursor: "pointer" }}
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-[#64748B]" />
                  </motion.button>
                </div>

                <nav style={{ flex: 1, padding: "12px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.045, duration: 0.22 }}
                    >
                      <Link
                        href={link.href}
                        style={{
                          display: "block", padding: "13px 16px", borderRadius: 12,
                          fontWeight: location === link.href ? 700 : 500,
                          fontSize: 16, color: location === link.href ? "#3BA9F5" : "#1F2937",
                          background: location === link.href ? "#EAF7FF" : "transparent",
                          textDecoration: "none", transition: "background 0.15s, color 0.15s",
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.22 }}
                  style={{ padding: "16px 16px 32px", borderTop: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 12 }}
                >
                  <a
                    href="tel:+971547371109"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      height: 48, borderRadius: 99, border: "2px solid #3BA9F5",
                      color: "#3BA9F5", fontWeight: 600, fontSize: 15, textDecoration: "none",
                      transition: "background 0.15s",
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
                        border: "none", cursor: "pointer", transition: "background 0.15s",
                      }}
                    >
                      Book Appointment
                    </button>
                  </AppointmentDialog>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
