import React from 'react'
import styled from 'styled-components'

// Contexts
import { useAuthState } from '../contexts/auth'

// Components
import { Redirect } from 'react-router-dom'
import LogoutButton from '../components/auth/LogoutButton'

const StyledSettings = styled.div``

const Settings = () => {
  const { isLoggedIn } = useAuthState()

  return (
    <StyledSettings>
      {!isLoggedIn ? <Redirect to="/login" /> : null}

      <LogoutButton />
    </StyledSettings>
  )
}

export default Settings
