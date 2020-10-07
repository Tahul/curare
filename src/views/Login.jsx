import React from 'react'
import styled from 'styled-components'

// Contexts
import { useAuthDispatch, useAuthState } from '../contexts/auth'
import { loginAction } from '../contexts/auth/actions'

// Components
import { Button, InputField } from '@heetch/flamingo-react'
import { Field, Form } from 'react-final-form'

// Form validation
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'

const validationSchema = {
  field: {
    email: [Validators.required.validator, Validators.email.validator],
    password: [
      Validators.required.validator,
      {
        validator: Validators.minLength,
        customArgs: { length: 6 },
      },
    ],
  },
}

const validator = createFinalFormValidation(validationSchema)

const StyledLogin = styled.div``

const Login = () => {
  const { isLoggedIn } = useAuthState()
  const authDispatch = useAuthDispatch()

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = async (payload) => {
    await loginAction(authDispatch, payload)
  }

  const validate = (values) => validator.validateForm(values)

  return (
    <StyledLogin>
      {isLoggedIn ? <Redirect to="/profile" /> : null}

      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <InputField
                  helper={
                    meta.error && meta.touched
                      ? meta.error
                      : 'Your email address'
                  }
                  invalid={!!(meta.error && meta.touched)}
                  label="Email"
                  id={input.name}
                  {...input}
                />
              )}
            </Field>

            <Field name="password" type="password">
              {({ input, meta }) => (
                <InputField
                  helper={
                    meta.error && meta.touched ? meta.error : 'Your password'
                  }
                  invalid={!!(meta.error && meta.touched)}
                  label="Password"
                  id={input.name}
                  {...input}
                />
              )}
            </Field>

            <Button style={{ width: '100%' }} type="submit">
              Login
            </Button>
          </form>
        )}
      ></Form>
    </StyledLogin>
  )
}

export default Login
