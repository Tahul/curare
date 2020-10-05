import React from 'react'
import styled from 'styled-components'

// Components
import { Field, Form } from 'react-final-form'
import { Button, InputField } from '@heetch/flamingo-react'

const StyledRegister = styled.div``

const Register = () => {
  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  const onSubmit = (event) => {
    console.log(event)
  }

  const validate = ({ email, password, passwordConfirmation }) => {
    console.log({ email, password, passwordConfirmation })
  }

  return (
    <StyledRegister>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email">
              {(props) => (
                <InputField
                  helper="Your email address"
                  label="Email"
                  id={props.input.name}
                  onChange={props.input.onChange}
                  name={props.input.name}
                />
              )}
            </Field>

            <Field name="password">
              {(props) => (
                <InputField
                  helper="Your password"
                  label="Password"
                  id={props.input.name}
                  onChange={props.input.onChange}
                  name={props.input.name}
                />
              )}
            </Field>

            <Field name="passwordConfirmation">
              {(props) => (
                <InputField
                  helper="Your password confirmation"
                  label="Password confirmation"
                  id={props.input.name}
                  onChange={props.input.onChange}
                  name={props.input.name}
                />
              )}
            </Field>

            <Button type="submit">Submit</Button>
          </form>
        )}
      ></Form>
    </StyledRegister>
  )
}

export default Register
