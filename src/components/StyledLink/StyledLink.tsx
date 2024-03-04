import Link, { LinkProps } from "next/link";
import React from "react";

import styled from "styled-components";

const StyledLinkWithStyle = styled(Link)`
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
  href: string;
  children: React.ReactNode;
  passHref?: boolean;
  className?: string;
};

export const StyledLink = ({
  children,
  passHref,
  ...props
}: StyledLinkProps) => (
  <StyledLinkWithStyle {...props}>{children}</StyledLinkWithStyle>
);
