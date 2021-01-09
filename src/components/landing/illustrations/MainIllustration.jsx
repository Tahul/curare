import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import Bush from './Bush'
import Character from './Character'
import Heart from './Heart'
import Phone from './Phone'

const StyledMainIllustration = styled.div`
  margin-top: ${theme.space.xxl};
  position: relative;
  width: 100%;
  height: 320px;
  overflow: visible;

  svg,
  div {
    position: absolute;
  }
`

const MainIllustration = () => {
  return (
    <StyledMainIllustration>
      <Bush style={{ height: '320px' }} transition={{ delay: 0.2 }} />

      <Phone
        style={{ right: '0px', top: '20px', height: '300px' }}
        transition={{ delay: 0.3 }}
      />

      <Heart style={{ height: '25px', width: '25px', left: '40px' }} />

      <Character
        style={{ left: '-15px', height: '320px' }}
        transition={{ delay: 0.1 }}
      />
    </StyledMainIllustration>
  )
}

export default MainIllustration
