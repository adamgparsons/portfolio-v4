import React from "react"
import styled from "styled-components"
import theme from "../theme"
import squiggle from "../images/squiggle-2.svg"
import Button from "../components/Button"

const Section = styled.section`
  margin-top: ${theme.space[6]};
`

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
    background-image: url(${squiggle});
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
`
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
`
const Experience = styled.div`
  grid-area: experience;
`

const Skills = styled.div`
  grid-area: skills;
  align-self: end;
`
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
`

const DesignSkills = styled.div`
  grid-area: design;
`
const DevSkills = styled.div`
  grid-area: development;
`
const EduCourses = styled.div`
  grid-area: education;

  ul:last-child {
    margin-bottom: 0px;
    li:last-child {
      margin-bottom: 0px;
    }
  }
`

const H3 = styled.h3`
  ${theme.textStyles.heading3};
  font-size: 30px;
  color: ${theme.colors.grey800};
  margin-bottom: 44px;
`

const H4 = styled.h4`
  ${theme.textStyles.heading3};
  color: ${theme.colors.grey800};
  margin-bottom: ${theme.space[0]};
  font-weight: 800;
`

const UL = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  margin-bottom: ${theme.space[6]};

  li {
    margin-bottom: ${theme.space[6]};
  }
`
const P = styled.p`
  ${theme.textStyles.body};
  font-size: 20px;
`

const Date = styled.p`
  ${theme.textStyles.body};
  font-size: 18px;
  color: ${theme.colors.grey600};
`

const Resume = () => (
  <Section>
    <ResumeHeading>Résumé</ResumeHeading>
    <ResumeContent>
      <Experience>
        <H3>Work experience</H3>
        <UL>
          <li>
            <H4>Interaction Designer</H4>
            <P>Snook</P>
            <Date>August 2019 - Present</Date>
          </li>
          <li>
            <H4>UX Designer </H4>
            <P>Citizens Advice</P>
            <Date>November 2017 - July 2019</Date>
          </li>
          <li>
            <H4>UX Designer</H4>
            <P>British Red Cross</P>
            <Date>June 2016 - November 2017</Date>
          </li>
          <li>
            <H4>UX Designer</H4>
            <P>Freelance</P>
            <Date>December 2015 - June 2016</Date>
          </li>
        </UL>
      </Experience>
      <Skills>
        <H3>Skills</H3>
        <SkillsContainer>
          <DesignSkills>
            <H4>
              Design <span aria-hidden="true">🖌</span>
            </H4>
            <UL>
              <li>
                <P>Product Design</P>
              </li>
              <li>
                <P>UI/UX Design</P>
              </li>
              <li>
                <P>Visual Design</P>
              </li>
              <li>
                <P>Wireframing</P>
              </li>
              <li>
                <P>Prototyping</P>
              </li>
            </UL>
          </DesignSkills>
          <DevSkills>
            <H4>
              Development <span aria-hidden="true">👨‍💻</span>
            </H4>
            <UL>
              <li>
                <P>HTML5/CSS</P>
              </li>
              <li>
                <P>SASS/Less</P>
              </li>
              <li>
                <P>Javascript</P>
              </li>
              <li>
                <P>React</P>
              </li>
              <li>
                <P>Git/Github</P>
              </li>
            </UL>
          </DevSkills>
        </SkillsContainer>
      </Skills>

      <EduCourses>
        <H3>Education</H3>
        <UL>
          <li>
            <H4>General Assembly</H4>
            <P>User Experience Design</P>
            <Date>2015</Date>
          </li>

          <li>
            <H4>SAE Institute Sydney</H4>
            <P>Multimedia diploma</P>
            <Date>2006-2008</Date>
          </li>
        </UL>
        <H3>Online Courses</H3>
        <UL>
          <li>
            <H4>SuperHi</H4>
            <P>Ajax and APIS</P>
            <Date>January 2020 - February 2020</Date>
          </li>

          <li>
            <H4>Frontend Masters</H4>
            <P>Intermediate React</P>
            <Date>June 2019 – August 2019</Date>
          </li>

          <li>
            <H4>SuperHi</H4>
            <P>React.js</P>
            <Date>February 2019 – March 2019</Date>
          </li>

          <li>
            <H4>SuperHi</H4>
            <P>Advanced CSS and Javascript</P>
            <Date>September 2018 – November 2018</Date>
          </li>
        </UL>
      </EduCourses>
    </ResumeContent>
    {/* need to add pdf link to button */}
    {/* <Button themeColor="#FFE885">Download résumé</Button> */}
  </Section>
)

export default Resume
