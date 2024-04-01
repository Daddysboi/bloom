"use client";
import styled from "styled-components";

const Button = styled.figure<{ width?: string }>`
  background-color: #4fd1c5;
  color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  display: none;
  width: ${(props) => props.width || "6rem"};
  @media (min-width: 1024px) {
    display: block;
  }
`;

const ButtonComponent = ({ text, width }: { text: string; width?: string }) => {
  return <Button width={width}>{text}</Button>;
};

export default ButtonComponent;
