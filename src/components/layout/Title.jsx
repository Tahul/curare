import React from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'
import { Link } from 'react-router-dom'

// Assets
import Logo from '../../assets/images/logo.svg'
import { Img } from 'react-image'

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${theme.fontSize.l};
  line-height: ${theme.lineHeight.m};
  color: ${theme.color.brand.secondary};
  padding: ${theme.space.m} 0;

  span {
    margin-right: 0.5rem;

    img {
      width: 3rem;
    }
  }
`

const Title = () => (
  <Link to="/">
    <StyledTitle>
      <span alt="logo" role="img">
        <Img src={Logo} alt="Curare logo" />
      </span>
      Curare
    </StyledTitle>
  </Link>
)

export default Title
