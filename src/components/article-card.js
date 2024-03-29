import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../theme"
import Button from "./Button"
import Img from "gatsby-image"

const CardContainer = styled.div`
  grid-column: span 5 / auto;
  border: 1px solid black;
  background-color: white;
  min-height: 0;
  min-width: 0;

  @media (min-width: ${theme.breakpoints[1]}) {
    grid-column: span 2 / auto;

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

    ${({ order }) =>
    order === 5 &&
    `
grid-column: 1/2;
`};

    ${({ order }) =>
    order === 6 &&
    `
grid-column: 3/4;
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
  padding: 32px;
  height: 320px;
  /* display: flex;
  flex-direction: column; */

  ${({ backgroundColor }) => `
background-color: ${backgroundColor};
  `}

  @media (min-width: ${theme.breakpoints[1]}) {
    ${({ order }) =>
    order === 1 &&
    `
      flex-direction: row;
    border-bottom: none;
    border-right: 1px solid black;
    padding: 32px;
  `};
  }
`

const CardDescription = styled.div`
  grid-column: 5/5;
  padding-top: ${theme.space[4]};
  padding-bottom: ${theme.space[4]};
  padding-right: ${theme.space[4]};
  padding-left: ${theme.space[4]};

  @media (min-width: ${theme.breakpoints[1]}) {
    ${({ order }) =>
    order === 1 &&
    `

padding-left: 0px;
padding-bottom: 0px;
  `};
  }
`
const ArticleType = styled.p`
  ${theme.textStyles.body}
  font-size: ${theme.fontSizes[0]};
  text-transform:uppercase;
  font-weight: 700;
  color: ${theme.colors.grey600};
  margin-bottom:${theme.space[1]};
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
  console.log(post)
  return (
    <CardContainer key={post.frontmatter.id} order={post.frontmatter.order}>
      <CardImageHolder
        order={post.frontmatter.order}
        backgroundColor={post.frontmatter.themeColor}
      >
        <Img
          fluid={
            post.frontmatter.order === 1
              ? post.frontmatter.cover.childImageSharp.large
              : post.frontmatter.cover.childImageSharp.small
          }
          // the 3rd post has a vertical image rather than a horizontal one
          style={
            post.order === 4
              ? {
                maxWidth: "340px",
                margin: "0 auto",
                position: "relative",
                // top: "50%",
                // transform: "translateY(-50%)",
              }
              : {
                maxWidth: "400px",
                margin: "0 auto",
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
              }
          }
        // imgStyle={{ objectFit: "contain" }}
        />
      </CardImageHolder>
      <CardDescription order={post.frontmatter.order}>
        <ArticleType>
          {post.frontmatter.date} {"  |  "} {post.frontmatter.type}
        </ArticleType>
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
      </CardDescription>
    </CardContainer>
  )
}

export default ArticleCard
