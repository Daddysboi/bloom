"use client";
import styled from "styled-components";
import Image from "next/image";

import padlock from "../public/assets/padlock.png";
import chart from "../public/assets/chart.png";
import wallet from "../public/assets/wallet.png";

const CardWrapper = styled.figure`
  width: 15rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #dfdefa;
`;

const Title = styled.div`
  font-family: "raleway", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #000000;
  line-height: 1.75rem;
`;

const Content = styled.p`
  font-family: "lato", sans-serif;
  font-size: 0.875rem;
  color: #000000;
  line-height: 1.75rem;
  opacity: 0.75;
`;

export const cardInfo = [
  {
    icon: padlock,
    title: "Wealth Protection",
    content:
      "Unlock the secrets of the universe with our custom-designed plans, guiding you on an interstellar journey of discovery and wonder.",
  },
  {
    icon: chart,
    title: "Tailored Investment Plans",
    content:
      "Navigate the realms of imagination with our enchanted tool, charting a course to unearth hidden treasures and unlock infinite possibilities.",
  },
  {
    icon: wallet,
    title: "Streamlined Budgeting",
    content:
      "Our innovative tool aids in fortifying your dreams, ensuring they stand strong against the winds of uncertainty and adversity.",
  },
];

const InfoCard = () => {
  return (
    <section className="flex w-full flex-col md:flex-row justify-center flex-wrap gap-8 md:gap-y-[5.35rem] md:space-x-4 items-center">
      {cardInfo.map((card, index) => {
        const { icon, title, content } = card;
        return (
          <CardWrapper key={index}>
            <Image src={icon} alt="card-icon" width={32} height={32} />
            <Title>{title}</Title>
            <Content>{content}</Content>
          </CardWrapper>
        );
      })}
    </section>
  );
};

export default InfoCard;
