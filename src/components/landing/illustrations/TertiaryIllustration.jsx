import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import Bush from './Bush'

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
      <Bush style={{ height: '320px' }} transition={{ delay: 0.2 }} />
    </StyledTertiaryIllustration>
  )
}

export default TertiaryIllustration
