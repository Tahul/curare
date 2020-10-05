import React from 'react'
import styled from 'styled-components'

// Components
import { Button, InputField } from '@heetch/flamingo-react'
import { Field, Form } from 'react-final-form'

// Form validation
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'

const validationSchema = {
  field: {
    email: [Validators.required.validator, Validators.email.validator],
    password: [Validators.required.validator],
  },
}

const validator = createFinalFormValidation(validationSchema)

const StyledLogin = styled.div``

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = (event) => {
    console.log(event)
  }

  const validate = (values) => validator.validateForm(values)

  return (
    <StyledLogin>
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

            <Button type="submit">Submit</Button>
          </form>
        )}
      ></Form>
    </StyledLogin>
  )
}

export default Login
