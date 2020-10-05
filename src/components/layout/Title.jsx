import React from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'

// Assets
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${theme.fontSize.l};
  color: ${theme.color.brand.secondary};

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
        <img src={Logo} />
      </span>
      Curare
    </StyledTitle>
  </Link>
)

export default Title
