import React from 'react'
import styled from 'styled-components'

// Hooks
import useProfileFeed from '../hooks/useProfileFeed'
import { useAuth } from '../contexts/auth'

// Components
import ProfileForm from '../components/profile/ProfileForm'
import Page from '../components/layout/Page'
import Header from '../components/feed/Header'
import { motion } from 'framer-motion'

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
    <Page animated={false}>
      <StyledProfile>
        {edit ? (
          <motion.div
            key="form"
            initial={{ opacity: 0.25, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
          >
            <ProfileForm onSave={onProfileSave}></ProfileForm>
          </motion.div>
        ) : (
          <motion.div
            key="profile"
            initial={{ opacity: 0.25, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
          >
            <Header
              id={id}
              profile={profile}
              editable={editable}
              onEdit={onToggleEdit}
            />
          </motion.div>
        )}
      </StyledProfile>
    </Page>
  )
}

export default Profile
