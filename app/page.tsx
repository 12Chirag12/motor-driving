import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Courses from "@/components/sections/Courses";
import DocumentServices from "@/components/sections/DocumentServices";
import Fleet from "@/components/sections/Fleet";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import TrainingProcess from "@/components/sections/TrainingProcess";
import WhyChoose from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Courses />
        <TrainingProcess />
        <WhyChoose />
        <Fleet />
        <DocumentServices />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
