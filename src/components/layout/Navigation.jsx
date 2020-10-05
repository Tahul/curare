import React from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'

// Components
import Title from './Title'
import Actions from './Actions'

const StyledNavigation = styled.div`
  width: 100%;
  padding: ${theme.space.m} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Navigation = () => {
  return (
    <StyledNavigation>
      <Title />

      <Actions />
    </StyledNavigation>
  )
}

export default Navigation
