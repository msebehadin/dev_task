import { z } from "zod";

export const createUserSchema = z.object({
  id: z.number().min(1, "number must be number"),

  name: z.string().min(1, "Name is required").optional(),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be >= 6 chars"),
  role: z.string().optional(),
});

export const updateUserSchema = createUserSchema.partial().extend({
  id: z.number(),
});

export const createTaskSchema = z.object({
  id: z.number().min(1, "number must be number"),
  title: z.string().min(1, "Title required"),
  description: z.string().optional(),
  status: z.enum(["pending", "in_progress", "completed"]).default("pending"),
  assignedTo: z.preprocess(
    (v) => (v === "" ? null : Number(v)),
    z.number().nullable()
  ),
});

export const updateTaskSchema = createTaskSchema.partial().extend({
  id: z.number(),
});
