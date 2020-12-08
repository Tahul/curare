import React from 'react'
import styled from 'styled-components'
import { base64MimeType, toDataURL } from '../../plugins/file'

// Components
import { Form, Field } from 'react-final-form'
import { Button, InputField, UploaderField } from '@heetch/flamingo-react'

// Form validation
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'

// Hooks
import useIsMounted from '../../hooks/useIsMounted'
import useActionsSounds from '../../hooks/useActionsSounds'

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
    title: [Validators.required.validator],
  },
}

const validator = createFinalFormValidation(validationSchema)

const defaultState = {
  title: '',
  image_url: null,
}

const CollectionForm = ({
  collection = false,
  loading,
  onSubmit,
  onImageUpdate,
  onCancel,
}) => {
  const { playBack } = useActionsSounds()
  const isMounted = useIsMounted()
  const [image, setImage] = React.useState([])
  const [currentImage, setCurrentImage] = React.useState(false)

  const handleSubmit = async ({ title }) => {
    const collection = await onSubmit({ title })

    if (currentImage !== false) {
      onImageUpdate({ id: collection.id, image: currentImage })
    }

    onCancel()
  }

  const handleCancel = () => {
    playBack()

    onCancel()
  }

  const handleImageUpload = async (image) => {
    setCurrentImage(image[0] || null)
  }

  const validate = (values) => validator.validateForm(values)

  const initialValues = collection
    ? {
        ...defaultState,
        ...collection,
      }
    : {
        ...defaultState,
      }

  React.useEffect(() => {
    const fetchAvatar = async () => {
      if (collection?.image_url) {
        const file = await toDataURL(collection.image_url)
        const mimeType = base64MimeType(file)

        if (isMounted) {
          setImage([
            {
              type: mimeType,
              name: `avatar.${mimeType.split('/')[1]}`,
              preview: file,
            },
          ])
        }
      }
    }

    fetchAvatar()
  }, [collection, isMounted])

  return (
    <StyledCollectionForm>
      <Form
        validate={validate}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <UploaderField
              accept="image/jpg,jpeg,png"
              onChange={handleImageUpload}
              id="image"
              label="Image"
              value={image}
              disabled={loading}
            />

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
              <Button
                onClick={handleCancel}
                intent="primary"
                variant="outline"
                isLoading={loading}
              >
                Cancel
              </Button>
              <Button onClick={handleSubmit} isLoading={loading}>
                Save
              </Button>
            </div>
          </form>
        )}
      />
    </StyledCollectionForm>
  )
}

export default CollectionForm
