import theme from "../../styles/theme";
import React from "react";
import styled from "styled-components";
import { GithubLink } from "..";

const Container = styled.div`
  max-width: ${theme.breakpoints[2]};
  margin: 0 auto;
  margin-top: ${theme.space[7]};
  padding-bottom: ${theme.space[5]};
  padding-left: ${theme.space[3]};
  padding-right: ${theme.space[3]};

  @media (min-width: 550px) {
    padding-left: ${theme.space[5]};
    padding-right: ${theme.space[5]};
  }
`;

const P = styled.p`
  ${theme.textStyles.body};
  color: ${theme.colors.grey900};
`;

export const Footer = () => (
  <footer>
    <Container>
      <P>Designed and coded by yours truly</P>
      <GithubLink />
    </Container>
  </footer>
);
