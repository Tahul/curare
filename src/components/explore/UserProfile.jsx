import { Item, Text, theme, UiText } from '@heetch/flamingo-react'
import { motion, useAnimation } from 'framer-motion'
import numeral from 'numeral'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Fill from '../../assets/images/fill.svg'
import useActionsSounds from '../../hooks/useActionsSounds'
import { randomIntFromInterval } from '../../plugins/random'

const StyledUserProfile = styled.li`
  position: relative;
  margin-top: ${theme.space.xl};
  cursor: pointer;

  .profile {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.space.m};

    .profileImage {
      margin-right: ${theme.space.l};
      width: 4rem;
      height: 4rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  .data {
    display: flex;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    @media (max-width: 420px) {
      flex-direction: column;

      i {
        display: none;
      }
    }
  }
`

const UserProfile = ({ profile }) => {
  const history = useHistory()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-20px 0px',
  })
  const { playSuccess } = useActionsSounds()

  const fullName = `${profile.first_name || ''}${
    profile.last_name ? ' ' + profile.last_name : ''
  }`

  const handleClick = () => {
    playSuccess()

    history.push(`/profile/${profile.name}`)
  }

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      onClick={handleClick}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          x: randomIntFromInterval(-100, 100),
          rotate: randomIntFromInterval(-20, 0),
          y: randomIntFromInterval(20, 0),
        },
        visible: {
          opacity: 1,
          x: 0,
          rotate: 0,
          y: 0,
        },
      }}
    >
      <StyledUserProfile>
        <Item>
          <div className="profile">
            <div className="profileImage">
              {profile.avatar_url && (
                <img
                  src={profile.avatar_url}
                  alt={profile.name}
                  title={profile.name}
                />
              )}

              {!profile.avatar_url && (
                <img src={Fill} alt={profile.name} title={profile.name} />
              )}
            </div>

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

              <Text className="data">
                <span>
                  <b>
                    {numeral(profile.followers_count).format(
                      profile.followers_count >= 1000 ? '0.0a' : '0a',
                    )}
                  </b>
                  &nbsp;followers
                </span>
                <i>&nbsp;·&nbsp;</i>
                <span>
                  <b>
                    {numeral(profile.followings_count).format(
                      profile.followings_count >= 1000 ? '0.0a' : '0a',
                    )}
                  </b>
                  &nbsp;followings
                </span>
                <i>&nbsp;·&nbsp;</i>
                <span>
                  <b>
                    {numeral(profile.links_count).format(
                      profile.links_count >= 1000 ? '0.0a' : '0a',
                    )}
                  </b>
                  &nbsp;links
                </span>
              </Text>
            </div>
          </div>

          <Text>{profile.description}</Text>
        </Item>
      </StyledUserProfile>
    </motion.div>
  )
}

export default UserProfile
