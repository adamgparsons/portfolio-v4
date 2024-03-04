import theme from "../../styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ButtonHolder = styled.div`
  position: relative;
  width: fit-content;
  height: 48px;
  z-index: 1;
  margin-top: ${theme.space[3]};
  margin-bottom: ${theme.space[3]};
`;

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

  &:hover {
    transform: translate(6px, 6px);
    cursor: pointer;
  }
`;

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
}

const InternalLink = styled(({ to, ...rest }: InternalLinkProps) => (
  <Link href={to} {...rest} />
))`
  ${theme.textStyles.body};
  ${ButtonStyling}
`;

const ExternalLink = styled.a`
  ${theme.textStyles.body};
  ${ButtonStyling}
`;
const FormButton = styled.button`
  ${theme.textStyles.body};
  ${ButtonStyling}
`;

const Shadow = styled.span`
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
`;

type ButtonProps = {
  to?: string;
  children: React.ReactNode;
  themeColor?: string;
  href?: string;
  isForm?: boolean;
};

export const Button = ({
  to,
  children,
  themeColor,
  href,
  isForm,
}: ButtonProps) => {
  // if button is an internal link
  const handleButtonClick = () => {
    if (href) {
      window.location.href = href;
    }
    // additional logic if needed
  };
  if (to && typeof to === "string") {
    return (
      <ButtonHolder>
        <InternalLink to={to}>{children}</InternalLink>
        <Shadow color={themeColor} />
      </ButtonHolder>
    );
  }

  // if button is a form button
  if (isForm) {
    return (
      <ButtonHolder>
        <FormButton onClick={handleButtonClick} type="submit">
          {children}
        </FormButton>
        <Shadow color={themeColor} />
      </ButtonHolder>
    );
  }

  //if anything else use as <a>
  else {
    return (
      <ButtonHolder>
        <ExternalLink href={href}>{children}</ExternalLink>
        <Shadow color={themeColor} />
      </ButtonHolder>
    );
  }
};
