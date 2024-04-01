"use client"
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

import googleplay from "../../public/assets/googleplay.svg";
import apple from "../../public/assets/apple.svg";

const FooterContainer = styled.footer`
`;

const Section = styled.div`
padding-bottom: 2.5rem;
`;

const Divider = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin: 10px 0;
`;

const Title = styled.h2`
  text-align: center;
  font-family: 'raleway', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 3rem;
`;

const Subtitle = styled.p`
  text-align: center;
  font-family: 'lato', sans-serif;
  font-size: 1rem;
  opacity: 0.75;
  line-height: 1.75rem;
  padding-bottom: 2.5rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding-bottom: 3rem;
`;

const FooterColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
color: #000;
padding: 0 8rem 0 8rem;

`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;




export const footerLinks = [
   {
      title: "Bloom",
      links: ["About", "FAQs", "Services", "Support"],
   }, {
    title: "Connect With Us",
    links: ["Linkedln", "Twitter", "Instagram", "Facebook"],
 },
  
   {
      title: "Other",
      links: ["Privacy Policy", "Terms and Condition"],
   },
  
   {
    title: "Contact Us",
    links: ["08031574374", "Gwarinpa, Abuja", "gobloom@gmail.com", "Nigeria"],
 },
];

const Head = styled.h4`
  color: #2A286A;
  font-weight: 700;

`

const Ul = styled.ul`
display: flex;
gap: 7px;
opacity: 0.75;
flex-direction: column;
font-size: 0.9rem;
padding-bottom: 1rem;
`
const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <Column>
    <Head>{title}</Head>
    <Ul >
      {links.map((link, index) => (
        <Link href="/" key={index}>
          {link}
        </Link>
      ))}
    </Ul>
  </Column>
);

const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <Title>
          Grow Your Finance With Bloom 
        </Title>
        <Subtitle>
         Take advantage of bloom and give your 
          <br  /> self financial freedom
        </Subtitle>
        <ButtonsContainer>
          <Image src={googleplay} alt="googleplay-btn" />
          <button className="flex justify-center items-center  border border-black py-2">
            <Image src={apple} alt="apple-btn" />
            <span className="raleway text-[0.875.rem] font-semibold">
              App Store
            </span>
          </button>
        </ButtonsContainer>
      </Section>
      <Section>
        <FooterColumnContainer>
          {footerLinks.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </FooterColumnContainer>
      <Divider />
        <FooterColumnContainer>
        
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3 10C3 6.1339 6.1339 3 10 3C13.8661 3 17 6.1339 17 10C17 13.8661 13.8661 17 10 17C6.1339 17 3 13.8661 3 10Z"
                stroke="#020202"
                strokeWidth="1.5"
              />
              <path
                d="M11.4 12.5669C11.019 12.7215 10.6115 12.8007 10.2002 12.8C8.54331 12.8 7.20001 11.547 7.20001 9.99995C7.20001 8.45295 8.54331 7.19995 10.2002 7.19995C10.6272 7.19995 11.0325 7.28325 11.4 7.43305"
                stroke="#020202"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            
            <p className="lato text-sm leading-[1.5rem]">
              2024 Bloom. All rights reserved
            </p>
          </div>
        </FooterColumnContainer>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
