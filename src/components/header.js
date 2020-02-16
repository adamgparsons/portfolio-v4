import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import theme from "../theme"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.breakpoints[2]};
  margin: 0 auto;
  margin-top: ${theme.space[6]};
  margin-bottom: ${theme.space[6]};
  padding-left: ${theme.space[5]};
  padding-right: ${theme.space[5]};
  animation: 1s ease 0s normal forwards 1 fadein;

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

  @-webkit-keyframes fadein {
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
  color: ${theme.colors.grey900};
  margin-bottom: ${theme.space[2]};
  text-decoration: none;

  margin-bottom: 0px;
  transition: color 0.2s ease-in;
  :hover {
    color: #4e97d0;
  }
`

const ContactLink = styled(props => <Link {...props} />)`
  ${theme.textStyles.heading3}
  text-decoration:none;
  margin-top: 11px;
  margin-bottom: 0px;
  transition: color 0.2s ease-in;
  :hover {
    color: #4e97d0;
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Logo to="/">Adam Parsons</Logo>
      </h1>
      <ContactLink to="/contact">Contact</ContactLink>
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
