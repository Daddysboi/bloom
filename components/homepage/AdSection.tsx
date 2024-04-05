"use client";

import Image from "next/image";
import styled from "styled-components";

import AdImage from "../../public/assets/friends.jpg";
import arrow from "../../public/assets/arrow.svg";

const Section = styled.section`
  background-color: #2a286a;
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
  min-height: 40rem;
`;

const ContentContainer = styled.div`
  flex: 1;
  color: #fff;
`;

const H = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 3rem;
  margin: 0;
  padding-bottom: 2rem;
  font-size: 2.5rem;
  max-width: 95%;
  // Mobile devices
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  // Small screens, laptops
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.2rem;
  }
`;

const Para = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  margin: 0;
  max-width: 80%;

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 10px;
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ff69b4;
`;

const Arrow = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ff69b4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stats = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;
  color: #fff;
  padding-top: 2rem;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    gap: 2rem;
    padding-top: 0;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    gap: 2rem;
  }
`;
const Score = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin-bottom: 1rem;
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0rem;
  }
`;

const Info = styled.div`
  font-size: 0.75rem;
  opacity: 0.75;
`;

const AdSection = () => {
  return (
    <Section>
      <ImageContainer>
        <ImageWrapper>
          <Image src={AdImage} alt="adImage" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </ImageContainer>
      <ContentContainer>
        <H>Receive alerts for every change in your cashflow</H>
        <Para>
          Stay on top of your finances with our proactive alerts. Whether
          it&apos;s income, expenses, or unexpected fluctuations, we&apos;ve got
          you covered, keeping you informed and in command of your cashflow
        </Para>

        <CTA>
          <P>See how others use Bloom</P>
          <Arrow>
            <Image src={arrow} alt="cta" />
          </Arrow>
        </CTA>
        <Stats>
          <span>
            <Score>95%</Score>
            <Info>push notifications will attract users’ attention</Info>
            <Info>Apple, 2021</Info>
          </span>
          <span>
            <Score>88%</Score>
            <Info>of people are more attracted by push notifications</Info>
            <Info>Google, 2021</Info>
          </span>
        </Stats>
      </ContentContainer>
    </Section>
  );
};

export default AdSection;
