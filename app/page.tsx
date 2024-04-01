"use client"
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
   background: linear-gradient(to right, #B4E9E4, #D8D9F7);

`
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
