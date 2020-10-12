import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import theme from "../theme"

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
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
`

const Logo = styled(props => <Link {...props} />)`
  ${theme.textStyles.heading3};
  font-size: 18px;
  color: ${theme.colors.grey800};
  text-decoration: none;
  margin-bottom: 32px;
  transition: color 0.2s ease-in;
  :hover {
    color: #4e97d0;
  }

  @media (min-width: 550px) {
    ${theme.textStyles.heading3}
    font-size: 24px;
    color: ${theme.colors.grey800};
  }
`

const ContactLink = styled(props => <Link {...props} />)`
  ${theme.textStyles.heading3}
  font-size: 18px;
  color: ${theme.colors.grey800};
  text-decoration: none;
  margin-top: 11px;
  margin-bottom: 0px;
  border-bottom: 2px solid ${theme.colors.grey600};
  transition: color 0.2s ease-in, border-bottom 0.2s ease-in;
  :hover {
    color: #4e97d0;
    border-bottom: 2px solid #4e97d0;
  }

  @media (min-width: 550px) {
    ${theme.textStyles.heading3}
    font-size: 24px;
    color: ${theme.colors.grey800};
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Logo to="/">Adam Parsons</Logo>
      </h1>
      <ContactLink to="/#contact">Get in touch</ContactLink>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
