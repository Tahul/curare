import { Button } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'

// Contexts
import { useAuthDispatch } from '../contexts/auth'
import { logoutAction } from '../contexts/auth/actions'

const StyledSettings = styled.div``

const Settings = () => {
  const authDispatch = useAuthDispatch()

  const handleLogout = async () => {
    await logoutAction(authDispatch)
  }

  return (
    <StyledSettings>
      <Button onClick={handleLogout}>Logout</Button>
    </StyledSettings>
  )
}

export default Settings
