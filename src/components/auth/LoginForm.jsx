import { Button, InputField, theme } from '@heetch/flamingo-react'
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'
import React from 'react'
import { Field, Form } from 'react-final-form'
import { useAuthDispatch, useAuthState } from '../../contexts/auth'
import { loginAction } from '../../contexts/auth/actions'
import useActionsSounds from '../../hooks/useActionsSounds'
import SocialButtons from './SocialButtons'

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
  const { playSuccess } = useActionsSounds()
  const { loading } = useAuthState()
  const authDispatch = useAuthDispatch()

  const initialValues = {
    ...defaultState,
  }

  const onSubmit = async (payload) => {
    await loginAction(authDispatch, payload)

    playSuccess()
  }

  const validate = (values) => validator.validateForm(values)

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

          <Button
            isLoading={loading}
            style={{
              width: '100%',
              marginTop: theme.space.xl,
              marginBottom: theme.space.xl,
            }}
            type="submit"
          >
            Login
          </Button>

          <SocialButtons />
        </form>
      )}
    />
  )
}

export default LoginForm
