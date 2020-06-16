import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../theme"

const Label = styled.label`
  ${theme.textStyles.body};
  font-weight: 800;
`

const TextArea = styled.textarea`
  border: 1px solid black;
  ${theme.textStyles.body};
  color: black;
  background-color: ${theme.colors.grey200};
  padding-top: ${theme.space[2]};
  padding-bottom: ${theme.space[2]};
  padding-left: ${theme.space[2]};
  margin-bottom: ${theme.space[5]};
  max-width: 400px;
  height: 150px;
  transition: 0.15s ease-in outline, 0.15s ease-in background-color;

  &:focus {
    outline: solid ${theme.colors.brandBlue};
    background-color: white;
  }
`

const TextInput = ({ name, labelText, value, onChange }) => {
  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      <TextArea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      ></TextArea>
    </>
  )
}

export default TextInput
