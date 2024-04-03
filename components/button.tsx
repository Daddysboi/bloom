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
  width: ${(props) => props.width || "6rem"};
`;

interface ButtonType {
  text: string;
  width?: string;
  onClick?: () => void;
}

const ButtonComponent = ({ text, width, onClick = () => {} }: ButtonType) => {
  return (
    <Button width={width} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
