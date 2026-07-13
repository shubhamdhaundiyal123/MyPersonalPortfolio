import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Please enter a valid email"),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters"),

  message: z
    .string()
    .min(15, "Message should be at least 15 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;