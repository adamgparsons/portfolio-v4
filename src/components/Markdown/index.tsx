import theme from "../../styles/theme";
import styled from "styled-components";

export const PostDate = styled.p`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  font-size: 20px;
  margin-bottom: 0px;
`;

export const MarkdownStyles = styled.div`
  margin-bottom: ${theme.space[7]}px;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  h1 {
    ${theme.textStyles.heading1};
    margin-top: ${theme.space[2]};
    margin-bottom: ${theme.space[5]};
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
    color: ${theme.colors.grey700};
    margin-bottom: ${theme.space[3]};
  }
  blockquote {
    margin-top: ${theme.space[5]};
    margin-bottom: ${theme.space[6]};
  }
  blockquote p {
    color: ${theme.colors.grey700};
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

  pre {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .video {
    margin-top: ${theme.space[6]};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }
`;
