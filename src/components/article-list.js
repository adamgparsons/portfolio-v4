import React from "react"
import styled from "styled-components"
import theme from "../theme"
import ArticleCard from "../components/article-card"
import squiggle from "../images/squiggle.svg"

const Container = styled.section`
  margin-bottom: 120px;
  animation: 1s ease 0s normal forwards 1 fadein;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const ListHeading = styled.h2`
  ${theme.textStyles.heading1}
  margin-bottom: 50px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    width: 70px;
    height: 70px;
    z-index: 0;
    background-image: url(${squiggle});
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 70px 70px;
    right: -10px;
    top: 40px;
    transform: rotate(9deg);
    display: none;
  }
  @media (min-width: ${theme.breakpoints[1]}) {
    &::after {
      right: -80px;
      top: 11px;
      display: inline;
    }
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    &::after {
      right: -80px;
      top: 11px;
    }
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px 1fr 24px 1fr;

  grid-row-gap: 48px;

  @media (min-width: ${theme.breakpoints[1]}) {
    grid-row-gap: 24px;
  }

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
            return <ArticleCard key={post.id} post={post} />
          })}
      </Grid>
    </Container>
  )
}

export default ArticleList
