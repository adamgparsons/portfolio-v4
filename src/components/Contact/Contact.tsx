import React, { useState } from "react";
import styled from "styled-components";
import { TextArea } from "../TextArea";
import theme from "../../styles/theme";
import { Button, TextInput } from "..";

const Container = styled.div`
  max-width: ${theme.breakpoints[2]};
  margin: 0 auto;
  margin-top: ${theme.space[7]};
  padding-bottom: ${theme.space[5]};
`;

const ContactContent = styled.div``;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ContactHeading = styled.p`
  ${theme.textStyles.heading1};
  margin-bottom: ${theme.space[5]};
  position: relative;
  display: inline-block;
`;

const TagLine = styled.p`
  ${theme.textStyles.heading3};
  color: ${theme.colors.grey700};
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
`;

const ErrorMessage = styled.p`
  ${theme.textStyles.body};
  color: ${theme.colors.validationRed};
`;

const initialState = {
  name: "",
  email: "",
  message: "",
};

const successMessage = "Thanks for reaching out! I'll get back to you soon.";
export const Contact = () => {
  const [formState, setFormState] = useState(initialState);
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      );
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(successMessage);
        form.reset();
        setFormState(initialState); // Reset form state if needed
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <Container id="contact">
        <ContactHeading>Contact</ContactHeading>

        <ContactContent>
          {result === successMessage ? (
            <TagLine>{result}</TagLine>
          ) : (
            <>
              <TagLine>
                Have a project I might be interested in or just want to say hi?
                Get in touch
              </TagLine>
              <ContactForm onSubmit={handleSubmit} data-netlify="true">
                <TextInput
                  name="name"
                  labelText="Name"
                  value={formState.name}
                  onChange={handleChange}
                  //   required
                />
                <TextInput
                  name="email"
                  labelText="Email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  //   required
                />
                <TextArea
                  name="message"
                  labelText="Message"
                  value={formState.message}
                  onChange={handleChange}
                />
                <Button themeColor={theme.colors.brandBlue} isForm>
                  Send email
                </Button>
              </ContactForm>
            </>
          )}
        </ContactContent>
      </Container>
    </section>
  );
};
