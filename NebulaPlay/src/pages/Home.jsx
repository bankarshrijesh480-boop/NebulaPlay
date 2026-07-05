import MainLayout from "../layouts/MainLayout";

import Hero from "../components/hero/Hero";
import TrustedBy from "../components/home/TrustedBy";
import FeaturedGames from "../components/games/FeaturedGames";
import Features from "../components/features/Features";
import Pricing from "../components/pricing/Pricing";
import Testimonials from "../components/testimonials/Testimonials";
import FAQ from "../components/faq/FAQ";
import CTA from "../components/cta/CTA";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <MainLayout>
      <main className="relative overflow-x-hidden bg-slate-950 text-white">
        <Hero />

        <TrustedBy />

        <FeaturedGames />

        <Features />

        <Pricing />

        <Testimonials />

        <FAQ />

        <CTA />
      </main>

      <Footer />
    </MainLayout>
  );
}