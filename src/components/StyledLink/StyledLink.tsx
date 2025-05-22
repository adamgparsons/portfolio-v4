import { Link as RouterLink } from "react-router-dom"; // Removed RouterLinkProps
import React from "react";

import styled from "styled-components";

const StyledLinkWithStyle = styled(RouterLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

type StyledLinkProps = {
  to: string; // Changed href to to
  children: React.ReactNode;
  className?: string;
};

export const StyledLink = ({
  children,
  // passHref removed
  ...props // props will contain 'to' and 'className'
}: StyledLinkProps) => {
  // Destructure to separate 'to' from other props if necessary,
  // but RouterLink can handle extra props.
  // The main issue is the explicit to={props.to} and then spreading ...props which also contains 'to'.
  // We can simplify by just spreading props if StyledLinkProps ensures 'to' is present.
  // Or, more explicitly:
  const { to, className, ...rest } = props as Omit<StyledLinkProps, 'children'>; // Cast to avoid TS error on rest
  return (
    <StyledLinkWithStyle to={to} className={className} {...rest}> 
      {children}
    </StyledLinkWithStyle>
  );
};
