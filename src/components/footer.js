import React from "react"
import styled from "styled-components"
import theme from "../theme"

const Container = styled.div`
  max-width: ${theme.breakpoints[2]};
  margin: 0 auto;
  margin-top: ${theme.space[7]};
  padding-bottom: ${theme.space[5]};
`

const H5 = styled.h5`
  ${theme.textStyles.heading3};
  color: ${theme.colors.grey900};
  margin-bottom: ${theme.space[2]};
`

const P = styled.p`
  ${theme.textStyles.body};
  color: ${theme.colors.grey900};
`

const Footer = () => (
  <footer>
    <Container>
      <H5>Adam Parsons</H5>
      <P>Designed and coded by yours truly</P>
    </Container>
  </footer>
)

export default Footer
