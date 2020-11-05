import React from 'react'
import styled from 'styled-components'

// Hooks
import useProfileFeed from '../hooks/useProfileFeed'
import { useAuth } from '../contexts/auth'

// Components
import ProfileForm from '../components/profile/ProfileForm'
import Page from '../components/layout/Page'
import Header from '../components/feed/Header'

const StyledProfile = styled.div``

const Profile = ({ match }) => {
  const { id } = match.params
  const { profile, setProfile } = useProfileFeed(id || undefined)
  const [auth] = useAuth()
  const editable = profile.name === auth.name
  const [edit, setEdit] = React.useState(false)

  const onToggleEdit = () => {
    setEdit(!edit)
  }

  const onProfileSave = (payload) => {
    setProfile(payload)

    onToggleEdit()
  }

  return (
    <Page>
      <StyledProfile>
        {edit ? (
          <ProfileForm onSave={onProfileSave} />
        ) : (
          <Header
            id={id}
            profile={profile}
            editable={editable}
            onEdit={onToggleEdit}
          />
        )}
      </StyledProfile>
    </Page>
  )
}

export default Profile
