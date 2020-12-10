import React from 'react'
import styled from 'styled-components'

const StyledUser = styled.li``

const User = ({ profile }) => {
  return <StyledUser>{JSON.stringify(profile)}</StyledUser>
}

export default User
