import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Templates from "@/components/Templates";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValueProposition from "@/components/ValueProposition";

export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition Section */}
      <ValueProposition />

      {/* Template Categories Section */}
      <Templates />

      {/* Features Section */}
      <FeatureSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}
