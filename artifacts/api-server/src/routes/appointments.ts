import { Router } from "express";
import { db, appointmentsTable } from "@workspace/db";
import { eq, desc } from "drizzle-orm";
import {
  CreateAppointmentBody,
  UpdateAppointmentBody,
  GetAppointmentParams,
  UpdateAppointmentParams,
  ListAppointmentsQueryParams,
} from "@workspace/api-zod";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const query = ListAppointmentsQueryParams.safeParse(req.query);
    const limit = query.success ? (query.data.limit ?? 50) : 50;
    const offset = query.success ? (query.data.offset ?? 0) : 0;

    const rows = await db
      .select()
      .from(appointmentsTable)
      .orderBy(desc(appointmentsTable.createdAt))
      .limit(limit)
      .offset(offset);

    const formatted = rows.map((r) => ({
      ...r,
      createdAt: r.createdAt.toISOString(),
    }));

    res.json(formatted);
  } catch (err) {
    req.log.error({ err }, "Failed to list appointments");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const parsed = CreateAppointmentBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.message });
  }

  try {
    const [row] = await db
      .insert(appointmentsTable)
      .values({
        ownerName: parsed.data.ownerName,
        ownerEmail: parsed.data.ownerEmail,
        ownerPhone: parsed.data.ownerPhone,
        petName: parsed.data.petName,
        petType: parsed.data.petType,
        petBreed: parsed.data.petBreed ?? null,
        serviceType: parsed.data.serviceType,
        preferredDate: parsed.data.preferredDate,
        preferredTime: parsed.data.preferredTime ?? null,
        notes: parsed.data.notes ?? null,
        status: "pending",
      })
      .returning();

    res.status(201).json({ ...row, createdAt: row.createdAt.toISOString() });
  } catch (err) {
    req.log.error({ err }, "Failed to create appointment");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const params = GetAppointmentParams.safeParse({ id: Number(req.params.id) });
  if (!params.success) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const [row] = await db
      .select()
      .from(appointmentsTable)
      .where(eq(appointmentsTable.id, params.data.id));

    if (!row) return res.status(404).json({ error: "Not found" });

    res.json({ ...row, createdAt: row.createdAt.toISOString() });
  } catch (err) {
    req.log.error({ err }, "Failed to get appointment");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/:id", async (req, res) => {
  const params = UpdateAppointmentParams.safeParse({ id: Number(req.params.id) });
  const body = UpdateAppointmentBody.safeParse(req.body);

  if (!params.success || !body.success) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const updateData: Record<string, unknown> = {};
    if (body.data.status !== undefined) updateData.status = body.data.status;
    if (body.data.notes !== undefined) updateData.notes = body.data.notes;

    const [row] = await db
      .update(appointmentsTable)
      .set(updateData)
      .where(eq(appointmentsTable.id, params.data.id))
      .returning();

    if (!row) return res.status(404).json({ error: "Not found" });

    res.json({ ...row, createdAt: row.createdAt.toISOString() });
  } catch (err) {
    req.log.error({ err }, "Failed to update appointment");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
