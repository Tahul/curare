import { Button, InputField } from '@heetch/flamingo-react'
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'
import React from 'react'
import { Field, Form } from 'react-final-form'
import { useAuthDispatch, useAuthState } from '../../contexts/auth'
import { registerAction } from '../../contexts/auth/actions'
import useActionsSounds from '../../hooks/useActionsSounds'

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

const userNameValidator = ({ values }) => {
  if (/^[a-zA-Z0-9_]{1,15}$/.test(values.name)) {
    return {
      type: 'USERNAME_VALIDATION',
      succeeded: true,
    }
  }

  return {
    type: 'USERNAME_VALIDATION',
    succeeded: false,
    message: 'Your name must be alphanumeric',
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
      {
        validator: Validators.maxLength,
        customArgs: {
          length: 15,
        },
      },
      {
        validator: userNameValidator,
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

const validator = createFinalFormValidation(validationSchema)

const defaultState =
  import.meta.env.MODE === 'development'
    ? {
        name: import.meta.env.SNOWPACK_PUBLIC_DEV_USERNAME,
        email: import.meta.env.SNOWPACK_PUBLIC_DEV_EMAIL,
        password: import.meta.env.SNOWPACK_PUBLIC_DEV_PASSWORD,
        passwordConfirmation: import.meta.env.SNOWPACK_PUBLIC_DEV_PASSWORD,
      }
    : {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }

const RegisterForm = () => {
  const { playSuccess } = useActionsSounds()
  const { loading } = useAuthState()
  const authDispatch = useAuthDispatch()

  const initialValues = {
    ...defaultState,
  }

  const onSubmit = async ({ name, email, password }) => {
    await registerAction(authDispatch, {
      name,
      email,
      password,
    })

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
                disabled={loading}
                {...input}
              />
            )}
          </Field>

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
                autocomplete="new-password"
                {...input}
              />
            )}
          </Field>

          <Field name="passwordConfirmation" type="password">
            {({ input, meta }) => (
              <InputField
                helper={
                  meta.error && meta.touched ? meta.error : 'Your email address'
                }
                invalid={!!(meta.error && meta.touched)}
                label="Password confirmation"
                id={input.name}
                disabled={loading}
                {...input}
              />
            )}
          </Field>

          <Button isLoading={loading} style={{ width: '100%' }} type="submit">
            Register
          </Button>
        </form>
      )}
    ></Form>
  )
}

export default RegisterForm
