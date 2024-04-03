"use client";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../app/swiper.css";

import InfoCard from "../InfoCard";
import padlock from "../../public/assets/padlock.png";
import chart from "../../public/assets/chart.png";
import wallet from "../../public/assets/wallet.png";

const Section = styled.section`
  padding: 5rem 0 5rem 5rem;
  background-color: #f0efff;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
  }
  // iPads, Tablets
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

const StyledSwiper = styled(Swiper)`
  display: flex;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    /* margin: auto 2rem; */
    width: 60%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin: auto 7rem;
  }
`;

const Bullet = styled.div`
  gap: 0.5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const cardInfo = [
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

const InformationSection = () => {
  return (
    <Section>
      <Title>
        Unleash Your Creative Potential with <br /> Cutting-Edge Technology
      </Title>
      <Description>
        Transform Your Vision into Reality with Our Expert Guidance!
      </Description>
      <StyledSwiper
        slidesPerView={1}
        modules={[Pagination]}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cardInfo.map(({ icon, title, content }, i) => (
          <SwiperSlide key={i}>
            <InfoCard icon={icon} title={title} content={content} />
          </SwiperSlide>
        ))}
      </StyledSwiper>

      <Bullet className="swiper-custom-pagination" />
    </Section>
  );
};

export default InformationSection;
