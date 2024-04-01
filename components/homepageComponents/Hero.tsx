"use client";

import Image from "next/image";
import { CardContainer, CardItem } from "../ui/3d-card";
import styled from "styled-components";

import HeroPic from "../../public/assets/hero.png";
import ButtonComponent from "../button";

const Container = styled.div`
  padding: 2rem 10rem;
  display: flex;
  /* max-width: 1104px; */
  justify-content: space-between;
`;

const TextContent = styled.div`
  padding-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    text-align: left;
    width: 50%;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  line-height: 6rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
  }
`;

const Description = styled.p`
  font-family: "lato", sans-serif;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;



const HeroImage = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

const Img = styled(Image)`
  height: 28rem;
  width: 26rem;
  border-radius: 2rem;
`;

const HerosSection = () => {
  return (
    <Container>
      <TextContent>
        <Title>
          Go Bloom <br /> & Go Big
          <br />
        </Title>
        <Description>Light up your finance with bloom</Description>

        <ButtonComponent text="Start for free" width="8.5rem"/>
      </TextContent>
      <HeroImage>
        <Animation>
          <Img src={HeroPic} alt="HeroPic" />
        </Animation>
      </HeroImage>
    </Container>
  );
};

export default HerosSection;

export const Animation = ({ children }: { children: any }) => {
  return (
    <CardContainer>
      <CardItem translateZ="100">{children}</CardItem>
    </CardContainer>
  );
};
