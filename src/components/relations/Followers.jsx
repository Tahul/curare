import React from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'

// Components
import BackButton from '../layout/BackButton'
import User from './User'

const StyledFollowers = styled.div`
  .backButton {
    margin: ${theme.space.l} 0;
  }
`

const Followers = ({
  loading,
  userId,
  getUserFollowers,
  onClose,
  followers,
}) => {
  React.useEffect(() => {
    const fetchUserFollowers = async () => {
      await getUserFollowers({ userId })
    }

    fetchUserFollowers()
  }, [userId, getUserFollowers])

  return (
    <StyledFollowers>
      <BackButton onBack={onClose}>Go back to collections</BackButton>

      <ul>
        {followers &&
          followers.map((profile, i) => (
            <User i={i} key={profile.user_id} profile={profile} />
          ))}
      </ul>
    </StyledFollowers>
  )
}

export default Followers
