import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Hooks
import { useAuth, useAuthState } from '../../contexts/auth'
import useActionsSounds from '../../hooks/useActionsSounds'

// Components
import { Button, IconButton, theme } from '@heetch/flamingo-react'
import { NavLink } from 'react-router-dom'

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

    .active {
      button {
        background-color: ${theme.color.brand.primary};
        svg {
          fill: ${theme.color.element.primary};
        }
      }
    }
  }
`

const AnimateActions = ({ children }) => (
  <motion.div
    initial={{ opacity: 0.25, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
  >
    {children}
  </motion.div>
)

const GuestActions = () => {
  const { playButton } = useActionsSounds()

  return (
    <AnimateActions>
      <NavLink
        to="/login"
        tabIndex={0}
        onClick={playButton}
        activeClassName="active"
      >
        <Button>Login</Button>
      </NavLink>

      <NavLink
        to="/register"
        tabIndex={1}
        onClick={playButton}
        activeClassName="active"
      >
        <Button>Register</Button>
      </NavLink>
    </AnimateActions>
  )
}

const LoggedInActions = () => {
  const { playButton } = useActionsSounds()

  const [auth] = useAuth()

  return (
    <AnimateActions>
      <NavLink
        to={`/profile/${auth.name}`}
        tabIndex={0}
        onClick={playButton}
        activeClassName="active"
      >
        <IconButton icon="IconUser" />
      </NavLink>

      <NavLink
        to="/settings"
        tabIndex={1}
        onClick={playButton}
        activeClassName="active"
      >
        <IconButton icon="IconGear" />
      </NavLink>
    </AnimateActions>
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
