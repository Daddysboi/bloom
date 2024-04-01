"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ButtonComponent from "../button";

// Images
import logo from "../../public/assets/logo.png";
import Hamburger from "../../public/assets/hamburger-svgrepo-com.svg";
import Close from "../../public/assets/times-svgrepo-com.svg";

const NavBar = styled.nav`
  padding: 1rem 5rem 1rem 5rem;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: linear-gradient(to right, #B4E9E4, #D8D9F7);



  .menu-btn {
    cursor: pointer;
    transition: transform 0.3s;

    &.open {
      transform: rotate(180deg) skewY(12deg);
    }
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
`;
const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 76px;
  width: 100%;
  height: 70vh;
  padding-top: 10px;
  gap: 10px;
  transition: all 0.5s;
`;
const Buttons = styled.div`
  display: flex;
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

  const toggleSrc = open ? Close : Hamburger;

  return (
    <NavBar>
      <Link href="/" passHref>
        <Logo>
          <Img>
            <Image src={logo} alt="logo" width={40} height={20} />
          </Img>
          <Text>Bloom</Text>
        </Logo>
      </Link>
      <Links>
       
        {open ? (
          <MobileLinks className={`nav-links ${open ? "open" : ""}`}>
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} passHref>
                {link.label}
              </Link>
            ))}
          </MobileLinks>
        ) : (
          <>

          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} passHref>
              {link.label}
            </Link>
          ))}
          </>
        )}
      </Links>
      <Buttons>
        {open ? (
          <Image
          src={toggleSrc}
          alt="menu-btn"
          width={50}
          height={50}
          onClick={handleToggle}
          />
          ) : (
         <ButtonComponent text="Sign Up" />
        )}
      </Buttons>
    </NavBar>
  );
};

export default Navbar;
