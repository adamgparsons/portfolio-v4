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

const ButtonLink = styled(props => <Link {...props} />)`
  ${theme.textStyles.body};
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

  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; */
`

const Button = ({ to, children, themeColor }) => {
  // console.log(themeColor)

  return (
    <>
      <ButtonHolder>
        <ButtonLink to={to}>{children}</ButtonLink>
        <Shadow color={themeColor} />
      </ButtonHolder>
    </>
  )
}

export default Button
