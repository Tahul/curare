import React from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import RegisterForm from '../components/auth/RegisterForm'
import Page from '../components/layout/Page'
import { useAuthState } from '../contexts/auth'

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
