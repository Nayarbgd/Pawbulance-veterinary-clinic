import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/971547371109"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg group outline-none focus:outline-none"
      aria-label="Chat with us on WhatsApp"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <FaWhatsapp className="w-8 h-8 relative z-10" />

      <div className="absolute right-full mr-4 bg-white border border-slate-100 text-[#1F2937] px-4 py-2 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm font-medium">
        Need help? Chat with us!
      </div>
    </motion.a>
  );
}
