"use client";

import { useState } from "react";

import emailjs from "@emailjs/browser";

import { toast } from "sonner";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, ContactFormData } from "@/lib/contactSchema";
import { Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully 🎉");

      reset();
    } catch (error) {
      toast.error("Unable to send message.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">
      <h2 className="text-3xl font-bold mb-8">Send Message</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}

        <div>
          <input
            {...register("name")}
            placeholder="Your Name"
            className="w-full rounded-xl border border-white/10 bg-[#1F2937] p-4 outline-none focus:border-blue-500"
          />

          {errors.name && (
            <p className="text-red-500 mt-2 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}

        <div>
          <input
            {...register("email")}
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-[#1F2937] p-4 outline-none focus:border-blue-500"
          />

          {errors.email && (
            <p className="text-red-500 mt-2 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}

        <div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="w-full rounded-xl border border-white/10 bg-[#1F2937] p-4 outline-none focus:border-blue-500"
          />

          {errors.subject && (
            <p className="text-red-500 mt-2 text-sm">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}

        <div>
          <textarea
            rows={6}
            {...register("message")}
            placeholder="Your Message"
            className="w-full rounded-xl border border-white/10 bg-[#1F2937] p-4 outline-none focus:border-blue-500"
          />

          {errors.message && (
            <p className="text-red-500 mt-2 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
