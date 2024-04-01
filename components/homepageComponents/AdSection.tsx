"use client"

import Image from "next/image";
import styled from "styled-components";

import AdImage from "../../public/assets/friends.jpg";
import degree from "../../public/assets/degree.svg";
import arrow from "../../public/assets/arrow.svg";

const Section = styled.section`
  background-color: #2A286A;
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 3rem;
  @media (min-width: 768px) {
  }
`;



const ImageContainer = styled.div`
  flex: 1;

  @media (min-width: 768px) {
  }
`;

const ImageWrapper = styled.div`
  position: relative;



  @media (min-width: 768px) {
    min-height: 40rem;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  color: #fff;



  .bg-grey {
    background-color: grey;
    display: flex;
    align-items: center;
    gap: 2px;
    min-width: 108px;
    height: 12px;
    border-radius: 3xl;
    padding: 4px 6px;
    font-size: 1rem;
    font-weight: bold;
    line-height: 4;
    margin-bottom: 16px;

    img {
      width: 16px;
      height: 16px;
    }

    span {
      font-family: 'raleway', sans-serif;
      font-size: 1rem;
      line-height: 7;
      opacity: 0.75;
      color: #fff;
    }
  }



`;

const H = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.5rem;
    margin: 0;
    padding-bottom: 2rem;
    font-size: 2.5rem;

    @media (min-width: 768px) {
    }
`

const SubTitle = styled.p`  
 
    font-family: 'lato', sans-serif;
    font-size: 1rem;
    line-height: 1.75rem;
    margin: 0;
`

const CTA = styled.div`
  display: flex;
    align-items: center;
    gap: 2px;
    margin-top: 10px;

    p {
      font-family: 'raleway', sans-serif;
      font-size: 1rem;
      font-weight: bold;
      color: #ff69b4;
    }

  
`

const Arrow = styled.div`
   width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #ff69b4;
      display: flex;
      align-items: center;
      justify-content: center;
`

const Stats = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;
    color: #fff;
    padding-top: 2rem;

`
const Score = styled.div`
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 2rem;
      margin-bottom: 1rem;
`
const Info = styled.div`
     font-size: 0.75rem;
      opacity: 0.75;
`

const AdSection = () => {
  return (
    <Section>
        <ImageContainer>
          <ImageWrapper>
            <Image src={AdImage} alt="adImage" layout="fill" objectFit="cover" />
          </ImageWrapper>
        </ImageContainer>
        <ContentContainer>
        
          <H>
            Receive alerts for every change <br />
            <br  />
            in your cashflow
          </H>
          <SubTitle>
            Stay on top of your finances with our proactive alerts. Whether it's <br />
            income, expenses, or unexpected fluctuations, we've got you <br /> covered, keeping you
            informed and in command of your cashflow
          </SubTitle>
          <CTA>
            <p>See how others use Bloom</p>
            <Arrow>
              <Image src={arrow} alt="cta" />
            </Arrow>
          </CTA>
          <Stats >
            <span>
              <Score>95%</Score>
              <Info>push notifications will attract users’ attention</Info>
              <Info>Apple, 2021</Info>
            </span>
            <span>
              <Score>88%</Score>
              <Info >of people are more attracted by push notifications</Info>
              <Info>Google, 2021</Info>
            </span>
          </Stats>
        </ContentContainer>
    </Section>
  );
};

export default AdSection;
