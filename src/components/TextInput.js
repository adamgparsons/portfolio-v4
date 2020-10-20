import React from "react"
import styled from "styled-components"
import theme from "../theme"

const Label = styled.label`
  ${theme.textStyles.body};
  font-weight: 800;
  margin-top: ${theme.space[5]};
`

const Input = styled.input`
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.isError ? theme.colors.validationRed : theme.colors.grey900};
  ${theme.textStyles.body};
  color: ${theme.colors.grey800};
  background-color: ${theme.colors.grey200};
  padding-top: ${theme.space[2]};
  padding-bottom: ${theme.space[2]};
  padding-left: ${theme.space[2]};

  max-width: 400px;
  transition: 0.15s ease-in outline, 0.15s ease-in background-color;

  &:focus {
    outline: solid ${theme.colors.brandBlue};
    background-color: white;
  }
`

const TextInput = ({ name, labelText, type, value, onChange, isError }) => {
  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      <Input
        type={!type ? "text" : type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        isError={isError}
      ></Input>
    </>
  )
}

export default TextInput
