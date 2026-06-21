import { Router } from "express";
import { db, contactLeadsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import {
  SubmitContactBody,
  ListContactLeadsQueryParams,
} from "@workspace/api-zod";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const query = ListContactLeadsQueryParams.safeParse(req.query);
    const limit = query.success ? (query.data.limit ?? 50) : 50;
    const offset = query.success ? (query.data.offset ?? 0) : 0;

    const rows = await db
      .select()
      .from(contactLeadsTable)
      .orderBy(desc(contactLeadsTable.createdAt))
      .limit(limit)
      .offset(offset);

    const formatted = rows.map((r) => ({
      ...r,
      createdAt: r.createdAt.toISOString(),
    }));

    res.json(formatted);
  } catch (err) {
    req.log.error({ err }, "Failed to list contact leads");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.message });
  }

  try {
    const [row] = await db
      .insert(contactLeadsTable)
      .values({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone ?? null,
        subject: parsed.data.subject,
        message: parsed.data.message,
      })
      .returning();

    res.status(201).json({ ...row, createdAt: row.createdAt.toISOString() });
  } catch (err) {
    req.log.error({ err }, "Failed to submit contact form");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
