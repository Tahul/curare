import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import UserProfile from '../explore/UserProfile'
import BackButton from '../layout/BackButton'

const StyledFollowings = styled.div`
  margin-bottom: ${theme.space.xl};

  .backButton {
    margin: ${theme.space.xl} 0;
  }
`

const Followings = ({ userId, getUserFollowings, onClose, followings }) => {
  React.useEffect(() => {
    const fetchUserFollowings = async () => {
      await getUserFollowings({ userId })
    }

    fetchUserFollowings()
  }, [getUserFollowings, userId])

  return (
    <StyledFollowings>
      <BackButton onBack={onClose}>Go back to collections</BackButton>

      <ul>
        {followings &&
          followings.map((profile, i) => (
            <UserProfile i={i} key={profile.user_id} profile={profile} />
          ))}
      </ul>
    </StyledFollowings>
  )
}

export default Followings
