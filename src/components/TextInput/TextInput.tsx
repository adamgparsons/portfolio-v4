import theme from "../../styles/theme";
import React from "react";
import styled from "styled-components";

const Label = styled.label`
  ${theme.textStyles.body};
  font-weight: 800;
  margin-top: ${theme.space[5]};
`;

interface TextInputInputProps {
  isError?: boolean;
}

const Input = styled.input<TextInputInputProps>`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
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
`;

type TextInputProps = {
  name: string;
  labelText: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
};

export const TextInput = ({
  name,
  labelText,
  type,
  value,
  onChange,
  isError,
}: TextInputProps) => {
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
  );
};
