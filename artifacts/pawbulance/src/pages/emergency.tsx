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
      <div className="bg-destructive/10 border-b border-destructive/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Pet Emergency?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay calm. If your pet requires immediate medical attention, call us right away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-16 px-10 text-xl bg-destructive hover:bg-destructive/90 text-destructive-foreground animate-pulse" asChild>
              <a href="tel:+971547371109">
                <Phone className="mr-3 w-6 h-6" />
                Call +971 54 737 1109
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-border" asChild>
              <a href="https://wa.me/971547371109">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8">When to seek emergency care</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card border border-border p-6 rounded-2xl">
              <h3 className="font-bold text-lg text-destructive mb-4">Critical Symptoms</h3>
              <ul className="space-y-3">
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
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg">Location & Access</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Amwaj 2, Al Mamsha Street, Jumeirah Beach Residence (JBR), Dubai.
                </p>
                <p className="text-sm text-foreground/80">
                  When you arrive, our team will immediately triage your pet to assess the severity of the situation.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg">Outside Hours</h3>
                </div>
                <p className="text-muted-foreground">
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