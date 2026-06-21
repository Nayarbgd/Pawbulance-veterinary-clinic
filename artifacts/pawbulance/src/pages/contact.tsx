import { useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Pawbulance | Vet Clinic JBR Dubai";
  }, []);

  const { toast } = useToast();
  const submitContact = useSubmitContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitContact.mutate({ data: values }, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you shortly.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or contact us via WhatsApp.",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <MainLayout>
      <div className="bg-white container mx-auto px-4 sm:px-6 py-14 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold mb-4 text-[#1F2937]">Get in Touch</h1>
          <p className="text-lg text-[#64748B]">
            Have a question or want to schedule a visit? We're here to help. Reach out to us via phone, WhatsApp, or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white shadow-sm border border-slate-100 p-6 md:p-10 rounded-2xl md:rounded-[2rem]">
              <h2 className="font-serif text-2xl font-bold mb-6 text-[#1F2937]">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-[#3BA9F5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2937] text-lg">Clinic Address</h3>
                    <p className="text-[#64748B] mt-2 leading-relaxed">
                      Amwaj 2, Al Mamsha Street<br />
                      Jumeirah Beach Residence (JBR)<br />
                      Dubai, UAE
                    </p>
                    <Button variant="link" className="px-0 mt-2 font-bold text-[#3BA9F5]" asChild>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-[#3BA9F5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2937] text-lg">Phone & WhatsApp</h3>
                    <p className="text-[#64748B] mt-2 space-y-2">
                      <a href="tel:+971547371109" className="font-medium hover:text-[#3BA9F5] transition-colors block">+971 54 737 1109</a>
                      <a href="https://wa.me/971547371109" className="font-bold text-[#25D366] hover:underline block">Chat on WhatsApp</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-[#3BA9F5]" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-[#1F2937] text-lg mb-4">Opening Hours</h3>
                    <ul className="space-y-3 text-sm text-[#64748B] w-full max-w-[300px]">
                      <li className="flex justify-between font-medium"><span>Monday</span><span>9:30 AM – 6:30 PM</span></li>
                      <li className="flex justify-between text-red-500 font-bold border-y border-slate-100 py-2"><span>Tuesday</span><span>CLOSED</span></li>
                      <li className="flex justify-between font-medium"><span>Wednesday</span><span>9:30 AM – 6:00 PM</span></li>
                      <li className="flex justify-between font-medium"><span>Thu - Sun</span><span>9:30 AM – 6:30 PM</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-[300px] bg-[#EAF7FF] rounded-[2rem] overflow-hidden relative border border-blue-100">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-[#3BA9F5]">
                <MapPin className="w-10 h-10 mb-3" />
                <span className="font-bold">Map Area Location</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-sm border border-slate-100 p-6 md:p-10 rounded-2xl md:rounded-[2rem] h-fit">
            <h2 className="font-serif text-2xl font-bold mb-6 text-[#1F2937]">Send us a message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1F2937] font-semibold">Your Name</FormLabel>
                      <FormControl>
                        <Input className="rounded-xl border-slate-200 focus:border-[#3BA9F5] h-12" placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1F2937] font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input className="rounded-xl border-slate-200 focus:border-[#3BA9F5] h-12" type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1F2937] font-semibold">Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input className="rounded-xl border-slate-200 focus:border-[#3BA9F5] h-12" placeholder="+971 50 000 0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1F2937] font-semibold">Subject</FormLabel>
                      <FormControl>
                        <Input className="rounded-xl border-slate-200 focus:border-[#3BA9F5] h-12" placeholder="How can we help?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1F2937] font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message here..." 
                          className="min-h-[150px] resize-none rounded-xl border-slate-200 focus:border-[#3BA9F5]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-14 bg-[#3BA9F5] hover:bg-[#2D96E5] rounded-xl font-bold text-white text-lg shadow-sm"
                  disabled={submitContact.isPending}
                >
                  {submitContact.isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
