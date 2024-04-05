import styled from "styled-components";
import Image from "next/image";
import { StaticImageData } from "next/image";

const CardWrapper = styled.figure`
  /* position: relative; */

  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #dfdefa;
  /* max-width: 15rem; */
  min-height: 14rem;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: #000000;
  line-height: 1.75rem;
`;

const Content = styled.p`
  font-size: 0.875rem;
  color: #000000;
  line-height: 1.75rem;
  opacity: 0.75;
`;

interface Props {
  icon: StaticImageData;
  title: string;
  content: string;
}

export default function infoCard(props: Props) {
  const { icon, title, content } = props;
  return (
    <div>
      <CardWrapper>
        <Image src={icon} alt="card-icon" width={32} height={32} />
        <Title>{title}</Title>
        <Content>{content}</Content>
      </CardWrapper>
    </div>
  );
}
