import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { Button } from "../Button";

const Section = styled.section`
  margin-top: ${theme.space[6]};
`;

const ResumeHeading = styled.h3`
  ${theme.textStyles.heading1}
  margin-bottom: 70px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    z-index: 0;
    background-image: url("images/squiggle-2.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 80px 80px;
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
      right: -48px;
      top: 27px;
    }
  }
`;
const ResumeContent = styled.div`
  display: grid;
  grid-template: "experience" "skills" "education";
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  margin-bottom: 100px;

  @media (min-width: 850px) {
    grid-template: "experience education" "skills education";
    grid-column-gap: ${theme.space[4]};
  }
`;
const Experience = styled.div`
  grid-area: experience;
  @media (min-width: 850px) {
    margin-bottom: ${theme.space[6]};
  }
`;

const Skills = styled.div`
  grid-area: skills;
  align-self: end;
`;
const SkillsContainer = styled.div`
  display: grid;
  grid-template: "design" "development";

  h4 {
    margin-bottom: ${theme.space[2]};
  }

  ul li {
    margin-bottom: ${theme.space[2]};
  }

  @media (min-width: 550px) {
    grid-template: "design development";
  }
  @media (min-width: 850px) {
    ul {
      margin-bottom: 0;

      li:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

const EduCourses = styled.div`
  grid-area: education;

  ul:last-child {
    margin-bottom: 0px;
    li:last-child {
      margin-bottom: 0px;
    }
  }
`;

const H3 = styled.h3`
  ${theme.textStyles.heading3};
  font-size: 30px;
  color: ${theme.colors.grey800};
  margin-bottom: 44px;
`;

const H4 = styled.h4`
  ${theme.textStyles.heading3};
  color: ${theme.colors.grey800};
  margin-bottom: ${theme.space[0]};
  font-weight: 800;
`;

const UL = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  margin-bottom: ${theme.space[6]};
`;

const Li = styled.li`
  margin-bottom: ${theme.space[6]};
`;

const SkillsList = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  margin-bottom: ${theme.space[6]};
  column-count: 2;
`;
const P = styled.p`
  ${theme.textStyles.body};
  font-size: 20px;
`;

const Date = styled.p`
  ${theme.textStyles.body};
  font-size: 18px;
  color: ${theme.colors.grey600};
`;

export const Resume = () => (
  <Section>
    <ResumeHeading>Résumé</ResumeHeading>
    <ResumeContent>
      <Experience>
        <H3>Work experience</H3>
        <UL>
          <Li>
            <H4>Senior Web Developer</H4>
            <P>Nala</P>
            <Date>January 2023 - Present</Date>
          </Li>
          <Li>
            <H4>Frontend Developer</H4>
            <P>Wayhome</P>
            <Date>August 2021 - January 2023</Date>
          </Li>
          <Li>
            <H4>Developer</H4>
            <P>Snook</P>
            <Date>August 2019 - August 2021</Date>
          </Li>
          <Li>
            <H4>UX Designer </H4>
            <P>Citizens Advice</P>
            <Date>November 2017 - July 2019</Date>
          </Li>
          <Li>
            <H4>UX Designer</H4>
            <P>British Red Cross</P>
            <Date>June 2016 - November 2017</Date>
          </Li>
          <Li>
            <H4>UX Designer</H4>
            <P>Freelance</P>
            <Date>December 2015 - June 2016</Date>
          </Li>
        </UL>
      </Experience>
      <Skills>
        <H3>Skills</H3>
        <SkillsContainer>
          <SkillsList>
            <Li>
              <P>HTML5/CSS</P>
            </Li>
            <Li>
              <P>SASS/Less</P>
            </Li>
            <Li>
              <P>Javascript/React</P>
            </Li>
            <Li>
              <P>UI Design</P>
            </Li>
            <Li>
              <P>Accessibility testing</P>
            </Li>

            <Li>
              <P>Node/Express</P>
            </Li>
            <Li>
              <P>Python/Django</P>
            </Li>
            <Li>
              <P>Mongodb/Postgres</P>
            </Li>
            <Li>
              <P>Unit & E2E testing</P>
            </Li>
            <Li>
              <P>Git/Github</P>
            </Li>
          </SkillsList>
        </SkillsContainer>
      </Skills>

      <EduCourses>
        <H3>Education</H3>
        <UL>
          <Li>
            <H4>General Assembly</H4>
            <P>User Experience Design</P>
            <Date>2015</Date>
          </Li>

          <Li>
            <H4>SAE Institute Sydney</H4>
            <P>Multimedia diploma</P>
            <Date>2006-2008</Date>
          </Li>
        </UL>
        <H3>Online Courses</H3>
        <UL>
          <Li>
            <H4>SuperHi</H4>
            <P>Ajax and APIs</P>
            <Date>January 2020 - February 2020</Date>
          </Li>

          <Li>
            <H4>Frontend Masters</H4>
            <P>Intermediate React</P>
            <Date>June 2019 – August 2019</Date>
          </Li>

          <Li>
            <H4>SuperHi</H4>
            <P>React.js</P>
            <Date>February 2019 – March 2019</Date>
          </Li>

          <Li>
            <H4>SuperHi</H4>
            <P>Advanced CSS and Javascript</P>
            <Date>September 2018 – November 2018</Date>
          </Li>
        </UL>
      </EduCourses>
    </ResumeContent>
    <Button themeColor="#FFE885" href="files/Adam_Parsons_CV.pdf">
      Download résumé
    </Button>
  </Section>
);
