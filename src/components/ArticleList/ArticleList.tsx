import React from "react";
import styled from "styled-components";
// Removed: import squiggle from "../../../../public/images/squiggle.svg";
import { ArticlePreview } from "../../../types/articles";
import theme from "../../styles/theme";
import { ArticleCard } from "..";

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
`;

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
    background-image: url("images/squiggle.svg");
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
`;
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
`;

type ArticleListProps = {
  articles: ArticlePreview[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <Container>
      <ListHeading>Some stuff I&apos;ve made</ListHeading>
      <Grid>
        {articles
          .filter((article) => article.title)
          .sort((a, b) => a.order - b.order)
          .map((article, id) => {
            return <ArticleCard key={id} article={article} />;
          })}
      </Grid>
    </Container>
  );
};
