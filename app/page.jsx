import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Companies from "@/components/companies/Companies";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Pricing from "@/components/pricing/Pricing";
import Reviews from "@/components/reviews/Reviews";
import Services from "@/components/services/Services";
import Stats from "@/components/stats/Stats";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />

    </main>
  );
}
