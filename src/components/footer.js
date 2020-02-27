import React from "react"
import styled from "styled-components"
import theme from "../theme"

const Container = styled.div`
  max-width: ${theme.breakpoints[2]};
  margin: 0 auto;
  margin-top: ${theme.space[7]};
  padding-bottom: ${theme.space[5]};
`

const P = styled.p`
  ${theme.textStyles.body};
  color: ${theme.colors.grey900};
`

const Footer = () => (
  <footer>
    <Container>
      <P>Designed and coded by yours truly</P>
    </Container>
  </footer>
)

export default Footer
