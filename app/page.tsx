"use client";
import styled from "styled-components";

import HeroSection from "@/components/homepage/Hero@";
import InformationSection from "@/components/homepage/Info@";
import Header from "@/components/homepage/Header@";
import AdSection from "@/components/homepage/AdSection@";
import Testimonials from "@/components/homepage/Testimonials@";
import Footer from "@/components/homepage/Footer@";
import About from "@/components/homepage/About@";

import FAQs from "@/components/homepage/FAQs@";

const Banner = styled.div`
  padding-bottom: 5rem;
  background: linear-gradient(to right, #b4e9e4, #d8d9f7);

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export default function Home() {
  return (
    <main className="h-full relative">
      <Banner>
        <Header />
        <HeroSection />
      </Banner>
      <About />
      <InformationSection />
      <AdSection />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  );
}
