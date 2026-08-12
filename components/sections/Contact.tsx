"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

import Container from "@/components/shared/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactData } from "@/lib/data";

type FormErrors = { name?: string; phone?: string; service?: string };

const fieldClass = "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition placeholder:text-slate-400 focus:border-[#1E40AF] focus:ring-3 focus:ring-blue-100";

export default function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Please enter a valid phone number.";
    if (!service) nextErrors.service = "Please select a service.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const enquiry = [
      "Hello Mangesh Motor Driving School,",
      `My name is ${name}.`,
      `Phone: ${phone}`,
      `I am interested in: ${service}.`,
      message ? `Message: ${message}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(enquiry)}`, "_blank", "noopener,noreferrer");
  }

  const contactItems = [
    { label: "Call Us", value: contactData.phone, href: `tel:${contactData.phone.replace(/\s/g, "")}`, icon: Phone },
    { label: "WhatsApp", value: "Chat with our team", href: `https://wa.me/${contactData.whatsapp}`, icon: MessageCircle, external: true },
    { label: "Email", value: contactData.email, href: `mailto:${contactData.email}`, icon: Mail },
  ];

  return (
    <section id="contact" className="bg-white py-16 lg:py-20">
      <Container>
        <SectionHeading eyebrow="Contact Us" title="Ready to start driving?" subtitle="Speak with our team about driving lessons, licence assistance, insurance or PUC services." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-2xl bg-[#1E40AF] text-white shadow-sm">
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold">Let’s plan your next step</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-blue-100">Call, message or visit us in Palghar. We’ll help you choose the right training or vehicle service.</p>
              <div className="mt-7 space-y-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/10">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10"><Icon className="h-5 w-5" /></span>
                      <span className="min-w-0"><span className="block text-xs text-blue-200">{item.label}</span><span className="mt-1 block break-words text-sm font-bold">{item.value}</span></span>
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" /><p className="text-sm leading-6 text-blue-50">{contactData.address}</p></div>
                <div className="mt-4 flex items-start gap-3"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" /><p className="text-sm leading-6 text-blue-50">{contactData.timings}</p></div>
                <a href={contactData.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#FACC15]">Open location in Maps <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-[#1F2937]">Send an enquiry</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Complete the form and continue the conversation securely on WhatsApp.</p>
            <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-[#1F2937]">Your name</label>
                  <input id="name" name="name" autoComplete="name" placeholder="Enter your name" className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
                  {errors.name && <p id="name-error" className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-[#1F2937]">Phone number</label>
                  <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 98765 43210" className={fieldClass} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
                  {errors.phone && <p id="phone-error" className="mt-1.5 text-xs font-medium text-red-600">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-bold text-[#1F2937]">Service</label>
                <select id="service" name="service" defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}>
                  <option value="" disabled>Select a service</option>
                  <option>Driving Training</option><option>Driving Licence</option><option>Insurance</option><option>PUC Certificate</option><option>Other</option>
                </select>
                {errors.service && <p id="service-error" className="mt-1.5 text-xs font-medium text-red-600">{errors.service}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-[#1F2937]">Message <span className="font-normal text-slate-400">(optional)</span></label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us how we can help" className={`${fieldClass} resize-y`} />
              </div>
              <PrimaryButton type="submit" className="w-full sm:w-auto"><Send className="h-4 w-4" /> Send Enquiry on WhatsApp</PrimaryButton>
              <p className="text-xs leading-5 text-slate-500" aria-live="polite">Your details stay in your browser and are only sent when you continue to WhatsApp.</p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
