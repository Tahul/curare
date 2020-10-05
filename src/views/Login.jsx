import React from 'react'
import styled from 'styled-components'

// Components
import { Button, InputField } from '@heetch/flamingo-react'
import { Field, Form } from 'react-final-form'

const StyledLogin = styled.div``

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = (event) => {
    console.log(event)
  }

  const validate = ({ email, password }) => {
    console.log({ email, password })
  }

  return (
    <StyledLogin>
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

            <Button type="submit">Submit</Button>
          </form>
        )}
      ></Form>
    </StyledLogin>
  )
}

export default Login
