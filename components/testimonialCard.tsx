import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { StaticImageData } from 'next/image';

const Section = styled.section`
  margin-top: 16px;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
  }
`;

const Card = styled.figure<{ backgroundcolor?: string }>`
  width: 22rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.backgroundcolor || "#ffffff"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    width: 16.5rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 0.7rem;
`;

const Img = styled(Image)`
border-radius: 50%;
height: 3rem;
width: 3rem;
margin-top: -2rem;
`;

const Content = styled.p`
  font-family: "lato", sans-serif;
  font-size: 0.875rem;
  color: #000000;
  opacity: 0.75;
`;

interface Testimonial {
   title: string;
   content: string;
   img?: StaticImageData;
   backgroundcolor?: string;
}

interface TestimonialCardProps {
  testimonials: Testimonial[];
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonials }) => {
  return (
    <Section>
      {testimonials.map(({ title, content, img, backgroundcolor }, index) => (
        <Card key={index} backgroundcolor={backgroundcolor}>
          {img && <Img src={img} width={50} height={50} alt="testifier" />}
          <Content>{content}</Content>
          <Title>{title}</Title>
        </Card>
      ))}
    </Section>
  );
};

export default TestimonialCard;
