import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Hooks
import { useAuth, useAuthState } from '../../contexts/auth'
import useActionsSounds from '../../hooks/useActionsSounds'

// Components
import { Button, IconButton, theme } from '@heetch/flamingo-react'
import IconButtonOverwrite from '../utils/IconButtonOverwrite'
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
        to={`/`}
        exact
        tabIndex={0}
        onClick={playButton}
        activeClassName="active"
      >
        <IconButtonOverwrite>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path d="M 8.5 9 A 1.50015 1.50015 0 0 0 7 10.5 L 7 15.5 A 1.50015 1.50015 0 0 0 8.5 17 L 39.5 17 A 1.50015 1.50015 0 0 0 41 15.5 L 41 10.5 A 1.50015 1.50015 0 0 0 39.5 9 L 8.5 9 z M 10 12 L 38 12 L 38 14 L 10 14 L 10 12 z M 8.5 20 A 1.50015 1.50015 0 0 0 7 21.5 L 7 26.5 A 1.50015 1.50015 0 0 0 8.5 28 L 39.5 28 A 1.50015 1.50015 0 0 0 41 26.5 L 41 21.5 A 1.50015 1.50015 0 0 0 39.5 20 L 8.5 20 z M 10 23 L 38 23 L 38 25 L 10 25 L 10 23 z M 8.5 31 A 1.50015 1.50015 0 0 0 7 32.5 L 7 37.5 A 1.50015 1.50015 0 0 0 8.5 39 L 39.5 39 A 1.50015 1.50015 0 0 0 41 37.5 L 41 32.5 A 1.50015 1.50015 0 0 0 39.5 31 L 8.5 31 z M 10 34 L 38 34 L 38 36 L 10 36 L 10 34 z" />
          </svg>
        </IconButtonOverwrite>
      </NavLink>

      <NavLink
        to={`/explore`}
        tabIndex={1}
        onClick={playButton}
        activeClassName="active"
      >
        <IconButton icon="IconGlobe" />
      </NavLink>

      <NavLink
        to={`/profile/${auth.name}`}
        tabIndex={2}
        onClick={playButton}
        activeClassName="active"
      >
        <IconButton icon="IconEmojiSmile" />
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
