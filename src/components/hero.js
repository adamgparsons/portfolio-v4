import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../theme"
import underline from "../images/underline.svg"

const Container = styled.div`
  max-width: 850px;
  margin-top: ${theme.space[7]};
  margin-bottom: ${theme.space[7]};
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
`

const Hi = styled.h2`
  ${theme.textStyles.heading1}
  margin-bottom: ${theme.space[5]};
`

const Description = styled.p`
  ${theme.textStyles.heading2}
  font-weight: 400;
  color: ${theme.colors.grey800};
`

const SnookLink = styled(props => <Link {...props} />)`
  color: ${theme.colors.grey700};
  text-decoration: none;
  padding-bottom: 0px;
  box-shadow: inset 0 -0.175em white, inset 0 -0.22em ${theme.colors.grey700};
  transition: color 0.2s ease-in, box-shadow 0.2s ease-in;
  :hover {
    color: #4e97d0;
    box-shadow: inset 0 -0.175em white, inset 0 -0.22em #4e97d0;
  }
`

const Name = styled.span`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 130px;
    height: 130px;
    z-index: 0;
    background-image: url(${underline});
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 130px 130px;
    left: 0px;
    top: -7px;
  }
}
`

const Hero = () => (
  <Container>
    <Hi>
      <span role="img" aria-label="waving hand">
        👋
      </span>{" "}
      Hi I’m <Name>Adam</Name>
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
