import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Welcome from "@/components/Welcome";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Overview />
      <div className="flex flex-col gap-8 lg:gap-10 my-8 lg:my-10">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <Welcome />
      <Footer />
      <Analytics />
    </main>
  );
}
