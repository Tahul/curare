import React from 'react'
import styled from 'styled-components'

// Components
import { Form, Field } from 'react-final-form'

// Form validation
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'
import { Button, InputField } from '@heetch/flamingo-react'

const StyledCollectionForm = styled.div`
  .buttons {
    display: flex;

    .button {
      width: 50%;
    }
  }
`

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

const defaultState = {}

const CollectionForm = ({ loading, onCreateCollection, onCancel }) => {
  const onSubmit = async (payload) => {
    await onCreateCollection(payload)

    onCancel()
  }

  const handleCancel = () => {
    onCancel()
  }

  const validate = (values) => validator.validateForm

  const initialValues = {
    ...defaultState,
  }

  return (
    <StyledCollectionForm>
      <Form
        validate={validate}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title" type="text">
              {({ input, meta }) => (
                <InputField
                  helper={
                    meta.error && meta.touched
                      ? meta.error
                      : 'Your collection title'
                  }
                  invalid={!!(meta.error && meta.touched)}
                  label="Title"
                  id={input.name}
                  disabled={loading}
                  {...input}
                />
              )}
            </Field>

            <div className="buttons">
              <Button onClick={handleCancel} intent="primary" variant="outline">
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Save</Button>
            </div>
          </form>
        )}
      />
    </StyledCollectionForm>
  )
}

export default CollectionForm
