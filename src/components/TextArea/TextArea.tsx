import theme from "../../styles/theme";
import React from "react";
import styled from "styled-components";

const Label = styled.label`
  ${theme.textStyles.body};
  font-weight: 800;
  margin-top: ${theme.space[5]};
`;

interface TextAreaInputProps {
  isError?: boolean;
}

const TextAreaInput = styled.textarea<TextAreaInputProps>`
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
  height: 150px;
  transition: 0.15s ease-in outline, 0.15s ease-in background-color;

  &:focus {
    outline: solid ${theme.colors.brandBlue};
    background-color: white;
  }
`;

type TextAreaProps = {
  name: string;
  labelText: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isError?: boolean;
};

export const TextArea = ({
  name,
  labelText,
  value,
  onChange,
  isError,
}: TextAreaProps) => {
  return (
    <>
      <Label htmlFor={name}>{labelText}</Label>
      <TextAreaInput
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        isError={isError}
      ></TextAreaInput>
    </>
  );
};
