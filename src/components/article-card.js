import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import theme from "../theme"
import Button from "./Button"
import Img from "gatsby-image"

const CardContainer = styled.div`
  grid-column: span 7 / auto;
  border: 1px solid black;
  background-color: white;

  @media (min-width: ${theme.breakpoints[1]}) {
    grid-column: span 3 / auto;

    ${({ order }) =>
      order === 1 &&
      `
    display: grid;
    grid-column: span 5 / auto;
    grid-template-columns: 1fr 24px 1fr 24px 1fr; 
  `};

    ${({ order }) =>
      order === 2 &&
      `
    grid-column: 1/2;
  `};

    ${({ order }) =>
      order === 3 &&
      `
    grid-column: 3/4;
  `};

    ${({ order }) =>
      order === 4 &&
      `
    grid-column: 5/6;
  `};
  }

  @media (min-width: 980px) {
    ${({ order }) =>
      order === 1 &&
      `
  grid-template-columns: 1fr 36px 1fr 36px 1fr; 
  `}
  }
`

const CardImageHolder = styled.div`
  grid-column: 1/4;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 32px;

  ${({ backgroundColor }) =>
    `
background-color: ${backgroundColor}

  `};

  @media (min-width: ${theme.breakpoints[1]}) {
    ${({ order }) =>
      order === 1 &&
      `
    border-bottom: none;
    border-right: 1px solid black;
  `};
  }
`

const CardImage = styled.img`
  margin-bottom: 0px;
`

const CardDescription = styled.div`
  grid-column: 5/5;
  padding-top: ${theme.space[4]};
  padding-bottom: ${theme.space[4]};
  padding-right: ${theme.space[4]};
  padding-left: ${theme.space[4]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${theme.breakpoints[1]}) {
    ${({ order }) =>
      order === 1 &&
      `
padding-left: 0px;

  `};
  }
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

const ArticleIntro = styled.p`
  display: none;

  @media (min-width: ${theme.breakpoints[1]}) {
    ${({ order }) => order === 1 && ` display:block`}
  }
`

const ArticleCard = ({ post }) => {
  /* const { edges: posts } = data.allMarkdownRemark */
  return (
    <CardContainer key={post.frontmatter.id} order={post.frontmatter.order}>
      <CardImageHolder
        order={post.frontmatter.order}
        backgroundColor={post.frontmatter.themeColor}
      >
        <CardImage src={post.frontmatter.cover.publicURL} />
        {/* <Img fixed={post.frontmatter.cover.publicURL.childImageSharp.fixed} /> */}
      </CardImageHolder>
      <CardDescription order={post.frontmatter.order}>
        <ArticleType>{post.frontmatter.type}</ArticleType>
        <ArticleHeading to={post.frontmatter.path}>
          {post.frontmatter.title}
        </ArticleHeading>
        <ArticleIntro order={post.frontmatter.order}>
          {post.frontmatter.intro}
        </ArticleIntro>
        <Button
          to={post.frontmatter.path}
          themeColor={post.frontmatter.themeColor}
        >
          Read more
        </Button>
        {console.log(post)}
      </CardDescription>
    </CardContainer>
  )
}

export default ArticleCard
