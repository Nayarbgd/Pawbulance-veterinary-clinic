import { useEffect, useState } from "react";
import { 
  useGetAdminStats, 
  useListAppointments, 
  useListPetTaxiBookings, 
  useListContactLeads,
  useUpdateAppointment,
  useUpdatePetTaxiBooking
} from "@workspace/api-client-react";
import { Link } from "wouter";
import { format } from "date-fns";
import { 
  PawPrint, Users, Calendar, Car, MessageSquare, 
  Search, Loader2, LogOut, CheckCircle2, XCircle, Clock
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export default function AdminDashboard() {
  useEffect(() => {
    document.title = "Admin Dashboard | Pawbulance";
  }, []);

  const [activeTab, setActiveTab] = useState("appointments");
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: stats, isLoading: statsLoading } = useGetAdminStats();
  const { data: appointments, isLoading: apptsLoading } = useListAppointments();
  const { data: petTaxis, isLoading: taxiLoading } = useListPetTaxiBookings();
  const { data: leads, isLoading: leadsLoading } = useListContactLeads();

  const updateAppointment = useUpdateAppointment();
  const updateTaxi = useUpdatePetTaxiBooking();

  const handleUpdateApptStatus = (id: number, status: string) => {
    updateAppointment.mutate(
      { id, data: { status: status as any } },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
          queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
          toast({ title: "Status updated" });
        }
      }
    );
  };

  const handleUpdateTaxiStatus = (id: number, status: string) => {
    updateTaxi.mutate(
      { id, data: { status: status as any } },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["/api/pet-taxi"] });
          queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
          toast({ title: "Status updated" });
        }
      }
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending": return <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20"><Clock className="w-3 h-3 mr-1"/> Pending</Badge>;
      case "confirmed": return <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20"><CheckCircle2 className="w-3 h-3 mr-1"/> Confirmed</Badge>;
      case "completed": return <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20"><CheckCircle2 className="w-3 h-3 mr-1"/> Completed</Badge>;
      case "cancelled": return <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20"><XCircle className="w-3 h-3 mr-1"/> Cancelled</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  if (statsLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row dark">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-card border-r border-border shrink-0 flex flex-col">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80">
            <PawPrint className="w-6 h-6" />
            <span className="font-serif text-xl font-bold">Admin Panel</span>
          </Link>
        </div>
        <div className="p-4 flex-1">
          <nav className="space-y-2">
            {[
              { id: "appointments", icon: Calendar, label: "Appointments" },
              { id: "pet-taxi", icon: Car, label: "Pet Taxi" },
              { id: "leads", icon: MessageSquare, label: "Contact Leads" },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
            <Link href="/">
              <LogOut className="w-5 h-5 mr-2" />
              Back to Site
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-foreground">Dashboard Overview</h1>
            <p className="text-muted-foreground mt-2">Manage clinic operations and requests.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-card border border-border p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Total Appointments</p>
                  <p className="text-2xl font-bold">{stats?.totalAppointments || 0}</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Pet Taxi Bookings</p>
                  <p className="text-2xl font-bold">{stats?.totalPetTaxiBookings || 0}</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Pending Requests</p>
                  <p className="text-2xl font-bold">{(stats?.pendingAppointments || 0) + (stats?.pendingPetTaxiBookings || 0)}</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Contact Leads</p>
                  <p className="text-2xl font-bold">{stats?.totalContactLeads || 0}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            {activeTab === "appointments" && (
              <div>
                <div className="p-6 border-b border-border flex justify-between items-center bg-muted/20">
                  <h2 className="text-xl font-bold">Appointments</h2>
                  <div className="relative w-64">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-9 bg-background" />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted text-muted-foreground text-xs uppercase font-semibold">
                      <tr>
                        <th className="px-6 py-4">Client & Pet</th>
                        <th className="px-6 py-4">Service</th>
                        <th className="px-6 py-4">Date & Time</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {apptsLoading ? (
                        <tr><td colSpan={5} className="text-center py-8"><Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" /></td></tr>
                      ) : appointments?.length === 0 ? (
                        <tr><td colSpan={5} className="text-center py-8 text-muted-foreground">No appointments found.</td></tr>
                      ) : (
                        appointments?.map((appt) => (
                          <tr key={appt.id} className="hover:bg-muted/30">
                            <td className="px-6 py-4">
                              <p className="font-bold text-foreground">{appt.ownerName}</p>
                              <p className="text-muted-foreground text-xs">{appt.petName} ({appt.petType})</p>
                              <p className="text-muted-foreground text-xs mt-1">{appt.ownerPhone}</p>
                            </td>
                            <td className="px-6 py-4 font-medium">{appt.serviceType}</td>
                            <td className="px-6 py-4">
                              <p>{format(new Date(appt.preferredDate), "MMM d, yyyy")}</p>
                              <p className="text-muted-foreground">{appt.preferredTime || "Any time"}</p>
                            </td>
                            <td className="px-6 py-4">{getStatusBadge(appt.status)}</td>
                            <td className="px-6 py-4 text-right">
                              <Select defaultValue={appt.status} onValueChange={(val) => handleUpdateApptStatus(appt.id, val)}>
                                <SelectTrigger className="w-[130px] ml-auto h-8 text-xs">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">Pending</SelectItem>
                                  <SelectItem value="confirmed">Confirmed</SelectItem>
                                  <SelectItem value="completed">Completed</SelectItem>
                                  <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                              </Select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "pet-taxi" && (
              <div>
                <div className="p-6 border-b border-border flex justify-between items-center bg-muted/20">
                  <h2 className="text-xl font-bold">Pet Taxi Bookings</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted text-muted-foreground text-xs uppercase font-semibold">
                      <tr>
                        <th className="px-6 py-4">Client & Pet</th>
                        <th className="px-6 py-4">Route</th>
                        <th className="px-6 py-4">Date & Time</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {taxiLoading ? (
                        <tr><td colSpan={5} className="text-center py-8"><Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" /></td></tr>
                      ) : petTaxis?.length === 0 ? (
                        <tr><td colSpan={5} className="text-center py-8 text-muted-foreground">No bookings found.</td></tr>
                      ) : (
                        petTaxis?.map((taxi) => (
                          <tr key={taxi.id} className="hover:bg-muted/30">
                            <td className="px-6 py-4">
                              <p className="font-bold text-foreground">{taxi.ownerName}</p>
                              <p className="text-muted-foreground text-xs">{taxi.petName} ({taxi.petType})</p>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-col gap-1 max-w-[200px]">
                                <span className="text-xs text-muted-foreground truncate" title={taxi.pickupAddress}>From: {taxi.pickupAddress}</span>
                                <span className="text-xs text-muted-foreground truncate" title={taxi.dropoffAddress}>To: {taxi.dropoffAddress}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <p>{format(new Date(taxi.pickupDate), "MMM d, yyyy")}</p>
                              <p className="text-muted-foreground">{taxi.pickupTime || "Any time"}</p>
                            </td>
                            <td className="px-6 py-4">{getStatusBadge(taxi.status)}</td>
                            <td className="px-6 py-4 text-right">
                              <Select defaultValue={taxi.status} onValueChange={(val) => handleUpdateTaxiStatus(taxi.id, val)}>
                                <SelectTrigger className="w-[130px] ml-auto h-8 text-xs">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">Pending</SelectItem>
                                  <SelectItem value="confirmed">Confirmed</SelectItem>
                                  <SelectItem value="completed">Completed</SelectItem>
                                  <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                              </Select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "leads" && (
              <div>
                <div className="p-6 border-b border-border flex justify-between items-center bg-muted/20">
                  <h2 className="text-xl font-bold">Contact Leads</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted text-muted-foreground text-xs uppercase font-semibold">
                      <tr>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Name & Contact</th>
                        <th className="px-6 py-4">Subject</th>
                        <th className="px-6 py-4">Message</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {leadsLoading ? (
                        <tr><td colSpan={4} className="text-center py-8"><Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" /></td></tr>
                      ) : leads?.length === 0 ? (
                        <tr><td colSpan={4} className="text-center py-8 text-muted-foreground">No leads found.</td></tr>
                      ) : (
                        leads?.map((lead) => (
                          <tr key={lead.id} className="hover:bg-muted/30">
                            <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                              {format(new Date(lead.createdAt), "MMM d, yyyy HH:mm")}
                            </td>
                            <td className="px-6 py-4">
                              <p className="font-bold text-foreground">{lead.name}</p>
                              <p className="text-xs text-primary"><a href={`mailto:${lead.email}`}>{lead.email}</a></p>
                              {lead.phone && <p className="text-xs text-muted-foreground mt-0.5">{lead.phone}</p>}
                            </td>
                            <td className="px-6 py-4 font-medium">{lead.subject}</td>
                            <td className="px-6 py-4">
                              <p className="text-muted-foreground line-clamp-2 max-w-md" title={lead.message}>
                                {lead.message}
                              </p>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}