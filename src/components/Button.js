import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../theme"

const ButtonHolder = styled.div`
  position: relative;
  width: fit-content;
  height: 48px;
  z-index: 1;
  margin-top: ${theme.space[3]};
  margin-bottom: ${theme.space[3]};
`

const ButtonStyling = `
  display: block;
  color: ${theme.colors.grey800};
  position: relative;
  font-weight: 700;
  text-decoration: none;
  background-color: white;
  border: 1px solid ${theme.colors.grey800};
  padding: 8px ${theme.space[4]};
  transition: all 250ms cubic-bezier(0.19, 1, 0.22, 1);

  :hover {
    transform: translate(6px, 6px);
  }
`

const InternalLink = styled(props => <Link {...props} />)`
  ${theme.textStyles.body};
  ${ButtonStyling}
`

const ExternalLink = styled.a`
  ${theme.textStyles.body};
  ${ButtonStyling}
`

const Shadow = styled.span`
  /* background-color: #ecb7b7; */
  background-color: white;
  position: absolute;
  z-index: -1;
  right: -6px;
  bottom: -6px;
  border: 1px solid ${theme.colors.grey800};
  width: 100%;
  height: 48px;

  ${({ color }) =>
    `
background-color: ${color}

  `};
`

const Button = ({ to, children, themeColor, href }) => {
  return (
    <>
      <ButtonHolder>
        {to ? (
          <InternalLink to={to}>{children}</InternalLink>
        ) : (
          <ExternalLink href={href}>{children}</ExternalLink>
        )}
        <Shadow color={themeColor} />
      </ButtonHolder>
    </>
  )
}

export default Button
