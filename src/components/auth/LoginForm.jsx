import React from 'react'

// Contexts
import { loginAction } from '../../contexts/auth/actions'
import { useAuthDispatch, useAuthState } from '../../contexts/auth'

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

const defaultState =
  import.meta.env.MODE === 'development'
    ? {
        email: import.meta.env.SNOWPACK_PUBLIC_DEV_EMAIL,
        password: import.meta.env.SNOWPACK_PUBLIC_DEV_PASSWORD,
      }
    : {
        email: '',
        password: '',
      }

const LoginForm = () => {
  const { loading } = useAuthState()
  const authDispatch = useAuthDispatch()

  const initialValues = {
    ...defaultState,
  }

  const onSubmit = async (payload) => {
    await loginAction(authDispatch, payload)
  }

  const validate = (values) => validator.validateForm

  return (
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
                  meta.error && meta.touched ? meta.error : 'Your email address'
                }
                invalid={!!(meta.error && meta.touched)}
                label="Email"
                id={input.name}
                disabled={loading}
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
                disabled={loading}
                {...input}
              />
            )}
          </Field>

          <Button isLoading={loading} style={{ width: '100%' }} type="submit">
            Login
          </Button>
        </form>
      )}
    />
  )
}

export default LoginForm
