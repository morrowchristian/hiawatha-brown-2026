// app/page.tsx
"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Platform from "@/components/Platform";
import DistrictMap from "@/components/DistrictMap";
import Events from "@/components/Events";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Platform />
      <DistrictMap />
      <Events />
      <GetInvolved />
      <Footer />
    </div>
  );
}
