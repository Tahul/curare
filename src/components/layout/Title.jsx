import React from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'

// Assets
import Logo from '../../assets/images/logo.svg'

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${theme.fontSize.l};

  span {
    margin-right: 0.5rem;

    img {
      width: 3rem;
    }
  }
`

const Title = () => (
  <StyledTitle>
    <span alt="logo" role="img">
      <img src={Logo} />
    </span>
    Curare
  </StyledTitle>
)

export default Title