import { Router } from "express";
import { db, petTaxiBookingsTable } from "@workspace/db";
import { eq, desc } from "drizzle-orm";
import {
  CreatePetTaxiBookingBody,
  UpdatePetTaxiBookingBody,
  UpdatePetTaxiBookingParams,
  ListPetTaxiBookingsQueryParams,
} from "@workspace/api-zod";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const query = ListPetTaxiBookingsQueryParams.safeParse(req.query);
    const limit = query.success ? (query.data.limit ?? 50) : 50;
    const offset = query.success ? (query.data.offset ?? 0) : 0;

    const rows = await db
      .select()
      .from(petTaxiBookingsTable)
      .orderBy(desc(petTaxiBookingsTable.createdAt))
      .limit(limit)
      .offset(offset);

    const formatted = rows.map((r) => ({
      ...r,
      createdAt: r.createdAt.toISOString(),
    }));

    res.json(formatted);
  } catch (err) {
    req.log.error({ err }, "Failed to list pet taxi bookings");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const parsed = CreatePetTaxiBookingBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.message });
  }

  try {
    const [row] = await db
      .insert(petTaxiBookingsTable)
      .values({
        ownerName: parsed.data.ownerName,
        ownerEmail: parsed.data.ownerEmail,
        ownerPhone: parsed.data.ownerPhone,
        petName: parsed.data.petName,
        petType: parsed.data.petType,
        petBreed: parsed.data.petBreed ?? null,
        pickupAddress: parsed.data.pickupAddress,
        dropoffAddress: parsed.data.dropoffAddress,
        pickupDate: parsed.data.pickupDate,
        pickupTime: parsed.data.pickupTime ?? null,
        notes: parsed.data.notes ?? null,
        status: "pending",
      })
      .returning();

    res.status(201).json({ ...row, createdAt: row.createdAt.toISOString() });
  } catch (err) {
    req.log.error({ err }, "Failed to create pet taxi booking");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/:id", async (req, res) => {
  const params = UpdatePetTaxiBookingParams.safeParse({ id: Number(req.params.id) });
  const body = UpdatePetTaxiBookingBody.safeParse(req.body);

  if (!params.success || !body.success) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const updateData: Record<string, unknown> = {};
    if (body.data.status !== undefined) updateData.status = body.data.status;
    if (body.data.notes !== undefined) updateData.notes = body.data.notes;

    const [row] = await db
      .update(petTaxiBookingsTable)
      .set(updateData)
      .where(eq(petTaxiBookingsTable.id, params.data.id))
      .returning();

    if (!row) return res.status(404).json({ error: "Not found" });

    res.json({ ...row, createdAt: row.createdAt.toISOString() });
  } catch (err) {
    req.log.error({ err }, "Failed to update pet taxi booking");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
