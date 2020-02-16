import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ArticleList from "../components/article-list"
import Footer from "../components/footer"

// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  return (
    <Layout page="home">
      <Helmet title="Adam Parsons" />
      <Hero />
      <ArticleList data={data}></ArticleList>
      <Footer />
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
                large: fixed(width: 400) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
                small: fixed(width: 275) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
