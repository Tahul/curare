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
  const { profile, setProfile, loading: profileLoading } = useProfileFeed(
    id || null,
  )
  const [edit, setEdit] = React.useState(false)
  const editable = profile.name === auth.name

  // Collections
  const {
    collections,
    setCollections,
    createCollection,
    updateCollection,
    deleteCollection,
    updateCollectionImage,
    loading: collectionLoading,
  } = useCollections(profile.user_id || null)

  const [selectedCollection, setSelectedCollection] = React.useState(null)

  React.useEffect(() => {
    if (!collectionId && selectedCollection) {
      setSelectedCollection(null)
    }

    if (collectionId && !selectedCollection) {
      setSelectedCollection(
        collections.find((item) => item.slug === collectionId),
      )
    }
  }, [selectedCollection, collectionId, collections])

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
      `/profile/${profile.name}${
        collection?.slug ? '/' + collection.slug : ''
      }`,
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
              loading={profileLoading}
            />

            {profile?.user_id ? (
              <Collections
                userName={profile.name}
                collections={collections}
                editable={editable}
                onCollectionsSave={onCollectionsSave}
                onSelectCollection={onSetSelectedCollection}
                selectedCollection={selectedCollection}
                selectedCollectionId={collectionId}
                createCollection={createCollection}
                updateCollection={updateCollection}
                deleteCollection={deleteCollection}
                updateCollectionImage={updateCollectionImage}
                loading={collectionLoading}
              />
            ) : null}
          </motion.div>
        )}
      </StyledProfile>
    </Page>
  )
}

export default Profile
