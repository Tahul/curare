import React from 'react'
import styled from 'styled-components'
import Actions from './Actions'
import Title from './Title'

const StyledNavigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 320px) {
    padding: 0;
  }
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
