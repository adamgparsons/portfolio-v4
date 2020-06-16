import React from "react"
import styled from "styled-components"
import TextInput from "./TextInput"
import TextArea from "./TextArea"
import theme from "../theme"
import Button from "./Button"

const Container = styled.div`
  max-width: ${theme.breakpoints[2]};
  margin: 0 auto;
  margin-top: ${theme.space[7]};
  padding-bottom: ${theme.space[5]};
`

const ContactContent = styled.div``

const ContactForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const ContactHeading = styled.p`
  ${theme.textStyles.heading1};
  margin-bottom: ${theme.space[5]};
  position: relative;
  display: inline-block;
`

const TagLine = styled.p`
  ${theme.textStyles.heading3};
  color: ${theme.colors.grey700};
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
`

const Contact = () => (
  <section>
    <Container>
      <ContactHeading>Contact</ContactHeading>
      <ContactContent>
        <TagLine>
          Have a project I might be interested in or just want to say hi? Get in
          touch{" "}
        </TagLine>
        <ContactForm
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <TextInput name="name" labelText="Name" />
          <TextInput name="email" labelText="Email" type="email" />
          <TextArea name="message" labelText="Message" />
          <Button themeColor={theme.colors.brandBlue}>Send email</Button>
        </ContactForm>
      </ContactContent>
    </Container>
  </section>
)

export default Contact
