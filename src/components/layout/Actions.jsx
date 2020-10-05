import React from 'react'
import styled from 'styled-components'

// Components
import { Button, IconButton } from '@heetch/flamingo-react'

const StyledActions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`

const GuestActions = () => (
  <div>
    <Button>Login</Button>

    <Button>Register</Button>
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
