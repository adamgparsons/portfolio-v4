import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
// Removed: import Head from "next/head";
import { Header, Footer } from "..";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
};

const Main = styled.main`
  max-width: ${theme.breakpoints[2]};
  margin: 0 auto;
  padding-left: ${theme.space[3]};
  padding-right: ${theme.space[3]};

  @media (min-width: 550px) {
    padding-left: ${theme.space[5]};
    padding-right: ${theme.space[5]};
  }
`;

export const Layout = ({ children, pageTitle }: LayoutProps) => {
  const backgroundImage =
    pageTitle === "Adam Parsons - Frontend Developer"
      ? "url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h30v30H0z%22%2F%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2214%22%20r%3D%221%22%20fill%3D%22%23A0AEC0%22%2F%3E%3C%2Fsvg%3E')"
      : "blue";

  return (
    <div style={{ backgroundImage }}>
      {/* Head component and its contents removed. Meta tags will be handled by react-helmet-async later. */}
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
