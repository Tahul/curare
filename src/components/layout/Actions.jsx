import React from 'react'
import styled from 'styled-components'

// Components
import { Button, IconButton, theme } from '@heetch/flamingo-react'
import { Link } from 'react-router-dom'
import { useAuth, useAuthState } from '../../contexts/auth'

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
    <Link to="/login" tabIndex={0}>
      <Button>Login</Button>
    </Link>

    <Link to="/register" tabIndex={1}>
      <Button>Register</Button>
    </Link>
  </div>
)

const LoggedInActions = () => {
  const [auth] = useAuth()

  return (
    <div>
      <Link to={`/profile/${auth.name}`} tabIndex={0}>
        <IconButton icon="IconUser" />
      </Link>

      <Link to="/settings" tabIndex={1}>
        <IconButton icon="IconGear" />
      </Link>
    </div>
  )
}

const Actions = () => {
  const { isLoggedIn } = useAuthState()

  return (
    <StyledActions>
      {isLoggedIn ? <LoggedInActions /> : <GuestActions />}
    </StyledActions>
  )
}

export default Actions
