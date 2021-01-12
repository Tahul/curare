import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import Couch from './Couch'
import FourthCharacter from './FourthCharacter'
import Monstera from './Monstera'
import Particle from './Particle'
import Window from './Window'

const StyledTertiaryIllustration = styled.div`
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

const TertiaryIllustration = () => {
  return (
    <StyledTertiaryIllustration>
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
        style={{ width: '48px', right: '43%', bottom: '50%' }}
        transition={{ delay: 1 }}
        particle="music"
      />

      <Particle
        style={{ width: '48px', right: '36%', bottom: '62%' }}
        transition={{ delay: 2 }}
        particle="book"
      />

      <Particle
        style={{ width: '48px', right: '54%', bottom: '48%' }}
        transition={{ delay: 3 }}
        particle="plant"
      />

      <Particle
        style={{ width: '48px', right: '43%', bottom: '50%' }}
        transition={{ delay: 4 }}
        particle="podcast"
      />

      <FourthCharacter
        style={{ height: '220px', bottom: '0px', left: '40%' }}
        transition={{ delay: 0.4 }}
      />
    </StyledTertiaryIllustration>
  )
}

export default TertiaryIllustration
