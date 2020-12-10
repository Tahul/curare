import React from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'

// Components
import BackButton from '../layout/BackButton'

const StyledFollowers = styled.div`
  .backButton {
    margin-top: ${theme.space.l};
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
  }, [userId])

  return (
    <StyledFollowers>
      <BackButton onBack={onClose}>Go back to collections</BackButton>
    </StyledFollowers>
  )
}

export default Followers
