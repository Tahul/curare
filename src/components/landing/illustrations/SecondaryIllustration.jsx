import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import Cityscape from './Cityscape'
import Post from './Post'
import SecondCharacter from './SecondCharacter'
import ThirdCharacter from './ThirdCharacter'
import Trees from './Trees'

const StyledSecondaryIllustration = styled.div`
  margin-top: ${theme.space.xxl};
  position: relative;
  width: 100%;
  height: 320px;
  overflow: visible;

  svg,
  div {
    position: absolute;

    &.cityScape {
      width: 100%;
    }
  }
`

const SecondaryIllustration = () => {
  return (
    <StyledSecondaryIllustration>
      <Cityscape
        className="cityScape"
        transition={{ delay: 0.1 }}
        style={{ zIndex: -105 }}
      />

      <Trees
        style={{ right: '0px', height: '320px', top: '-60px', zIndex: -100 }}
        transition={{ delay: 0.2 }}
      />

      <SecondCharacter style={{ height: '320px', left: '35%' }} />

      <ThirdCharacter style={{ height: '320px', left: '60%' }} />

      <Post style={{ width: '80%', left: '10%', top: '-10%' }} />
    </StyledSecondaryIllustration>
  )
}

export default SecondaryIllustration
