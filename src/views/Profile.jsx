import { theme } from '@heetch/flamingo-react'
import { motion } from 'framer-motion'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Collections from '../components/collections/Collections'
import BackButton from '../components/layout/BackButton'
import Page from '../components/layout/Page'
import ProfileForm from '../components/profile/ProfileForm'
import ProfileHeader from '../components/profile/ProfileHeader'
import Followers from '../components/relations/Followers'
import Followings from '../components/relations/Followings'
import { useAuth } from '../contexts/auth'
import useCollections from '../hooks/useCollections'
import useProfileFeed from '../hooks/useProfileFeed'
import useRelations from '../hooks/useRelations'

const StyledProfile = styled.div`
  position: relative;
  height: 100%;

  .backButton {
    margin: ${theme.space.l} 0;
  }
`

const Profile = ({ match }) => {
  // Routing
  const history = useHistory()
  const { id, collectionId } = match.params

  // Auth
  const [auth] = useAuth()

  // Profile
  const { profile, setProfile, loading: profileLoading } = useProfileFeed(
    id || null,
  )

  const [edit, setEdit] = React.useState(false)

  const editable = profile.name === auth.name

  React.useEffect(() => {
    setEdit(false)

    setSelectedCollection(null)

    setShowFollowers(false)

    setShowFollowings(false)
  }, [profile])

  // Collections
  const {
    collections,
    setCollections,
    createCollection,
    updateCollection,
    deleteCollection,
    updateCollectionImage,
    refreshCollection,
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

  // Relations
  const [showFollowers, setShowFollowers] = React.useState(false)
  const [showFollowings, setShowFollowings] = React.useState(false)

  const {
    followUser,
    unfollowUser,
    getUserFollowers,
    getUserFollowings,
    userFollowers,
    userFollowings,
    loading: relationsLoading,
  } = useRelations({ setProfile })

  /**
   * Toggle form section
   */
  const onToggleEdit = () => {
    setShowFollowers(false) // Ensure showFollowers is turned false when opening profile edit

    setShowFollowings(false) // Ensure showFollowings is turned false when opening profile edit

    setEdit(!edit)
  }

  /**
   * Toggle followers section
   */
  const onToggleFollowers = () => {
    setEdit(false) // Ensure edit is turned false when opening followers

    setShowFollowings(false) // Ensure showFollowings is turned false when opening followers

    setShowFollowers(!showFollowers)
  }

  /**
   * Toggle followings section
   */
  const onToggleFollowings = () => {
    setEdit(false) // Ensure edit is turned false when opening followings

    setShowFollowers(false) // Ensure showFollowings is turned false when opening followings

    setShowFollowings(!showFollowings)
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
        {edit && (
          <motion.div
            key="form"
            initial={{ opacity: 0.25, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <BackButton onBack={onToggleEdit}>Go back to my profile</BackButton>

            <ProfileForm onSave={onProfileSave}></ProfileForm>
          </motion.div>
        )}

        {!edit && (
          <motion.div
            key="profile"
            initial={{ opacity: 0.25, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ProfileHeader
              id={id}
              profile={profile}
              editable={editable}
              onEdit={onToggleEdit}
              loading={profileLoading}
              isFollowing={profile.is_followed}
              onFollow={followUser}
              onUnfollow={unfollowUser}
              onToggleFollowers={onToggleFollowers}
              onToggleFollowings={onToggleFollowings}
              showFollowers={showFollowers}
              showFollowings={showFollowings}
            />

            {!showFollowings && showFollowers && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Followers
                  loading={relationsLoading}
                  userId={profile.user_id}
                  getUserFollowers={getUserFollowers}
                  onClose={onToggleFollowers}
                  followers={userFollowers}
                />
              </motion.div>
            )}

            {!showFollowers && showFollowings && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Followings
                  loading={relationsLoading}
                  userId={profile.user_id}
                  getUserFollowings={getUserFollowings}
                  onClose={onToggleFollowings}
                  followings={userFollowings}
                />
              </motion.div>
            )}

            {!showFollowers && !showFollowings && profile?.user_id ? (
              <Collections
                userName={profile.name}
                collections={collections}
                editable={editable}
                onCollectionsSave={onCollectionsSave}
                onSelectCollection={onSetSelectedCollection}
                onUpdateSelectedCollection={setSelectedCollection}
                selectedCollection={selectedCollection}
                createCollection={createCollection}
                updateCollection={updateCollection}
                deleteCollection={deleteCollection}
                updateCollectionImage={updateCollectionImage}
                refreshCollection={refreshCollection}
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
