/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import theme from "../theme"
import { Helmet } from "react-helmet"
import favicon32 from "../images/favicon-32x32.png"
import favicon16 from "../images/favicon-16x16.png"

import Header from "./header"
import "./layout.css"

const LayoutWrapper = styled.div`
  background-image: ${props =>
    props.page === "home"
      ? "url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h30v30H0z%22%2F%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2214%22%20r%3D%221%22%20fill%3D%22%23A0AEC0%22%2F%3E%3C%2Fsvg%3E');"
      : "blue"};
`
const Layout = ({ children, page }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Main = styled.main`
    max-width: ${theme.breakpoints[2]};
    margin: 0 auto;
    padding-left: ${theme.space[3]};
    padding-right: ${theme.space[3]};

    @media (min-width: 550px) {
      padding-left: ${theme.space[5]};
      padding-right: ${theme.space[5]};
    }
  `

  return (
    <LayoutWrapper page={page}>
      <Helmet>
        <html lang="en" />
        <title>Adam Parsons</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
        <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />

        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Adam Parsons" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
