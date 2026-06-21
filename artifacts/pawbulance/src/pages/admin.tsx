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
      case "pending": return <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 rounded-full px-3 py-1 font-semibold"><Clock className="w-3 h-3 mr-1.5"/> Pending</Badge>;
      case "confirmed": return <Badge variant="outline" className="bg-blue-50 text-[#3BA9F5] border-blue-200 rounded-full px-3 py-1 font-semibold"><CheckCircle2 className="w-3 h-3 mr-1.5"/> Confirmed</Badge>;
      case "completed": return <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 rounded-full px-3 py-1 font-semibold"><CheckCircle2 className="w-3 h-3 mr-1.5"/> Completed</Badge>;
      case "cancelled": return <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 rounded-full px-3 py-1 font-semibold"><XCircle className="w-3 h-3 mr-1.5"/> Cancelled</Badge>;
      default: return <Badge className="rounded-full px-3 py-1">{status}</Badge>;
    }
  };

  if (statsLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#3BA9F5]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 shrink-0 flex flex-col shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2 text-[#3BA9F5] hover:opacity-80">
            <PawPrint className="w-6 h-6" />
            <span className="font-serif text-xl font-bold text-[#1F2937]">Admin</span>
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
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === item.id 
                    ? "bg-[#3BA9F5] text-white shadow-sm" 
                    : "text-[#64748B] hover:bg-slate-50 hover:text-[#1F2937]"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-slate-100">
          <Button variant="ghost" className="w-full justify-start text-[#64748B] hover:bg-slate-50 rounded-xl" asChild>
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
            <h1 className="text-3xl font-serif font-bold text-[#1F2937]">Overview</h1>
            <p className="text-[#64748B] mt-2 font-medium">Manage clinic operations and requests.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border-t-4 border-t-[#3BA9F5] shadow-sm p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-blue-50 rounded-xl text-[#3BA9F5]">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-[#64748B] font-semibold">Appointments</p>
                  <p className="text-3xl font-bold text-[#1F2937]">{stats?.totalAppointments || 0}</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-t-4 border-t-purple-500 shadow-sm p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-500">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-[#64748B] font-semibold">Pet Taxi Bookings</p>
                  <p className="text-3xl font-bold text-[#1F2937]">{stats?.totalPetTaxiBookings || 0}</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-t-4 border-t-orange-400 shadow-sm p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-orange-50 rounded-xl text-orange-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-[#64748B] font-semibold">Pending Requests</p>
                  <p className="text-3xl font-bold text-[#1F2937]">{(stats?.pendingAppointments || 0) + (stats?.pendingPetTaxiBookings || 0)}</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-t-4 border-t-green-500 shadow-sm p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-green-50 rounded-xl text-green-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-[#64748B] font-semibold">Contact Leads</p>
                  <p className="text-3xl font-bold text-[#1F2937]">{stats?.totalContactLeads || 0}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-slate-100">
            {activeTab === "appointments" && (
              <div>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-[#1F2937]">Appointments</h2>
                  <div className="relative w-64">
                    <Search className="w-4 h-4 absolute left-3 top-3.5 text-[#64748B]" />
                    <Input placeholder="Search..." className="pl-9 bg-[#F8FAFC] border-none rounded-full h-11" />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#F8FAFC] text-[#64748B] text-xs uppercase font-bold tracking-wider">
                      <tr>
                        <th className="px-6 py-5">Client & Pet</th>
                        <th className="px-6 py-5">Service</th>
                        <th className="px-6 py-5">Date & Time</th>
                        <th className="px-6 py-5">Status</th>
                        <th className="px-6 py-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {apptsLoading ? (
                        <tr><td colSpan={5} className="text-center py-12"><Loader2 className="w-8 h-8 animate-spin mx-auto text-[#3BA9F5]" /></td></tr>
                      ) : appointments?.length === 0 ? (
                        <tr><td colSpan={5} className="text-center py-12 text-[#64748B] font-medium">No appointments found.</td></tr>
                      ) : (
                        appointments?.map((appt) => (
                          <tr key={appt.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <p className="font-bold text-[#1F2937] text-base">{appt.ownerName}</p>
                              <p className="text-[#64748B] font-medium mt-0.5">{appt.petName} ({appt.petType})</p>
                              <p className="text-slate-500 text-xs mt-1">{appt.ownerPhone}</p>
                            </td>
                            <td className="px-6 py-4 font-semibold text-[#1F2937]">{appt.serviceType}</td>
                            <td className="px-6 py-4">
                              <p className="font-bold text-[#1F2937]">{format(new Date(appt.preferredDate), "MMM d, yyyy")}</p>
                              <p className="text-[#64748B] font-medium">{appt.preferredTime || "Any time"}</p>
                            </td>
                            <td className="px-6 py-4">{getStatusBadge(appt.status)}</td>
                            <td className="px-6 py-4 text-right">
                              <Select defaultValue={appt.status} onValueChange={(val) => handleUpdateApptStatus(appt.id, val)}>
                                <SelectTrigger className="w-[140px] ml-auto h-10 rounded-xl border-slate-200 focus:border-[#3BA9F5] font-semibold text-[#1F2937]">
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
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-[#1F2937]">Pet Taxi Bookings</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#F8FAFC] text-[#64748B] text-xs uppercase font-bold tracking-wider">
                      <tr>
                        <th className="px-6 py-5">Client & Pet</th>
                        <th className="px-6 py-5">Route</th>
                        <th className="px-6 py-5">Date & Time</th>
                        <th className="px-6 py-5">Status</th>
                        <th className="px-6 py-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {taxiLoading ? (
                        <tr><td colSpan={5} className="text-center py-12"><Loader2 className="w-8 h-8 animate-spin mx-auto text-[#3BA9F5]" /></td></tr>
                      ) : petTaxis?.length === 0 ? (
                        <tr><td colSpan={5} className="text-center py-12 text-[#64748B] font-medium">No bookings found.</td></tr>
                      ) : (
                        petTaxis?.map((taxi) => (
                          <tr key={taxi.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <p className="font-bold text-[#1F2937] text-base">{taxi.ownerName}</p>
                              <p className="text-[#64748B] font-medium mt-0.5">{taxi.petName} ({taxi.petType})</p>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-col gap-1.5 max-w-[250px]">
                                <span className="text-xs text-slate-500 font-medium truncate bg-slate-100 px-2 py-1 rounded" title={taxi.pickupAddress}>A: {taxi.pickupAddress}</span>
                                <span className="text-xs text-slate-500 font-medium truncate bg-slate-100 px-2 py-1 rounded" title={taxi.dropoffAddress}>B: {taxi.dropoffAddress}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <p className="font-bold text-[#1F2937]">{format(new Date(taxi.pickupDate), "MMM d, yyyy")}</p>
                              <p className="text-[#64748B] font-medium">{taxi.pickupTime || "Any time"}</p>
                            </td>
                            <td className="px-6 py-4">{getStatusBadge(taxi.status)}</td>
                            <td className="px-6 py-4 text-right">
                              <Select defaultValue={taxi.status} onValueChange={(val) => handleUpdateTaxiStatus(taxi.id, val)}>
                                <SelectTrigger className="w-[140px] ml-auto h-10 rounded-xl border-slate-200 focus:border-[#3BA9F5] font-semibold text-[#1F2937]">
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
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-[#1F2937]">Contact Leads</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#F8FAFC] text-[#64748B] text-xs uppercase font-bold tracking-wider">
                      <tr>
                        <th className="px-6 py-5">Date</th>
                        <th className="px-6 py-5">Name & Contact</th>
                        <th className="px-6 py-5">Subject</th>
                        <th className="px-6 py-5">Message</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {leadsLoading ? (
                        <tr><td colSpan={4} className="text-center py-12"><Loader2 className="w-8 h-8 animate-spin mx-auto text-[#3BA9F5]" /></td></tr>
                      ) : leads?.length === 0 ? (
                        <tr><td colSpan={4} className="text-center py-12 text-[#64748B] font-medium">No leads found.</td></tr>
                      ) : (
                        leads?.map((lead) => (
                          <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-[#64748B] font-medium">
                              {format(new Date(lead.createdAt), "MMM d, yyyy HH:mm")}
                            </td>
                            <td className="px-6 py-4">
                              <p className="font-bold text-[#1F2937] text-base">{lead.name}</p>
                              <p className="text-sm font-medium text-[#3BA9F5] mt-0.5"><a href={`mailto:${lead.email}`}>{lead.email}</a></p>
                              {lead.phone && <p className="text-xs text-slate-500 font-medium mt-1 bg-slate-100 inline-block px-2 py-0.5 rounded">{lead.phone}</p>}
                            </td>
                            <td className="px-6 py-4 font-bold text-[#1F2937]">{lead.subject}</td>
                            <td className="px-6 py-4">
                              <p className="text-[#64748B] line-clamp-2 max-w-md font-medium leading-relaxed" title={lead.message}>
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
