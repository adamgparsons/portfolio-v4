import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../theme"

const Container = styled.div`
  max-width: 850px;
  margin-top: ${theme.space[7]};
  margin-bottom: ${theme.space[7]};
`
const Hi = styled.h2`
  ${theme.textStyles.heading1}
  margin-bottom: ${theme.space[5]};
`

const Description = styled.p`
  ${theme.textStyles.heading2}
  font-weight: 400;
  color: ${theme.colors.grey700};
`

const SnookLink = styled(props => <Link {...props} />)`
  color: ${theme.colors.grey700};
  text-decoration: none;
  padding-bottom: 0px;
  box-shadow: inset 0 -0.175em white, inset 0 -0.22em ${theme.colors.grey700};
`

const Hero = () => (
  <Container>
    <Hi>
      <span role="img">👋</span> Hi I’m Adam
    </Hi>
    <Description>
      I’m a UX Designer & Developer based in London. I enjoy designing and
      building interfaces that solve user problems.
      <br></br>
      <br></br>
      Currently at <SnookLink to="https://wearesnook.com/">Snook</SnookLink>
    </Description>
  </Container>
)

export default Hero
