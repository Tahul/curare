import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Hooks
import useProfileFeed from '../hooks/useProfileFeed'
import { useAuth } from '../contexts/auth'

// Components
import ProfileForm from '../components/profile/ProfileForm'
import Page from '../components/layout/Page'
import Header from '../components/feed/Header'
import Collections from '../components/collections/Collections'
import useCollections from '../hooks/useCollections'
import { useHistory } from 'react-router-dom'

const StyledProfile = styled.div`
  position: relative;
  height: 100%;
`

const Profile = ({ match }) => {
  const history = useHistory()
  const { id, collectionId } = match.params
  const [auth] = useAuth()

  // Profile
  const { profile, setProfile } = useProfileFeed(id || undefined)
  const [edit, setEdit] = React.useState(false)
  const editable = profile.name === auth.name

  // Collections
  const [collections, setCollections] = useCollections(id || undefined)
  const [selectedCollection, setSelectedCollection] = React.useState(null)

  if (!collectionId && selectedCollection) {
    setSelectedCollection(null)
  }

  /**
   * Toggle form
   */
  const onToggleEdit = () => {
    setEdit(!edit)
  }

  /**
   * Update profile
   *
   * @param {*} profile
   */
  const onProfileSave = (payload) => {
    setProfile(payload)

    onToggleEdit()
  }

  /**
   * Update collections
   *
   * @param {*} collections
   */
  const onCollectionsSave = (payload) => {
    setCollections(payload)
  }

  /**
   * Open selected collection
   *
   * @param {*} collection
   */
  const onSetSelectedCollection = (collection = null) => {
    setSelectedCollection(collection)

    history.push(
      `/profile/${profile.name}${collection?.id ? '/' + collection.id : ''}`,
    )
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

            <Collections
              id={id}
              collections={collections}
              editable={editable}
              onCollectionsSave={onCollectionsSave}
              onSelectCollection={onSetSelectedCollection}
              selectedCollection={selectedCollection}
              selectedCollectionId={collectionId}
            />
          </motion.div>
        )}
      </StyledProfile>
    </Page>
  )
}

export default Profile
