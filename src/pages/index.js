import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ArticleList from "../components/article-list"

// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  return (
    <Layout>
      <Hero />
      <ArticleList data={data}></ArticleList>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            order
            type
            intro
            path
            themeColor
            cover {
              publicURL
              childImageSharp {
                sizes(maxWidth: 2000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
