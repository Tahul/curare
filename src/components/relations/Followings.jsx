import React from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'

// Components
import BackButton from '../layout/BackButton'

const StyledFollowings = styled.div`
  .backButton {
    margin-top: ${theme.space.l};
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
    </StyledFollowings>
  )
}

export default Followings
