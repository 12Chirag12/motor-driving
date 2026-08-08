import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Fleet from "@/components/sections/Fleet";
import WhyChoose from "@/components/sections/WhyChoose";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="space-y-10 lg:space-y-14">

        {/* Home */}
        <section id="home">
          <Hero />
        </section>

        {/* Stats */}
        <Stats />

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 px-6 py-16"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-[#1F2937]">
              About Mangesh Motor Driving School
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              Mangesh Motor Driving School provides professional driving
              training and vehicle-related services with a focus on safe,
              confident and responsible driving.
            </p>
          </div>
        </section>

        {/* Services */}
        <Services />

        {/* Fleet */}
        <Fleet />

        {/* Why Choose Us */}
        <WhyChoose />

        {/* Courses */}
        <section id="courses" className="scroll-mt-24">
          <Courses />
        </section>

        {/* RTO Services */}
        <section
          id="rto-services"
          className="scroll-mt-24 bg-slate-50 px-6 py-16"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-[#1F2937]">
              RTO Services
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              Get assistance with learner's licence, permanent driving
              licence and other RTO-related services.
            </p>
          </div>
        </section>

        {/* Insurance */}
        <section
          id="insurance"
          className="scroll-mt-24 px-6 py-16"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-[#1F2937]">
              Insurance Services
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              Vehicle insurance assistance and renewal services for your
              car, two-wheeler and other vehicles.
            </p>
          </div>
        </section>

        {/* PUC */}
        <section
          id="puc"
          className="scroll-mt-24 bg-slate-50 px-6 py-16"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-[#1F2937]">
              PUC Certificate
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              PUC certificate services to help keep your vehicle
              documentation up to date.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-24">
          <Gallery />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

      </main>

      <Footer />
    </>
  );
}