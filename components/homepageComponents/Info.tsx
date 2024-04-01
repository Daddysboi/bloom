"use client"
import React from "react";
import styled from "styled-components";

import InfoCard from "../InfoCard";

const Section = styled.section`
  padding: 5rem 0 10rem 0;
  background-color: #F0EFFF;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 4xl;
  }
`;

const Description = styled.p`
  text-align: center;
  font-family: 'lato', sans-serif;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 4rem;
`;

const InformationSection = () => {
   return (
      <Section>
         <Title>
            Unleash Your Creative Potential  with <br/> Cutting-Edge Technology
         </Title>
         <Description>
            Transform Your Vision into Reality with Our Expert Guidance!
         </Description>
         <InfoCard />
      </Section>
   );
};

export default InformationSection;
