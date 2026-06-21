import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { AlertCircle, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Emergency() {
  useEffect(() => {
    document.title = "Emergency Vet Dubai | 24/7 Pet Emergency | Pawbulance";
  }, []);

  return (
    <MainLayout>
      <div className="bg-white border-b border-red-100 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-[#1F2937] mb-6">
            Pet Emergency?
          </h1>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed">
            Stay calm. If your pet requires immediate medical attention, call us right away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="h-16 px-10 text-xl bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg shadow-red-500/30 animate-pulse" asChild>
              <a href="tel:+971547371109">
                <Phone className="mr-3 w-6 h-6" />
                Call +971 54 737 1109
              </a>
            </Button>
            <Button size="lg" className="h-16 px-10 text-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-full shadow-lg shadow-green-500/30" asChild>
              <a href="https://wa.me/971547371109">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-serif font-bold text-[#1F2937]">When to seek emergency care</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-slate-100 p-10 rounded-[2rem] shadow-sm">
              <h3 className="font-bold text-xl text-red-500 mb-6 flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div> Critical Symptoms
              </h3>
              <ul className="space-y-4">
                {[
                  "Difficulty breathing or continuous coughing",
                  "Collapse or profound weakness",
                  "Seizures or neurological issues",
                  "Bleeding that won't stop",
                  "Suspected poisoning or toxin ingestion",
                  "Inability to urinate (especially male cats)",
                  "Severe vomiting or diarrhea",
                  "Trauma (hit by car, fall from height)"
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#1F2937] font-medium">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5 text-red-500 text-xs font-bold">{i+1}</div>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white border border-slate-100 p-10 rounded-[2rem] shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-[#3BA9F5]" />
                  </div>
                  <h3 className="font-bold text-xl text-[#1F2937]">Location & Access</h3>
                </div>
                <p className="text-[#64748B] mb-4 text-lg">
                  Amwaj 2, Al Mamsha Street, Jumeirah Beach Residence (JBR), Dubai.
                </p>
                <p className="text-sm font-medium text-[#1F2937] bg-blue-50 p-4 rounded-xl">
                  When you arrive, our team will immediately triage your pet to assess the severity of the situation.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-10 rounded-[2rem] shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-xl text-[#1F2937]">Outside Hours</h3>
                </div>
                <p className="text-[#64748B] leading-relaxed">
                  If you have an emergency outside our standard operating hours or on Tuesdays, please contact our emergency line or WhatsApp for immediate guidance to our partner 24/7 facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
