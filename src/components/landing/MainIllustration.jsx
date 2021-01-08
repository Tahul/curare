import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import Character from './illustrations/Character'
import Heart from './illustrations/Heart'
import Phone from './illustrations/Phone'

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
      <Phone
        style={{ right: '0px', top: '20px', height: '300px' }}
        transition={{ delay: 0.2 }}
      />

      <Heart
        style={{ height: '25px', width: '25px', left: '40px', zIndex: '120' }}
      />

      <Character
        style={{ left: '-15px', height: '320px' }}
        transition={{ delay: 0.1 }}
      />
    </StyledMainIllustration>
  )
}

export default MainIllustration
