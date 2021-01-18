import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import Couch from './Couch'
import FourthCharacter from './FourthCharacter'
import Monstera from './Monstera'
import Particle from './Particle'
import Window from './Window'

const StyledCallbackIllustration = styled.div`
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

const CallbackIllustration = () => {
  return (
    <StyledCallbackIllustration>
      <Window
        style={{ height: '300px', bottom: '40px', left: '10%' }}
        transition={{ delay: 0.1 }}
      />

      <Couch
        style={{ height: '180px', bottom: '10px', left: '20%' }}
        transition={{ delay: 0.3 }}
      />

      <Monstera
        style={{ height: '120px', bottom: '0', left: '30px' }}
        transition={{ delay: 0.2 }}
      />

      <Particle
        style={{ width: '48px', right: '24%', bottom: '62%' }}
        transition={{ delay: 1 }}
      />

      <Particle
        style={{ width: '48px', right: '36%', bottom: '62%' }}
        transition={{ delay: 2 }}
      />

      <Particle
        style={{ width: '48px', right: '54%', bottom: '52%' }}
        transition={{ delay: 3 }}
      />

      <Particle
        style={{ width: '48px', right: '43%', bottom: '48%' }}
        transition={{ delay: 4 }}
      />

      <Particle
        style={{ width: '48px', right: '68%', bottom: '68%' }}
        transition={{ delay: 5 }}
      />

      <FourthCharacter
        style={{ height: '220px', bottom: '0px', left: '40%' }}
        transition={{ delay: 0.4 }}
      />
    </StyledCallbackIllustration>
  )
}

export default CallbackIllustration
