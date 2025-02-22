import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { Animation } from "./Hero";
import RentSaving from "../../public/assets/rent-saving.png";
import RentTopUp from "../../public/assets/rent-top-up.png";

const Container = styled.div`
  padding-bottom: 5rem;
`;

const Top = styled.div`
  display: flex;
  padding: 4rem 8rem 0 8rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 320px) and (max-width: 650px) {
    flex-direction: column;
    padding: 0 2rem;
    gap: 0;
  }

  @media only screen and (min-width: 651px) and (max-width: 1024px) {
    padding: 0 2rem;
    gap: 0;
  }
`;

const Bottom = styled.div`
  display: flex;
  padding: 0 8rem 0 8rem;
  gap: 2rem;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 650px) {
    flex-direction: column-reverse;
    padding: 0 2rem;
    gap: 0;
  }

  @media only screen and (min-width: 651px) and (max-width: 1024px) {
    padding: 0 2rem;
    gap: 0;
  }
`;

const Left = styled.div`
  flex: 1.5rem;
  margin-right: 5rem;
`;

const Right = styled.div`
  flex: 1rem;
`;

const Img = styled(Image)`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: 16rem;
    width: auto;
  }
`;

const HeaderRight = styled.h2`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 800;
  border-radius: 1.5rem 1.5rem 1.5rem 0;
  background-color: #00dc99;
  width: 8rem;
  text-align: center;
  padding: 0.3rem 0.6rem;
`;

const HeaderLeft = styled.h2`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 800;
  border-radius: 1.5rem 1.5rem 1.5rem 0;
  background-color: #9d98ec;
  width: 15rem;
  text-align: center;
  padding: 0.3rem 0.6rem;
`;

const SubHead = styled.h4`
  font-size: 1.2rem;
  font-weight: 800;
  padding-bottom: 1rem;
  width: 60%;
  @media only screen and (max-width: 815px) {
    width: 100%;
  }
`;
const Text = styled.p`
  max-width: 25rem;
  @media only screen and (max-width: 815px) {
    font-size: 0.9rem;
  }
`;

const Links = styled(Link)`
  max-width: 25rem;
  color: #00dc99;
  text-decoration: underline;
`;

const sections = [
  {
    header: "Saving",
    subHead: "Saving for rent payment made easy.",
    text: "Say goodbye to the hassle of saving for your rent payment alone. Bloom makes it simple and stress-free. Whether you're saving solo or with friends and family, Bloom provides the tools and support you need to reach your rent saving goals effortlessly.",
    link: "/",
    image: RentSaving,
  },
  {
    header: "Rent Now, Pay Later",
    subHead: "Flexible payment options for renters.",
    text: "With Bloom, you can rent now and pay later. Our innovative platform offers flexible payment options that cater to your financial needs. Say goodbye to the stress of upfront rent payments and hello to a more convenient renting experience.",
    link: "/",
    image: RentTopUp,
  },
];

const About = () => {
  return (
    <Container>
      <Top>
        <Left>
          <Animation>
            <Img src={sections[0].image} alt="RentSaving" />
          </Animation>
        </Left>
        <Right>
          <HeaderRight>{sections[0].header}</HeaderRight>
          <SubHead>{sections[0].subHead}</SubHead>
          <Text>{sections[0].text}</Text>
          <Links href={sections[0].link} passHref>
            Learn more
          </Links>
        </Right>
      </Top>
      <Bottom>
        <Right>
          <HeaderLeft>{sections[1].header}</HeaderLeft>
          <SubHead>{sections[1].subHead}</SubHead>
          <Text>{sections[1].text}</Text>
          <Links href={sections[1].link} passHref>
            Learn more
          </Links>
        </Right>
        <Left>
          <Animation>
            <Img src={sections[1].image} alt="RentSaving" />
          </Animation>
        </Left>
      </Bottom>
    </Container>
  );
};

export default About;
