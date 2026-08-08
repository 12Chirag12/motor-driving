import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { contactData } from "@/lib/data";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Ready to learn driving? Contact Mangesh Motor Driving School today."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl bg-[#1E40AF] p-8 text-white md:p-10">
            <h3 className="text-2xl font-bold md:text-3xl">
              Let's Start Your Driving Journey
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-blue-100">
              Get professional driving training, licence assistance,
              insurance and PUC services under one roof.
            </p>

            <div className="mt-8 space-y-6">
              {/* Phone */}
              <a
                href={`tel:${contactData.phone}`}
                className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-blue-200">Call Us</p>
                  <p className="mt-1 font-semibold">
                    {contactData.phone}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contactData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-blue-200">WhatsApp</p>
                  <p className="mt-1 font-semibold">
                    Chat With Us
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <p className="mt-1 font-semibold break-all">
                    {contactData.email}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 rounded-xl p-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-blue-200">Visit Us</p>
                  <p className="mt-1 leading-6 font-semibold">
                    {contactData.address}
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4 rounded-xl p-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-blue-200">
                    Opening Hours
                  </p>
                  <p className="mt-1 font-semibold">
                    {contactData.timings}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
            <h3 className="text-2xl font-bold text-[#1F2937]">
              Send an Enquiry
            </h3>

            <p className="mt-2 text-gray-600">
              Fill in your details and we'll get back to you.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#1F2937]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#1E40AF] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#1F2937]"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#1E40AF] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-[#1F2937]"
                >
                  Service
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#1E40AF] focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="driving-training">
                    Driving Training
                  </option>
                  <option value="driving-license">
                    Driving Licence
                  </option>
                  <option value="insurance">
                    Insurance
                  </option>
                  <option value="puc">
                    PUC
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#1F2937]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you need..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#1E40AF] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <PrimaryButton className="w-full justify-center">
                Send Enquiry
              </PrimaryButton>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex h-80 items-center justify-center bg-blue-50 p-6 text-center">
            <div>
              <MapPin className="mx-auto h-10 w-10 text-[#1E40AF]" />

              <h3 className="mt-4 text-xl font-bold text-[#1F2937]">
                Find Us on Google Maps
              </h3>

              <p className="mt-2 text-gray-600">
                Replace the map link with the actual driving school
                location.
              </p>

              <a
                href={contactData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-xl bg-[#F97316] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}