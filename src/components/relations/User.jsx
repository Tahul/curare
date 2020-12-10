import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

// Hooks
import useActionsSounds from '../../hooks/useActionsSounds'

// Components
import { Item, Text, theme, UiText } from '@heetch/flamingo-react'

// Assets
import Fill from '../../assets/images/fill.png'
import { useHistory } from 'react-router-dom'

const StyledUser = styled.li`
  position: relative;
  margin-top: ${theme.space.l};
  cursor: pointer;

  .itemContent {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: ${theme.space.l};
      width: 3rem;
      height: 3rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`

const item = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
    },
  }),
  hidden: { opacity: 0.25, y: 100 },
}

const User = ({ i = 0, profile }) => {
  const history = useHistory()

  const { playSuccess } = useActionsSounds()

  const fullName = `${profile.first_name || ''}${
    profile.last_name ? ' ' + profile.last_name : ''
  }`

  const handleClick = () => {
    playSuccess()

    history.push(`/profile/${profile.name}`)
  }

  return (
    <motion.li
      custom={i}
      initial="hidden"
      animate="visible"
      variants={item}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      onClick={handleClick}
    >
      <StyledUser>
        <Item>
          <div className="itemContent">
            <img
              src={profile?.avatar_url || Fill}
              alt={profile.name}
              title={profile.name}
            />

            <div>
              {fullName !== '' ? (
                <UiText
                  variant="contentBold"
                  className="fullname"
                  alt="Full name"
                  title={fullName}
                >
                  {fullName}
                </UiText>
              ) : null}

              <Text className="name" alt="Username" title={profile.name}>
                @{profile.name}
              </Text>
            </div>
          </div>
        </Item>
      </StyledUser>
    </motion.li>
  )
}

export default User
