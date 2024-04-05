import * as Accordion from "@radix-ui/react-accordion";
import { AccordionTrigger, AccordionContent } from "../ui/accordion";
import "../../app/accordion.css";
import styled from "styled-components";

const questions = [
  {
    question: "How secure is Bloom's platform?",
    answer:
      "Bloom's platform prioritizes security, utilizing advanced encryption and security measures to protect your financial data.",
  },
  {
    question: "Does Bloom offer investment advice?",
    answer:
      "Yes, Bloom provides personalized investment advice to help you make informed decisions and grow your wealth.",
  },
  {
    question: "Can I track my spending with Bloom?",
    answer:
      "Absolutely! Bloom offers powerful budgeting tools that allow you to track your spending and manage your finances more effectively.",
  },
  {
    question: "What sets Bloom apart from other fintech platforms?",
    answer:
      "Bloom stands out for its user-friendly interface, personalized financial guidance, and commitment to helping you achieve your financial goals.",
  },
  {
    question: "Is Bloom's platform accessible?",
    answer:
      "Yes, Bloom's platform adheres to accessibility standards, ensuring that everyone can easily access and use our services.",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
`;

const AccordionRoot = styled(Accordion.Root)`
  border-radius: 6px;
  width: 60%;
  background-color: var(--mauve-6);
  box-shadow: 0 2px 10px var(--black-a4);
  color: #000;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    width: 80%;
  }
`;

const AccordionItem = styled(Accordion.Item)`
  overflow: hidden;
  margin-top: 1px;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const AccordionDemo = () => (
  <Container>
    <Header>FAQs</Header>
    <AccordionRoot type="single" defaultValue="item-1" collapsible>
      {questions.map((q, index) => (
        <AccordionItem
          key={index}
          className="AccordionItem"
          value={`item-${index + 1}`}
        >
          <AccordionTrigger>{q.question}</AccordionTrigger>
          <AccordionContent>{q.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  </Container>
);

export default AccordionDemo;
