import React from 'react'
import styled from 'styled-components'

// Components
import { Button, IconButton, theme } from '@heetch/flamingo-react'
import { Link } from 'react-router-dom'

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
    <IconButton icon="IconGear" />
  </div>
)

const Actions = () => {
  const loggedIn = false

  return (
    <StyledActions>
      {loggedIn ? <LoggedInActions /> : <GuestActions />}
    </StyledActions>
  )
}

export default Actions
