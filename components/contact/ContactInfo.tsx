"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 sm:h-14 sm:w-14">
            <Mail className="h-5 w-5 text-blue-500 sm:h-6 sm:w-6" />
          </div>

          <div className="min-w-0">
            <p className="text-sm text-gray-400">Email</p>
            <a
              href="mailto:shubhamdhaundiyal789@gmail.com"
              className="break-all text-base font-medium transition hover:text-blue-500 sm:text-lg"
            >
              shubhamdhaundiyal789@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/20 sm:h-14 sm:w-14">
            <Phone className="h-5 w-5 text-green-500 sm:h-6 sm:w-6" />
          </div>

          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <a
              href="tel:+919837601562"
              className="text-base font-medium transition hover:text-green-500 sm:text-lg"
            >
              +91 9837601562
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 sm:h-14 sm:w-14">
            <MapPin className="h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />
          </div>

          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="text-base sm:text-lg">Noida, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>

      {/* Social Cards */}
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {/* GitHub */}
        <a
          href="https://github.com/shubhamdhaundiyal123"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/10 bg-[#111827] p-4 text-center transition hover:border-blue-500 sm:p-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
            className="mx-auto mb-3 text-white sm:h-8 sm:w-8"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.57v-2.16c-3.2.7-3.88-1.55-3.88-1.55-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.17a10.94 10.94 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.59.23 2.77.11 3.06.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>

          <h3 className="font-semibold">GitHub</h3>
          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            View my projects
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shubham-dhaundiyal-242617188"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/10 bg-[#111827] p-4 text-center transition hover:border-blue-500 sm:p-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
            className="mx-auto mb-3 text-blue-500 sm:h-8 sm:w-8"
          >
            <path d="M4.98 3.5A2.49 2.49 0 1 1 0 3.5a2.49 2.49 0 0 1 4.98 0ZM.5 8h4V24h-4V8Zm7 0h3.84v2.18h.06c.53-1.01 1.84-2.08 3.79-2.08C19.29 8.1 21 10.16 21 14.05V24h-4v-8.25c0-1.97-.03-4.5-2.74-4.5-2.74 0-3.16 2.14-3.16 4.35V24h-4V8Z" />
          </svg>

          <h3 className="font-semibold">LinkedIn</h3>
          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Connect with me
          </p>
        </a>
      </div>

      {/* Availability */}
      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
          <h3 className="font-semibold text-green-400">Available for Work</h3>
        </div>

        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
          I'm actively looking for MERN Full Stack Developer opportunities where
          I can contribute to scalable enterprise applications and continue
          growing as an engineer.
        </p>
      </div>
    </div>
  );
}
