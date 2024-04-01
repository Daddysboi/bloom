"use client";
import styled from "styled-components";
import TestimonialCard from "../testimonialCard";

import TestifierF1 from "../../public/assets/TestifierF1.png";
import TestifierF2 from "../../public/assets/TestifierF2.png";
import TestifierF3 from "../../public/assets/TestifierF3.png";
import TestifierM1 from "../../public/assets/TestifierM1.png";
import TestifierM2 from "../../public/assets/TestifierM2.png";
import TestifierM3 from "../../public/assets/TestifierM3.png";

const Section = styled.section`
  max-width: 1104px;
  margin: 5rem auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  color: #000000;
  font-size: 2rem;
  line-height: 3.5rem;
  font-weight: bold;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Span = styled.span`
    color: #8a2be2;
`
  const testimonials = [
    {
      title: "Chiamaka Okafor",
      content:
        "Bloom is a game-changer for my business. I'm always in the loop about cashflow changes.",
      backgroundcolor: "#ffffff",
      img: TestifierF1
    },
    {
      title: "Emeka Nwachukwu",
      content:
        "They keeps me informed about investment returns, allowing me to make strategic decisions for my financial future. I can get enough of Bloom. My finances has blossomed ever since i joined the platform. They are the best",
      backgroundcolor: "#ffffff",
      img: TestifierM1
    },
    {
      title: "Yemi Adeleke",
      content:
        "Managing a household and family's finances can be overwhelming. But with Bloom, its simplifies everything. ",
      backgroundcolor: "#ffffff",
      img: TestifierM2
    },
    {
      title: "Ngozi Eze", 
      content:
        "This tool has been a game-changer for my business. With the real-time alerts, I'm always in the loop about cashflow changes. The platform is user friendly and even a toddler can adapt and navigate around with ease. Thank you team Bloom",
      backgroundcolor: "#ffffff",
      img: TestifierF2
    },
    {
      title: "Pedro Dovey",
      content: "This platform is invaluable",
      backgroundcolor: "#ffffff",
      img: TestifierM3
    },
    {
      title: "Aisha Ibrahim",
      content:
        "Managing a household and family's finances can be overwhelming. This tool's alerts and cashflow tracking simplify everything.",
      backgroundcolor: "#ffffff",
      img: TestifierF3
    },
  ];
  
const Testimonials = () => {
  return (
    <Section>
      <Title>
        Hear what people are <Span>saying </Span>
        <br />
        about us
      </Title>
      <TestimonialCard testimonials={testimonials} />
    </Section>
  );
};

export default Testimonials;
