import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load components that are below the fold
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-96 bg-deep-plum animate-pulse" />,
});

const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  loading: () => <div className="h-96 bg-deep-plum animate-pulse" />,
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-96 bg-deep-plum animate-pulse" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-96 bg-ivory-white animate-pulse" />,
});

const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="h-96 bg-deep-plum animate-pulse" />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-96 bg-deep-plum animate-pulse" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32 bg-deep-plum animate-pulse" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
// Test commit to trigger GitHub Actions
