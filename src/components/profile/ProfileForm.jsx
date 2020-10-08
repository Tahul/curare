import React, { useState } from 'react'

// Components
import {
  Button,
  InputField,
  TextareaField,
  UploaderField,
} from '@heetch/flamingo-react'
import { Field, Form } from 'react-final-form'

// Form validation
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'

const validationSchema = {
  field: {
    first_name: [
      {
        validator: Validators.maxLength,
        customArgs: { length: 50 },
      },
    ],
    last_name: [
      {
        validator: Validators.maxLength,
        customArgs: { length: 50 },
      },
    ],
    description: [
      {
        validator: Validators.maxLength,
        customArgs: { length: 160 },
      },
    ],
  },
}

const validator = createFinalFormValidation(validationSchema)

const defaultState = {
  first_name: '',
  last_name: '',
  description: '',
  url: '',
}

export default () => {
  const loading = false

  const [avatar, setAvatar] = useState([])

  const initialValues = {
    ...defaultState,
  }

  const onSubmit = async (payload) => {
    console.log(payload)
  }

  const handleImageUpload = async (event) => {
    console.log(event)
  }

  const validate = (values) => validator.validateForm(values)

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <UploaderField
            accept="image/jpeg,image.png"
            id="image-uploader"
            onChange={handleImageUpload}
            id="avatar"
            label="Avatar"
            value={avatar}
          />

          <Field name="first_name">
            {({ input, meta }) => (
              <InputField
                helper={
                  meta.error && meta.touched ? meta.error : 'Your first name'
                }
                invalid={!!(meta.error && meta.touched)}
                label="First name"
                id={input.name}
                {...input}
              />
            )}
          </Field>

          <Field name="last_name">
            {({ input, meta }) => (
              <InputField
                helper={
                  meta.error && meta.touched ? meta.error : 'Your last name'
                }
                invalid={!!(meta.error && meta.touched)}
                label="Last name"
                id={input.name}
                {...input}
              />
            )}
          </Field>

          <Field name="description">
            {({ input, meta }) => (
              <TextareaField
                helper={
                  meta.error && meta.touched ? meta.error : 'Your description'
                }
                invalid={!!(meta.error && meta.touched)}
                label="Description"
                id={input.name}
                {...input}
              />
            )}
          </Field>

          <Field name="url">
            {({ input, meta }) => (
              <InputField
                helper={
                  meta.error && meta.touched ? meta.error : 'Your website'
                }
                invalid={!!(meta.error && meta.touched)}
                label="Website"
                id={input.name}
                {...input}
              />
            )}
          </Field>

          <Button isLoading={loading} style={{ width: '100%' }} type="submit">
            Save
          </Button>
        </form>
      )}
    ></Form>
  )
}
