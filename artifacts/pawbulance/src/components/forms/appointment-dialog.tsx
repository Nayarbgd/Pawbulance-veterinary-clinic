import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateAppointment } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  ownerName: z.string().min(2, "Name is required"),
  ownerEmail: z.string().email("Invalid email"),
  ownerPhone: z.string().min(8, "Phone number is required"),
  petName: z.string().min(1, "Pet name is required"),
  petType: z.string().min(1, "Pet type is required"),
  petBreed: z.string().optional(),
  serviceType: z.string().min(1, "Service type is required"),
  preferredDate: z.string().min(1, "Date is required"),
  preferredTime: z.string().optional(),
  notes: z.string().optional(),
});

interface AppointmentDialogProps {
  children: ReactNode;
}

export function AppointmentDialog({ children }: AppointmentDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const createAppointment = useCreateAppointment();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: "",
      ownerEmail: "",
      ownerPhone: "",
      petName: "",
      petType: "",
      petBreed: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createAppointment.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "Appointment Requested",
            description: "We will contact you shortly to confirm your appointment.",
          });
          setOpen(false);
          form.reset();
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[calc(100vw-32px)] sm:max-w-[500px] max-h-[90svh] overflow-y-auto bg-white rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 border border-slate-100">
        <DialogHeader className="mb-4">
          <DialogTitle className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">Book an Appointment</DialogTitle>
          <DialogDescription className="text-[#64748B] text-base">
            Fill out the form below and we'll get back to you to confirm your visit.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="ownerName"
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
              <FormField
                control={form.control}
                name="ownerPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1F2937] font-semibold">Phone Number</FormLabel>
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
              name="ownerEmail"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="petName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1F2937] font-semibold">Pet's Name</FormLabel>
                    <FormControl>
                      <Input className="rounded-xl border-slate-200 focus:border-[#3BA9F5] h-12" placeholder="Luna" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="petType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1F2937] font-semibold">Pet Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl border-slate-200 focus:border-[#3BA9F5] h-12">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Dog">Dog</SelectItem>
                        <SelectItem value="Cat">Cat</SelectItem>
                        <SelectItem value="Bird">Bird</SelectItem>
                        <SelectItem value="Rabbit">Rabbit</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1F2937] font-semibold">Service Required</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-xl border-slate-200 focus:border-[#3BA9F5] h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="General Consultation">General Consultation</SelectItem>
                      <SelectItem value="Vaccination">Vaccination</SelectItem>
                      <SelectItem value="Wellness Checkup">Wellness Checkup</SelectItem>
                      <SelectItem value="Grooming">Grooming</SelectItem>
                      <SelectItem value="Diagnostics">Diagnostics</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1F2937] font-semibold">Preferred Date</FormLabel>
                    <FormControl>
                      <Input className="rounded-xl border-slate-200 focus:border-[#3BA9F5] h-12" type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1F2937] font-semibold">Preferred Time (Optional)</FormLabel>
                    <FormControl>
                      <Input className="rounded-xl border-slate-200 focus:border-[#3BA9F5] h-12" type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1F2937] font-semibold">Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any specific concerns or symptoms?" 
                      className="resize-none rounded-xl border-slate-200 focus:border-[#3BA9F5]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-14 bg-[#3BA9F5] hover:bg-[#2D96E5] text-white rounded-xl font-bold text-lg shadow-sm"
              disabled={createAppointment.isPending}
            >
              {createAppointment.isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              Request Appointment
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
