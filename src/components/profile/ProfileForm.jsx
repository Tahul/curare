import React from 'react'
import { toDataURL, base64MimeType } from '../../plugins/file'

// Form validation
import { Validators } from '@lemoncode/fonk'
import { createFinalFormValidation } from '@lemoncode/fonk-final-form'

// Hooks
import useProfile from '../../hooks/useProfile'

// Components
import {
  Button,
  InputField,
  TextareaField,
  UploaderField,
} from '@heetch/flamingo-react'
import { Field, Form } from 'react-final-form'

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
  avatar_url: '',
  first_name: '',
  last_name: '',
  description: '',
  url: '',
}

const ProfileForm = () => {
  const { profile, loading, updateProfile, updateAvatar } = useProfile()
  const [avatar, setAvatar] = React.useState([])

  const initialValues = {
    ...defaultState,
    ...profile,
  }

  const onSubmit = async (payload) => {
    await updateProfile(payload)
  }

  const handleAvatarUpload = async (payload) => {
    await updateAvatar(payload[0])
  }

  const validate = (values) => validator.validateForm(values)

  React.useEffect(() => {
    let isMounted = true

    const fetchAvatar = async () => {
      if (profile.avatar_url) {
        const file = await toDataURL(profile.avatar_url)
        const mimeType = base64MimeType(file)

        if (isMounted) {
          setAvatar([
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

    return () => (isMounted = false)
  }, [profile])

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <UploaderField
            accept="image/jpg,jpeg,png"
            onChange={handleAvatarUpload}
            id="avatar"
            label="Avatar"
            value={avatar}
            disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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

export default ProfileForm
