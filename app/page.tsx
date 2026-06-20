"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DistrictMap from "@/components/DistrictMap";
import Platform from "@/components/Platform";
import Events from "@/components/Events";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <DistrictMap />
      <Platform />
      <Events />
      <GetInvolved />
      <Footer />
    </div>
  );
}
