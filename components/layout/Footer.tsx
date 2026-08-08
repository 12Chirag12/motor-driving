import Link from "next/link";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { contactData } from "@/lib/data";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "RTO Services", href: "/rto-services" },
  { name: "Insurance", href: "/insurance" },
  { name: "PUC", href: "/puc" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Driving Training",
  "Driving Licence Assistance",
  "Vehicle Insurance",
  "PUC Certificate",
  "2/3/4 Wheeler Licence",
];

export default function Footer() {
  const phone = contactData?.phone ?? "";
  const email = contactData?.email ?? "";
  const address = contactData?.address ?? "";
  const timings = contactData?.timings ?? "";

  return (
    <footer className="bg-[#1F2937] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E40AF] text-xl font-bold">
                M
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  Mangesh Motor
                </h2>

                <p className="text-sm text-gray-400">
                  Driving School
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-6 text-gray-400">
              Professional driving training, licence assistance,
              insurance and PUC services under one roof.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-[#F97316] px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
            >
              Book a Driving Lesson
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#FACC15]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-gray-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">
              {/* Phone */}
              <a
                href={phone ? `tel:${phone}` : undefined}
                className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" />

                <span>
                  {phone}
                </span>
              </a>

              {/* Email */}
              <a
                href={email ? `mailto:${email}` : undefined}
                className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" />

                <span className="break-all">
                  {email}
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" />

                <span>
                  {address}
                </span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" />

                <span>
                  {timings}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Mangesh Motor Driving School.
            All rights reserved.
          </p>

          <p>
            Professional Driving Training & RTO Services
          </p>
        </div>
      </div>
    </footer>
  );
}