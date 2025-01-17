import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import UserProfile from '../explore/UserProfile'
import BackButton from '../layout/BackButton'

const StyledFollowers = styled.div`
  margin-bottom: ${theme.space.xl};

  .backButton {
    margin: ${theme.space.xl} 0;
  }
`

const Followers = ({ userId, getUserFollowers, onClose, followers }) => {
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
            <UserProfile i={i} key={profile.user_id} profile={profile} />
          ))}
      </ul>
    </StyledFollowers>
  )
}

export default Followers
