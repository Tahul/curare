import React from 'react'
import styled from 'styled-components'

// Contexts
import { useAuthState } from '../contexts/auth'

// Components
import { Redirect } from 'react-router-dom'
import RegisterForm from '../components/auth/RegisterForm'
import Page from '../components/layout/Page'

const StyledRegister = styled.div``

const Register = () => {
  const { isLoggedIn } = useAuthState()

  return (
    <Page>
      <StyledRegister>
        {isLoggedIn ? <Redirect to="/profile" /> : null}

        <RegisterForm />
      </StyledRegister>
    </Page>
  )
}

export default Register
