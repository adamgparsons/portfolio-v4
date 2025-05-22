import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { Button } from "..";
import { Link } from "react-router-dom"; // Replaced next/link
// Removed: import Image from "next/image";
import { ArticlePreview } from "../../../types/articles";
// Removed: import { relative } from "path";

interface OrderProps {
  order: number;
}

interface CardImageHolderProps extends OrderProps {
  backgroundColor: string;
}

const CardContainer = styled.div<OrderProps>`
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
`;

const CardImageHolder = styled.div<CardImageHolderProps>`
  grid-column: 1/4;
  border-bottom: 1px solid black;
  padding: 32px;
  height: 320px;

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
`;

const CardDescription = styled.div<OrderProps>`
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
`;
const ArticleType = styled.p`
  ${theme.textStyles.body}
  font-size: ${theme.fontSizes[0]};
  text-transform: uppercase;
  font-weight: 700;
  color: ${theme.colors.grey600};
  margin-bottom: ${theme.space[1]};
`;

interface ArticleHeadingProps {
  to: string;
  children: React.ReactNode;
}

const ArticleHeading = styled(
  ({ to, children, ...rest }: ArticleHeadingProps) => (
    <Link to={`/articles/${to}`} {...rest}> {/* Changed href to to and updated path */}
      {children}
    </Link>
  )
)`
  ${theme.textStyles.heading3}
  text-decoration: none;
  color: ${theme.colors.grey800};
  display: block;
  margin-bottom: ${theme.space[4]};
`;

const ArticleIntro = styled.p<OrderProps>`
  display: none;

  @media (min-width: ${theme.breakpoints[1]}) {
    ${({ order }) => order === 1 && ` display:block`}
  }
`;

type ArticleCardProps = {
  article: ArticlePreview;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <CardContainer key={article.path} order={article.order}>
      <CardImageHolder
        order={article.order}
        backgroundColor={article.themeColor}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <img
            src={`/${article.cover}`}
            alt="Descriptive alt text" // Keep alt text
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </CardImageHolder>
      <CardDescription order={article.order}>
        <ArticleType>
          {article.date} {"  |  "} {article.type}
        </ArticleType>
        <ArticleHeading to={article.path}>{article.title}</ArticleHeading>
        <ArticleIntro order={article.order}>{article.intro}</ArticleIntro>
        <Button to={`/articles/${article.path}`} themeColor={article.themeColor}> {/* Updated path for Button */}
          Read more
        </Button>
      </CardDescription>
    </CardContainer>
  );
};
