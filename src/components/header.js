import { Link } from "gatsby"
import PropTypes, { nominalTypeHack } from "prop-types"
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
`

const Logo = styled(props => <Link {...props} />)`
  ${theme.textStyles.heading2}
  text-decoration:none;
  margin-bottom: 0px;

  :hover {
    border-bottom: 2px blue solid;
  }
`

const ContactLink = styled(props => <Link {...props} />)`
  ${theme.textStyles.heading3}
  text-decoration:none;
  margin-bottom: 0px;
  border-bottom: 2px transparent solid;

  :hover {
    border-bottom: 2px ${theme.colors.grey700} solid;
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
