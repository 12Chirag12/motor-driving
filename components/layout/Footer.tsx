import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/shared/Container";
import { contactData, navItems } from "@/lib/data";

const serviceLinks = [
  { name: "Driving Courses", href: "#courses" },
  { name: "RTO Assistance", href: "#rto-services" },
  { name: "Vehicle Insurance", href: "#insurance" },
  { name: "PUC Certificate", href: "#puc" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <Container className="py-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.2fr] lg:gap-8">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3" aria-label="Back to home">
              <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white"><Image src="/images/logo/logo.PNG" alt="" fill sizes="48px" className="object-contain p-0.5" /></span>
              <span><span className="block font-bold">Mangesh Motor</span><span className="text-xs text-slate-400">Driving School</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">Safe driving lessons and dependable licence, insurance and PUC assistance for learners and vehicle owners in Palghar.</p>
            <a href="#contact" className="mt-5 inline-flex min-h-10 items-center rounded-xl bg-[#F97316] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600">Book a Driving Lesson</a>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2.5">
              {navItems.slice(0, 4).map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-[#FACC15]">{link.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-[#FACC15]">{link.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
            <div className="mt-4 space-y-3.5 text-sm text-slate-400">
              <a href={`tel:${contactData.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-white"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]" />{contactData.phone}</a>
              <a href={`mailto:${contactData.email}`} className="flex items-start gap-3 break-all hover:text-white"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]" />{contactData.email}</a>
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]" />{contactData.address}</p>
              <p className="flex items-start gap-3"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]" />{contactData.timings}</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mangesh Motor Driving School. All rights reserved.</p>
          <p>Safe training · Reliable local support</p>
        </Container>
      </div>
    </footer>
  );
}
