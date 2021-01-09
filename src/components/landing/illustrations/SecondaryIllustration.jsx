import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import Bush from './Bush'

const StyledSecondaryIllustration = styled.div`
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

const SecondaryIllustration = () => {
  return (
    <StyledSecondaryIllustration>
      <Bush style={{ height: '320px' }} transition={{ delay: 0.2 }} />
    </StyledSecondaryIllustration>
  )
}

export default SecondaryIllustration
