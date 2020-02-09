import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import theme from "../theme"
import ArticleCard from "../components/article-card"

const Container = styled.div``

const ListHeading = styled.h3`
  ${theme.textStyles.heading1}
  margin-bottom: ${theme.space[5]};
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px 1fr 24px 1fr;
  grid-row-gap: 24px;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 36px 1fr 36px 1fr;
    grid-row-gap: 36px;
  }
`

const ArticleList = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Container>
      <ListHeading>Some stuff I've made</ListHeading>
      <Grid>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <ArticleCard post={post} />

              /* <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.intro}</h2>
              <p>{post.excerpt}</p>
              <img src={post.frontmatter.cover.publicURL} />
            </div> */
            )
          })}
      </Grid>
    </Container>
  )
}

export default ArticleList
