import theme from "../../styles/theme";
import { Link as RouterLink } from "react-router-dom"; // Replaced next/link
import React from "react";
import styled from "styled-components";
import { GithubLink } from "..";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  max-width: ${theme.breakpoints[2]};
  margin: 0 auto;
  padding-top: ${theme.space[4]};
  padding-bottom: ${theme.space[4]};
  padding-left: ${theme.space[3]};
  padding-right: ${theme.space[3]};
  animation: 1s ease 0s normal forwards 1 fadein;

  @media (min-width: 550px) {
    flex-direction: row;
    align-items: center;
    padding-top: ${theme.space[6]};
    padding-bottom: ${theme.space[6]};
    padding-left: ${theme.space[5]};
    padding-right: ${theme.space[5]};
  }

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
`;

const Logo = styled.a`
  ${theme.textStyles.heading3};
  font-size: 18px;
  color: ${theme.colors.grey800};
  text-decoration: none;
  margin-bottom: 32px;
  transition: color 0.2s ease-in;

  &:hover {
    color: #4e97d0;
  }

  @media (min-width: 550px) {
    font-size: 24px;
  }
`;

// Removed unused LogoProps type definition

export const Header = () => (
  <header>
    <Container>
      <h1 style={{ margin: 0 }}>
        <RouterLink to="/"> {/* Changed Link to RouterLink, updated props */}
          <Logo>Adam Parsons</Logo>
        </RouterLink>
      </h1>
      <GithubLink />
    </Container>
  </header>
);
