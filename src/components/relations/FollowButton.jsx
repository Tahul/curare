import { Button } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import useHover from '../../hooks/useHover'

const StyledFollowButton = styled.div``

const FollowButton = ({
  loading,
  userId,
  isFollowing = false,
  onFollow,
  onUnfollow,
}) => {
  const [hoverRef, isHovered] = useHover()

  const handleClick = async () => {
    if (isFollowing) {
      await onUnfollow({ userId })
    } else {
      await onFollow({ userId })
    }
  }

  return (
    <StyledFollowButton>
      <Button
        ref={hoverRef}
        isLoading={loading}
        variants="OUTLINE"
        onClick={handleClick}
      >
        {isFollowing ? (isHovered ? 'Unfollow' : 'Followed') : 'Follow'}
      </Button>
    </StyledFollowButton>
  )
}

export default FollowButton
