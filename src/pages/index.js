import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Resume from "../components/resume"
import ArticleList from "../components/article-list"
import Contact from "../components/contact"
import Footer from "../components/footer"
import { graphql } from "gatsby"

// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  return (
    <Layout page="home">
      <Helmet title="Adam Parsons">
        <meta
          name="description"
          content="Adam Parsons, developer based in London"
        />
      </Helmet>
      <Hero />
      <ArticleList data={data}></ArticleList>
      <Resume />
      <Contact />
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
            date
            cover {
              publicURL
              childImageSharp {
                large: fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
                small: fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
