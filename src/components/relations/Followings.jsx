import React from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'

// Components
import BackButton from '../layout/BackButton'
import User from './User'

const StyledFollowings = styled.div`
  .backButton {
    margin: ${theme.space.l} 0;
  }
`

const Followings = ({
  loading,
  userId,
  getUserFollowings,
  onClose,
  followings,
}) => {
  React.useEffect(() => {
    const fetchUserFollowings = async () => {
      await getUserFollowings({ userId })
    }

    fetchUserFollowings()
  }, [userId])

  return (
    <StyledFollowings>
      <BackButton onBack={onClose}>Go back to collections</BackButton>

      <ul>
        {followings &&
          followings.map((profile, i) => (
            <User i={i} key={profile.user_id} profile={profile} />
          ))}
      </ul>
    </StyledFollowings>
  )
}

export default Followings
