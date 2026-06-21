import { Router } from "express";
import { db, appointmentsTable, petTaxiBookingsTable, contactLeadsTable } from "@workspace/db";
import { eq, count, desc } from "drizzle-orm";

const router = Router();

router.get("/stats", async (req, res) => {
  try {
    const [totalAppts] = await db.select({ count: count() }).from(appointmentsTable);
    const [pendingAppts] = await db
      .select({ count: count() })
      .from(appointmentsTable)
      .where(eq(appointmentsTable.status, "pending"));
    const [confirmedAppts] = await db
      .select({ count: count() })
      .from(appointmentsTable)
      .where(eq(appointmentsTable.status, "confirmed"));

    const [totalTaxi] = await db.select({ count: count() }).from(petTaxiBookingsTable);
    const [pendingTaxi] = await db
      .select({ count: count() })
      .from(petTaxiBookingsTable)
      .where(eq(petTaxiBookingsTable.status, "pending"));
    const [confirmedTaxi] = await db
      .select({ count: count() })
      .from(petTaxiBookingsTable)
      .where(eq(petTaxiBookingsTable.status, "confirmed"));

    const [totalContacts] = await db.select({ count: count() }).from(contactLeadsTable);

    const recentAppointments = await db
      .select()
      .from(appointmentsTable)
      .orderBy(desc(appointmentsTable.createdAt))
      .limit(5);

    const recentPetTaxiBookings = await db
      .select()
      .from(petTaxiBookingsTable)
      .orderBy(desc(petTaxiBookingsTable.createdAt))
      .limit(5);

    res.json({
      totalAppointments: Number(totalAppts.count),
      pendingAppointments: Number(pendingAppts.count),
      confirmedAppointments: Number(confirmedAppts.count),
      totalPetTaxiBookings: Number(totalTaxi.count),
      pendingPetTaxiBookings: Number(pendingTaxi.count),
      confirmedPetTaxiBookings: Number(confirmedTaxi.count),
      totalContactLeads: Number(totalContacts.count),
      recentAppointments: recentAppointments.map((r) => ({
        ...r,
        createdAt: r.createdAt.toISOString(),
      })),
      recentPetTaxiBookings: recentPetTaxiBookings.map((r) => ({
        ...r,
        createdAt: r.createdAt.toISOString(),
      })),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to get admin stats");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
