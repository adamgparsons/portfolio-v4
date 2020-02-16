import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import styled from "styled-components"
import theme from "../theme"

const MarkdownStyles = styled.div`
  margin-bottom: ${theme.space[7]}px;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  div {
    h1 {
      ${theme.textStyles.heading1};
      margin-top: ${theme.space[6]};
      margin-bottom: ${theme.space[5]};
    }
  }

  h2 {
    ${theme.textStyles.heading2};
    font-size: 28px;
    margin-top: ${theme.space[6]};
    margin-bottom: ${theme.space[3]};
  }
  h3 {
    ${theme.textStyles.heading3};
    font-size: 20px;
    font-weight: bold;
    margin-top: 32px;
    margin-bottom: ${theme.space[1]};
  }
  p {
    ${theme.textStyles.body};
    font-size: 20px;
    color: ${theme.colors.midGray};
    margin-bottom: ${theme.space[3]};
  }
  blockquote {
    margin-top: ${theme.space[5]};
    margin-bottom: ${theme.space[6]};
  }
  blockquote p {
    color: ${theme.colors.midGray};
    font-style: italic;
  }
  a {
    color: inherit;
    transition: background-color 0.25s;
    box-shadow: inset 0 -0.175em white, inset 0 -0.22em #4a5568;
    transition: color 0.2s ease-in, box-shadow 0.2s ease-in;
    :hover {
      color: #4e97d0;
      box-shadow: inset 0 -0.175em white, inset 0 -0.22em #4e97d0;
    }
  }
  img {
    max-width: 100%;
    margin-top: ${theme.space[5]};
    margin-bottom: ${theme.space[5]};
  }
  .video {
    margin: 0 auto;
    display: block;
    margin-top: ${theme.space[6]};
  }

  pre {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`
// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <div className="blog-post-container">
        <Helmet title={`${post.frontmatter.title}`} />
        <MarkdownStyles>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </MarkdownStyles>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
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
`
