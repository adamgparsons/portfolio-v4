import React, { useState } from "react"
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

const ErrorMessage = styled.p`
  ${theme.textStyles.body};
  color: ${theme.colors.validationRed};
`

const initialState = {
  name: "",
  nameError: "",
  email: "",
  emailError: "",
  message: "",
  messageError: "",
}
const Contact = () => {
  const [formState, setFormState] = useState(initialState)

  const validate = () => {
    let nameError = ""
    let emailError = ""
    let messageError = ""

    if (!formState.name) {
      nameError = "Please enter your name"
    }

    if (!formState.email.includes("@")) {
      emailError = "Please enter a valid email"
    }

    if (!formState.message) {
      messageError = "Please enter a message"
    }

    if (nameError || emailError || messageError) {
      setFormState({
        ...formState,
        nameError,
        emailError,
        messageError,
      })
      return false
    }
    return true
  }

  const [showSentMessage, setShowSentMessage] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const isValid = validate()
    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formState }),
      })
        .then(() => setShowSentMessage(true))
        .catch(error => alert(error))
      setFormState(initialState)
    }
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <section>
      <Container id="contact">
        <ContactHeading>Contact</ContactHeading>
        <ContactContent>
          {!showSentMessage ? (
            <>
              <TagLine>
                Have a project I might be interested in or just want to say hi?
                Get in touch{" "}
              </TagLine>
              <ContactForm
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <TextInput
                  name="name"
                  labelText="Name"
                  value={formState.name}
                  onChange={handleChange}
                  isError={formState.nameError}
                />
                <ErrorMessage>{formState.nameError}</ErrorMessage>
                <TextInput
                  name="email"
                  labelText="Email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  isError={formState.emailError}
                />
                <ErrorMessage>{formState.emailError}</ErrorMessage>
                <TextArea
                  name="message"
                  labelText="Message"
                  value={formState.message}
                  onChange={handleChange}
                  isError={formState.messageError}
                />
                <ErrorMessage>{formState.messageError}</ErrorMessage>
                <Button
                  themeColor={theme.colors.brandBlue}
                  type="submit"
                  isForm
                >
                  Send email
                </Button>
              </ContactForm>
            </>
          ) : (
            <TagLine>
              Thanks for the message. I will get back to you soon.
            </TagLine>
          )}
        </ContactContent>
      </Container>
    </section>
  )
}

export default Contact
