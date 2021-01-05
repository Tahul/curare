import React from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import LogoutButton from '../components/auth/LogoutButton'
import Page from '../components/layout/Page'
import { useAuthState } from '../contexts/auth'

const StyledSettings = styled.div``

const Settings = () => {
  const { isLoggedIn } = useAuthState()

  return (
    <Page>
      <StyledSettings>
        {!isLoggedIn ? <Redirect to="/login" /> : null}

        <LogoutButton />
      </StyledSettings>
    </Page>
  )
}

export default Settings
