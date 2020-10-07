import React from 'react'
import styled from 'styled-components'

// Contexts
import { useAuthDispatch, useAuthState } from '../contexts/auth'
import { registerAction } from '../contexts/auth/actions'

// Components
import { Redirect } from 'react-router-dom'
import { Button, InputField } from '@heetch/flamingo-react'
import { Field, Form } from 'react-final-form'

// Form validation
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'

const passwordConfirmationValidator = ({ values }) => {
  if (values.passwordConfirmation !== values.password) {
    return {
      type: 'PASSWORD_CONFIRMATION',
      succeeded: false,
      message:
        'The password confirmation must be the same as the password field.',
    }
  }

  return {
    type: 'PASSWORD_CONFIRMATION',
    succeeded: true,
  }
}

const validationSchema = {
  field: {
    name: [
      Validators.required.validator,
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
      },
    ],
    email: [Validators.required.validator, Validators.email.validator],
    password: [
      Validators.required.validator,
      {
        validator: Validators.minLength,
        customArgs: { length: 6 },
      },
    ],
    passwordConfirmation: [
      Validators.required.validator,
      {
        validator: Validators.minLength,
        customArgs: { length: 6 },
      },
      passwordConfirmationValidator,
    ],
  },
}

const StyledRegister = styled.div``

const validator = createFinalFormValidation(validationSchema)

const Register = () => {
  const { isLoggedIn } = useAuthState()
  const authDispatch = useAuthDispatch()

  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  const onSubmit = async ({ name, email, password }) => {
    await registerAction(authDispatch, {
      name,
      email,
      password,
    })
  }

  const validate = (values) => validator.validateForm(values)

  return (
    <StyledRegister>
      {isLoggedIn ? <Redirect to="/profile" /> : null}

      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <InputField
                  helper={
                    meta.error && meta.touched
                      ? meta.error
                      : `Will be used as @${input.value || 'Username'}.`
                  }
                  invalid={!!(meta.error && meta.touched)}
                  label="Username"
                  id={input.name}
                  {...input}
                />
              )}
            </Field>

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

            <Field name="passwordConfirmation" type="password">
              {({ input, meta }) => (
                <InputField
                  helper={
                    meta.error && meta.touched
                      ? meta.error
                      : 'Your email address'
                  }
                  invalid={!!(meta.error && meta.touched)}
                  label="Password confirmation"
                  id={input.name}
                  {...input}
                />
              )}
            </Field>

            <Button style={{ width: '100%' }} type="submit">
              Register
            </Button>
          </form>
        )}
      ></Form>
    </StyledRegister>
  )
}

export default Register
