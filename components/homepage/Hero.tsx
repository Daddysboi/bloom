"use client";

import Image from "next/image";
import { CardContainer, CardItem } from "../ui/3d-card";
import styled from "styled-components";

import HeroPic from "../../public/assets/hero.png";
import ButtonComponent from "../button";

export const Animation = ({ children }: { children: any }) => {
  return (
    <CardContainer>
      <CardItem translateZ="100">{children}</CardItem>
    </CardContainer>
  );
};

const Container = styled.div`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding: 2rem 1rem;
    flex-direction: column;
  }

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    padding: 2rem 2rem;
  }
`;

const TextContent = styled.div`
  padding-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding-top: 5rem;
    text-align: left;
    padding-left: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  line-height: 6rem;
  margin-bottom: 1rem;
  .break {
    display: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 3.5rem;
    line-height: 4rem;
    .break {
      display: block;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 628px) {
    font-size: 3rem;
    line-height: 3rem;
  }
  @media only screen and (min-width: 629px) and (max-width: 768px) {
    font-size: 4rem;
    line-height: 4rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 28px;
  margin-bottom: 32px;
`;

const HeroImage = styled(Animation)`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  width: 50%;
  height: auto;
`;

const Img = styled(Image)`
  height: 28rem;
  width: 26rem;
  border-radius: 2rem;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: 20rem;
    width: auto;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: 20rem;
    width: 20rem;
  }
`;

const HerosSection = () => {
  return (
    <Container>
      <TextContent>
        <Title>
          Go <br className="break" /> Bloom <br /> & Go Big
          <br />
        </Title>
        <Description>Light up your finance with bloom</Description>

        <ButtonComponent text="Start for free" width="8.5rem" />
      </TextContent>
      <HeroImage>
        <Img src={HeroPic} alt="HeroPic" />
      </HeroImage>
    </Container>
  );
};

export default HerosSection;
