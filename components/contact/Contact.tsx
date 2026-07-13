"use client";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}

        <div className="mb-16">
          <p className="uppercase tracking-widest text-blue-500 font-semibold">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's build something <span className="text-blue-500">amazing</span>{" "}
            together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl">
            I'm currently open to full-time opportunities, freelance projects,
            and collaborations. Feel free to reach out anytime.
          </p>
        </div>

        {/* Two Column Layout */}

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
