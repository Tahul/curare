import { theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import SocialButton from './SocialButton'

const StyledSocialButtons = styled.div`
  & > div:not(:first-of-type) {
    margin-top: ${theme.space.m};
  }
`

const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      <SocialButton type="twitter" />
      <SocialButton type="github" />
    </StyledSocialButtons>
  )
}

export default SocialButtons
