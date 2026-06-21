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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
        className="w-8 h-8 relative z-10"
        fill="white"
      >
        <path d="M87.6 0C39.3 0 0 39.3 0 87.6c0 15.3 4 30.3 11.5 43.4L.4 175.6l46-11.9c12.6 6.9 26.9 10.5 41.2 10.5 48.3 0 87.6-39.3 87.6-87.6S135.9 0 87.6 0zm0 160.1c-13.2 0-26.1-3.6-37.3-10.3l-2.7-1.6-27.3 7.1 7.3-26.5-1.7-2.8C18.9 114.9 15 101.4 15 87.6 15 47.5 47.5 15 87.6 15c19.4 0 37.6 7.5 51.3 21.2 13.7 13.7 21.2 31.9 21.2 51.3 0 40.1-32.5 72.6-72.5 72.6zm39.8-54.4c-2.2-1.1-12.9-6.4-14.9-7.1-2-.7-3.4-1.1-4.9 1.1-1.4 2.2-5.6 7.1-6.9 8.5-1.3 1.4-2.5 1.6-4.7.5-2.2-1.1-9.2-3.4-17.5-10.8-6.5-5.8-10.8-12.9-12.1-15.1-1.3-2.2-.1-3.3 1-4.4.9-.9 2.2-2.5 3.2-3.7 1.1-1.3 1.4-2.2.2-4.4-1.3-2.2-4.9-11.7-6.7-16.1-1.7-4.2-3.5-3.6-4.9-3.7-1.3-.1-2.7-.1-4.1-.1-1.4 0-3.7.5-5.7 2.7-2 2.2-7.5 7.3-7.5 17.8s7.7 20.7 8.7 22.1c1.1 1.4 15.1 23 36.7 32.3 5.1 2.2 9.1 3.5 12.2 4.5 5.1 1.6 9.8 1.4 13.5.9 4.1-.6 12.9-5.3 14.7-10.3 1.8-5 1.8-9.3 1.3-10.2-.6-1-2-1.5-4.1-2.6z" />
      </svg>

      <div className="absolute right-full mr-4 bg-white border border-slate-100 text-[#1F2937] px-4 py-2 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm font-medium">
        Need help? Chat with us!
      </div>
    </a>
  );
}
