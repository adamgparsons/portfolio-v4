import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import theme from "../theme"
import Button from "./Button"

const CardContainer = styled.div`
  grid-column: span 3 / auto;
  border: 1px solid black;
  background-color: white;

  ${({ order }) =>
    order === 1 &&
    `
    display: grid;
    grid-column: span 5 / auto;
    grid-template-columns: 1fr 36px 1fr 36px 1fr; 

  `}
  ${({ order }) =>
    order === 2 &&
    `
    grid-column: 1/2;
  `}

${({ order }) =>
  order === 3 &&
  `
    grid-column: 3/4;
  `}

${({ order }) =>
  order === 4 &&
  `
    grid-column: 5/6;
  `}


`

const CardImageHolder = styled.div`
  grid-column: 1/4;
  background-color: orange;
  border-bottom: 1px solid black;

  ${({ order }) =>
    order === 1 &&
    `
    border-bottom: none;
    border-right: 1px solid black;

  `}
`

const CardDescription = styled.div`
  grid-column: 5/5;
  padding-top: ${theme.space[4]};
  padding-bottom: ${theme.space[4]};
  padding-right: ${theme.space[4]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ order }) =>
    order !== 1 &&
    `
padding-left: ${theme.space[4]}

  `};
`
const ArticleType = styled.p`
  ${theme.textStyles.body}
  font-size: ${theme.fontSizes[0]};
  text-transform:uppercase;
  font-weight: 700;
  color: ${theme.colors.grey600};
`

const ArticleHeading = styled(props => <Link {...props} />)`
  ${theme.textStyles.heading3}
  text-decoration: none;
  color: ${theme.colors.grey800};
  display: block;
  margin-bottom: ${theme.space[4]};
`

const ArticleCard = ({ post }) => {
  /* const { edges: posts } = data.allMarkdownRemark */
  return (
    <CardContainer key={post.frontmatter.id} order={post.frontmatter.order}>
      <CardImageHolder order={post.frontmatter.order}>
        <img src={post.frontmatter.cover.publicURL} />
      </CardImageHolder>
      <CardDescription order={post.frontmatter.order}>
        <ArticleType>{post.frontmatter.type}</ArticleType>
        <ArticleHeading to={post.frontmatter.path}>
          {post.frontmatter.title}
        </ArticleHeading>
        {post.frontmatter.order === 1 && <p>{post.frontmatter.intro}</p>}
        <Button to={post.frontmatter.path}>Read more</Button>
      </CardDescription>
    </CardContainer>
  )
}

export default ArticleCard
