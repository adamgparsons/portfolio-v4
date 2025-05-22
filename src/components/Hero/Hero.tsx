import React from "react";
import styled from "styled-components";
import underline from "../../../../public/images/underline.svg";
import theme from "../../styles/theme";

const Container = styled.div`
  max-width: 850px;
  margin-top: ${theme.space[6]};
  margin-bottom: 80px;
  animation: 0.5s ease 0s normal forwards 1 fadein;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 550px) {
    margin-top: ${theme.space[6]};
    margin-bottom: ${theme.space[7]};
  }
`;

const Hi = styled.h2`
  ${theme.textStyles.heading2}
  /* Apply dark mode compatible color, fallback to theme's default (grey800 from textStyles) */
  color: var(--dark-text, ${theme.colors.grey800}); 
  margin-bottom: ${theme.space[5]};

  @media (min-width: 550px) {
    ${theme.textStyles.heading1};
    /* Ensure color override persists for larger size if textStyle changes color */
    color: var(--dark-text, ${theme.colors.grey800}); 
    margin-bottom: ${theme.space[5]};
  }
`;

const Description = styled.p`
  ${theme.textStyles.heading3}
  font-weight: 400;
  /* Apply dark mode compatible color, fallback to theme's default */
  color: var(--dark-text, ${theme.colors.grey800});

  @media (min-width: 550px) {
    ${theme.textStyles.heading2};
    font-weight: 400;
    /* Ensure color override persists for larger size */
    color: var(--dark-text, ${theme.colors.grey800});
  }
`;

const SecondSentence = styled.span`
  display: inline;
  @media (min-width: ${theme.breakpoints[1]}) {
    display: block;
  }
`;

const WorkLink = styled.a`
  color: var(--dark-secondary-text, ${theme.colors.grey700});
  text-decoration: none;
  padding-bottom: 0px;
  box-shadow: inset 0 -0.175em var(--dark-background, white), inset 0 -0.22em var(--dark-secondary-text, ${theme.colors.grey700});
  transition: color 0.2s ease-in, box-shadow 0.2s ease-in;
  &:hover {
    color: var(--dark-brandBlue, #4e97d0);
    box-shadow: inset 0 -0.175em var(--dark-background, white), inset 0 -0.22em var(--dark-brandBlue, #4e97d0);
    cursor: pointer;
  }
`;

const Name = styled.span`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 110px;
    height: 110px;
    z-index: 0;
    background-image: url("images/underline.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 130px 130px;
    left: 0px;
    top: -15px;
  }

  @media (min-width: 550px) {
    &::after {
      width: 130px;
      height: 130px;
      left: 0px;
      top: -7px;
      background-size: 130px 130px;
    }
  }
`;

export const Hero = () => (
  <Container>
    <Hi>
      <span role="img" aria-label="waving hand">
        👋
      </span>{" "}
      Hi I’m <Name>Adam</Name>
    </Hi>
    <Description>
      I’m a Frontend Developer based in London.
      <SecondSentence>
        I enjoy designing and building interfaces that solve user problems.
      </SecondSentence>
      <br></br>
      <br></br>
      Currently at {""}
      <WorkLink href="https://www.nala.com/">Nala</WorkLink>
    </Description>
  </Container>
);
