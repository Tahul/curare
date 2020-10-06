import React from 'react'
import styled from 'styled-components'

// Components
import { Button, InputField } from '@heetch/flamingo-react'
import { Field, Form } from 'react-final-form'

// Form validation
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'
import { useAuthDispatch } from '../contexts/auth'
import { registerAction } from '../contexts/auth/actions'

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
    email: [Validators.required.validator, Validators.email.validator],
    password: [Validators.required.validator],
    passwordConfirmation: [
      Validators.required.validator,
      passwordConfirmationValidator,
    ],
  },
}

const StyledRegister = styled.div``

const validator = createFinalFormValidation(validationSchema)

const Register = () => {
  const authDispatch = useAuthDispatch()

  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  const onSubmit = async ({ email, password }) => {
    await registerAction(authDispatch, {
      email,
      password,
    })
  }

  const validate = (values) => validator.validateForm(values)

  return (
    <StyledRegister>
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

            <Button type="submit">Submit</Button>
          </form>
        )}
      ></Form>
    </StyledRegister>
  )
}

export default Register
