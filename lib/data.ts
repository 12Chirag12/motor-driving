import {
  Car,
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Bike,
  Clock3,
  UserCheck,
  CarFront,
  Wallet,
  ClipboardCheck,
  Headphones,
  RefreshCcw,
  ScrollText,
  Sparkles,
  CalendarCheck2,
  Route,
} from "lucide-react";

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "RTO Services", href: "#rto-services" },
  { name: "Insurance", href: "#insurance" },
  { name: "PUC", href: "#puc" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Driving Training",
    icon: Car,
    description: "Professional driving classes for beginners and learners.",
  },
  {
    title: "Driving License",
    icon: BadgeCheck,
    description: "Learner & Permanent Driving License Assistance.",
  },
  {
    title: "Insurance Services",
    icon: ShieldCheck,
    description: "Vehicle Insurance & Renewal Services.",
  },
  {
    title: "PUC Certificate",
    icon: FileCheck,
    description: "Pollution Under Control Certificate.",
  },
  {
    title: "2/3/4 Wheeler License",
    icon: Bike,
    description: "License assistance for all vehicle categories.",
  },
  {
    title: "Refresher Training",
    icon: Route,
    description: "Focused road practice to rebuild confidence and driving skills.",
  },
];

export const aboutHighlights = [
  {
    title: "Patient, practical coaching",
    description: "Clear step-by-step guidance for first-time and nervous learners.",
    icon: Headphones,
  },
  {
    title: "Road-ready training",
    description: "Real traffic, parking and everyday road-safety practice.",
    icon: CarFront,
  },
  {
    title: "Support beyond lessons",
    description: "Helpful guidance for licences, insurance and PUC documentation.",
    icon: ClipboardCheck,
  },
];

export const stats = [
  { value: "1000+", label: "Happy Students" },
  { value: "6+", label: "Training Cars" },
  { value: "1", label: "Auto Rickshaw" },
  { value: "98%", label: "Pass Success Rate" },
];

export const fleet = [
  {
    id: 1,
    name: "Maruti Alto",
    image: "/images/training/white-training-car.jpg",
    transmission: "Manual",
    badge: "Dual Control",
  },
  {
    id: 2,
    name: "Maruti WagonR",
    image: "/images/training/practice-hatchback.jpg",
    transmission: "Manual",
    badge: "Dual Control",
  },
  {
    id: 3,
    name: "Hyundai Santro",
    image: "/images/training/practice-hatchback.jpg",
    transmission: "Manual",
    badge: "Dual Control",
  },
  {
    id: 4,
    name: "Maruti Swift",
    image: "/images/training/red-training-car.jpg",
    transmission: "Manual",
    badge: "Dual Control",
  },
  {
    id: 5,
    name: "Tata Tiago",
    image: "/images/training/white-training-car.jpg",
    transmission: "Manual",
    badge: "Dual Control",
  },
  {
    id: 6,
    name: "Maruti Dzire",
    image: "/images/training/training-sedan.jpg",
    transmission: "Manual",
    badge: "Dual Control",
  },
  {
    id: 7,
    name: "Auto Rickshaw",
    image: "/images/training/auto-rickshaw.jpg",
    transmission: "Manual",
    badge: "RTO Training",
  },
];

export const whyChoose = [
  {
    title: "Experienced Instructors",
    description: "Professional trainers with years of teaching experience.",
    icon: UserCheck,
  },
  {
    title: "Dual Control Cars",
    description: "Safe training vehicles with dual-control systems.",
    icon: CarFront,
  },
  {
    title: "Flexible Timings",
    description: "Morning, afternoon and evening driving sessions.",
    icon: Clock3,
  },
  {
    title: "RTO License Assistance",
    description: "Complete support for learner and permanent licenses.",
    icon: BadgeCheck,
  },
  {
    title: "Affordable Fees",
    description: "Quality training at competitive prices.",
    icon: Wallet,
  },
  {
    title: "Safe Learning",
    description: "Safety-first approach for every learner.",
    icon: ShieldCheck,
  },
];
export const courses = [
  {
    title: "Beginner Driving Course",
    duration: "15 Days",
    price: "₹4,500",
    features: [
      "Basic Driving Skills",
      "Traffic Rules",
      "Parking Practice",
      "Dual Control Car",
    ],
  },
  {
    title: "Advanced Driving Course",
    duration: "30 Days",
    price: "₹7,500",
    features: [
      "Highway Driving",
      "Night Driving",
      "Reverse Parking",
      "RTO Test Preparation",
    ],
  },
  {
    title: "Refresher Course",
    duration: "7 Days",
    price: "₹2,500",
    features: [
      "Confidence Building",
      "City Driving",
      "Parking",
      "Traffic Practice",
    ],
  },
];

export const trainingSteps = [
  {
    step: "01",
    title: "Choose your course",
    description: "Tell us your experience and learning goal. We will recommend the right program.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Book a convenient slot",
    description: "Select a practical morning, afternoon or evening training time.",
    icon: CalendarCheck2,
  },
  {
    step: "03",
    title: "Learn on real roads",
    description: "Build control, road awareness and test confidence with patient guidance.",
    icon: CarFront,
  },
];

export const documentServices = [
  {
    id: "rto-services",
    eyebrow: "Licence & RTO",
    title: "Clear support at every licence step",
    description: "Get practical help understanding the process and preparing the documents needed for learner and permanent driving licence applications.",
    icon: ScrollText,
    items: ["Learner's licence guidance", "Permanent licence assistance", "2, 3 and 4-wheeler categories", "RTO test preparation"],
    cta: "Apply for Licence",
  },
  {
    id: "insurance",
    eyebrow: "Vehicle Insurance",
    title: "Simple insurance and renewal assistance",
    description: "We help car and two-wheeler owners understand renewal requirements and complete the process without unnecessary confusion.",
    icon: RefreshCcw,
    items: ["New policy assistance", "Policy renewal support", "Car and two-wheeler cover", "Document checklist guidance"],
    cta: "Enquire About Insurance",
  },
  {
    id: "puc",
    eyebrow: "PUC Certificate",
    title: "Keep your vehicle compliance up to date",
    description: "Get straightforward assistance for Pollution Under Control certification so your vehicle documents remain current.",
    icon: Sparkles,
    items: ["PUC certificate assistance", "Renewal guidance", "Quick document check", "Support for multiple vehicle types"],
    cta: "Enquire About PUC",
  },
];

export const testimonials = [
  {
    name: "Rahul Patil",
    course: "Car Driving Course",
    review:
      "Very professional instructors. I cleared my driving test on the first attempt.",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    course: "Driving License",
    review:
      "Complete assistance from learner's license to permanent license. Excellent service.",
    rating: 5,
  },
  {
    name: "Amit Shinde",
    course: "Driving Training",
    review:
      "The trainers are patient and the vehicles are well maintained. Highly recommended.",
    rating: 5,
  },
];
export const heroData = {
  badge: "Trusted Driving School Since 2005",

  title: "Learn Driving With Confidence",

  subtitle:
    "Professional car driving training, driving licence assistance, insurance services and PUC under one roof.",

  primaryButton: "Book Driving Lesson",

  secondaryButton: "WhatsApp Us",

  rating: "4.9",

  students: "1000+",

  vehicles: "6+",
};
export const gallery = [
  {
    image: "/images/training/learner-with-instructor.jpg",
    title: "One-to-One Driving Training",
  },
  {
    image: "/images/training/white-training-car.jpg",
    title: "On-Road Practice",
  },
  {
    image: "/images/training/practice-hatchback.jpg",
    title: "Safe Parking Practice",
  },
  {
    image: "/images/training/auto-rickshaw.jpg",
    title: "Auto Rickshaw Training",
  },
  {
    image: "/images/training/steering-guidance.jpg",
    title: "Patient Instructor Guidance",
  },
  {
    image: "/images/training/successful-learners.jpg",
    title: "Confident Learners",
  },
];
export const contactData = {
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "info@mangeshmotordriving.com",
  address: "Mangesh Motor Driving School, Palghar, Maharashtra",
  timings: "Monday – Saturday: 7:00 AM – 8:00 PM",
  mapUrl: "https://maps.app.goo.gl/TAriiCBHUMwSHM3R8",
};
