import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'
import { Link, useLocation } from 'react-router-dom'

// Assets
import Logo from '../../assets/images/logo.svg'
import { Img } from 'react-image'
import { useAuthState } from '../../contexts/auth'
import { AnimatePresence, motion } from 'framer-motion'

const StyledTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${theme.fontSize.l};
  line-height: ${theme.lineHeight.m};
  color: ${theme.color.brand.secondary};
  padding: ${theme.space.m} 0;

  span {
    img {
      width: 3rem;
    }
  }

  .title {
    position: absolute;
    left: 3.5rem;
    white-space: nowrap;
  }

  @media (max-width: 320px) {
    .title {
      display: none;
    }
  }
`

const Title = () => {
  const { isLoggedIn } = useAuthState()
  const [title, setTitle] = useState('Curare')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      if (isLoggedIn) setTitle('Feed')
      else setTitle('Curare')
    }

    if (location.pathname === '/explore') setTitle('Explore')

    if (location.pathname === '/login') setTitle('Login')

    if (location.pathname === '/register') setTitle('Register')

    if (/profile/g.test(location.pathname)) setTitle('Profile')
  }, [location.pathname, isLoggedIn])

  return (
    <Link to="/">
      <StyledTitle>
        <span alt="logo" role="img">
          <Img src={Logo} alt="Curare logo" />
        </span>

        <AnimatePresence>
          <motion.span
            className="title"
            key={title}
            initial={{ y: 25, opacity: 0, transition: { duration: 0.2 } }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
            exit={{ y: -25, opacity: 0, transition: { duration: 0.2 } }}
          >
            {title}
          </motion.span>
        </AnimatePresence>
      </StyledTitle>
    </Link>
  )
}

export default Title
