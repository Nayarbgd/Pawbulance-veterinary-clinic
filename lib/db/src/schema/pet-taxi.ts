import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const petTaxiBookingsTable = pgTable("pet_taxi_bookings", {
  id: serial("id").primaryKey(),
  ownerName: text("owner_name").notNull(),
  ownerEmail: text("owner_email").notNull(),
  ownerPhone: text("owner_phone").notNull(),
  petName: text("pet_name").notNull(),
  petType: text("pet_type").notNull(),
  petBreed: text("pet_breed"),
  pickupAddress: text("pickup_address").notNull(),
  dropoffAddress: text("dropoff_address").notNull(),
  pickupDate: text("pickup_date").notNull(),
  pickupTime: text("pickup_time"),
  notes: text("notes"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertPetTaxiBookingSchema = createInsertSchema(petTaxiBookingsTable).omit({ id: true, createdAt: true });
export type InsertPetTaxiBooking = z.infer<typeof insertPetTaxiBookingSchema>;
export type PetTaxiBooking = typeof petTaxiBookingsTable.$inferSelect;
