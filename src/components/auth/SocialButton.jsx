import { Text, theme } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import { getSocialRedirect } from '../../api/auth'
import GitHubLogo from '../../assets/images/github.svg'
import TwitterLogo from '../../assets/images/twitter.svg'
import { useAuthState } from '../../contexts/auth'

const StyledSocialButton = styled.div`
  &:hover {
    p {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  p {
    display: flex;
    align-items: center;

    img {
      width: 1.25rem;
      margin-right: ${theme.space.s};
    }
  }
`

const SocialButton = ({ type = 'twitter' }) => {
  const { loading } = useAuthState()

  const handleRedirect = async () => {
    const redirectUrl = await getSocialRedirect(type)

    console.log(redirectUrl)
  }

  return (
    <StyledSocialButton>
      <Text onClick={handleRedirect} isLoading={loading}>
        <img
          src={type === 'twitter' ? TwitterLogo : GitHubLogo}
          alt={`${type} logo`}
        />
        Login with {type === 'twitter' ? 'Twitter' : 'GitHub'}
      </Text>
    </StyledSocialButton>
  )
}

export default SocialButton
