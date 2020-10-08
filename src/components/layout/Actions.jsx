import React from 'react'
import styled from 'styled-components'

// Components
import { Button, IconButton, theme } from '@heetch/flamingo-react'
import { Link } from 'react-router-dom'
import { useAuthState } from '../../contexts/auth'

const StyledActions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    a {
      margin-left: ${theme.space.m};
    }
  }
`

const GuestActions = () => (
  <div>
    <Link to="/login">
      <Button>Login</Button>
    </Link>

    <Link to="/register">
      <Button>Register</Button>
    </Link>
  </div>
)

const LoggedInActions = () => (
  <div>
    <Link to="/profile">
      <IconButton icon="IconUser" />
    </Link>

    <Link to="/settings">
      <IconButton icon="IconGear" />
    </Link>
  </div>
)

const Actions = () => {
  const { isLoggedIn } = useAuthState()

  return (
    <StyledActions>
      {isLoggedIn ? <LoggedInActions /> : <GuestActions />}
    </StyledActions>
  )
}

export default Actions
