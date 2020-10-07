import { Button } from '@heetch/flamingo-react'
import React from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

// Contexts
import { useAuthDispatch, useAuthState } from '../contexts/auth'
import { logoutAction } from '../contexts/auth/actions'

const StyledSettings = styled.div``

const Settings = () => {
  const { isLoggedIn } = useAuthState()
  const authDispatch = useAuthDispatch()

  const handleLogout = async () => {
    await logoutAction(authDispatch)
  }

  return (
    <StyledSettings>
      {!isLoggedIn ? <Redirect to="/login" /> : null}

      <Button onClick={handleLogout}>Logout</Button>
    </StyledSettings>
  )
}

export default Settings
