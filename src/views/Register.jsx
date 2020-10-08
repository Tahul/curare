import React from 'react'
import styled from 'styled-components'

// Contexts
import { useAuthState } from '../contexts/auth'

// Components
import { Redirect } from 'react-router-dom'
import RegisterForm from '../components/auth/RegisterForm'

const StyledRegister = styled.div``

const Register = () => {
  const { isLoggedIn } = useAuthState()

  return (
    <StyledRegister>
      {isLoggedIn ? <Redirect to="/profile" /> : null}

      <RegisterForm />
    </StyledRegister>
  )
}

export default Register
