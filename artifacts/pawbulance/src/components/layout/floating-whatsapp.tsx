import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971547371109"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-40"></span>
      <MessageCircle className="w-7 h-7 relative z-10" />
      
      <div className="absolute right-full mr-4 bg-white border border-slate-100 text-[#1F2937] px-4 py-2 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm font-medium">
        Need help? Chat with us!
      </div>
    </a>
  );
}
