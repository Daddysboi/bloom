"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ButtonComponent from "../button";
import { FaBars, FaTimes } from "react-icons/fa";

// Images
import logo from "../../public/assets/logo.png";

const Container = styled.nav`
  padding: 1rem 10rem;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: linear-gradient(to right, #b4e9e4, #d8d9f7);

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 1rem 1rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-weight: 700;
  font-size: 2rem;
`;

const Img = styled.div`
  height: 2rem;
`;

const Links = styled.div`
  display: inline-flex;
  gap: 4rem;
  font-weight: 500;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    gap: 1rem;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    gap: 2rem;
  }
`;

const MobileLinks = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  gap: 2rem;
  transition: all 0.5s;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  align-items: center;
  font-weight: 600;
  font-size: 1.2rem;
  padding-top: 6rem;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: flex;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const NavIcon = styled.span`
  z-index: 5;
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #333;
  transition: 0.3s;
  cursor: pointer;
  display: none;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: block;
  }
`;

const SignUp = styled.span`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;

const navLinks = [
  {
    label: "ABOUT",
    href: "/",
  },
  {
    label: "FAQ",
    href: "/",
  },
  {
    label: "CONTACT",
    href: "/",
  },
  {
    label: "SUPPORT",
    href: "/",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const toggleSrc = open ? <FaBars /> : <FaTimes />;

  return (
    <Container>
      <Link href="/" passHref>
        <Logo>
          <Img>
            <Image src={logo} alt="logo" width={40} height={20} />
          </Img>
          <Text>Bloom</Text>
        </Logo>
      </Link>

      {open ? (
        <MobileLinks>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              passHref
              onClick={() => {
                setOpen(!open);
              }}
            >
              {link.label}
            </Link>
          ))}
          <ButtonComponent
            text="Sign Up"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileLinks>
      ) : (
        <Links>
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} passHref>
              {link.label}
            </Link>
          ))}
        </Links>
      )}

      <Buttons>
        <NavIcon>
          {open ? (
            <FaTimes onClick={handleToggle} />
          ) : (
            <FaBars onClick={handleToggle} />
          )}
        </NavIcon>
        <SignUp>
          <ButtonComponent text="Sign Up" />
        </SignUp>
      </Buttons>
    </Container>
  );
};

export default Navbar;
