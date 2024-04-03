"use client";
import styled from "styled-components";

import HeroSection from "@/components/homepageComponents/Hero@";
import InformationSection from "@/components/homepageComponents/Info@";
import Header from "@/components/homepageComponents/Header@";
import AdSection from "@/components/homepageComponents/AdSection@";
import Testimonials from "@/components/homepageComponents/Testimonials@";
import Footer from "@/components/homepageComponents/Footer@";
import About from "@/components/homepageComponents/About@";

import FAQs from "@/components/homepageComponents/FAQs@";

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
