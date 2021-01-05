import { Icon, Text, theme, UiText } from '@heetch/flamingo-react'
import { formatDistanceToNow } from 'date-fns'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { Img } from 'react-image'
import { useInView } from 'react-intersection-observer'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Fill from '../../assets/images/fill.png'
import { randomIntFromInterval } from '../../plugins/random'
import LinkItem from '../links/LinkItem'

const StyledFeedItem = styled.div`
  margin-top: ${theme.space.xxl};

  .top-line {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: ${theme.space.l};
    cursor: pointer;

    .open-arrow {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }

    img {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }

    .data {
      display: flex;
      flex-direction: column;

      p {
        margin-left: ${theme.space.m};

        &:nth-child(3) {
          font-size: ${theme.fontSize.s};
        }
      }
    }
  }
`

const FeedItem = ({ item }) => {
  const history = useHistory()
  const controls = useAnimation()
  const [hover, setHover] = React.useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-20px 0px',
  })
  const fullName = `${item.profile.first_name || ''}${
    item.profile.last_name ? ' ' + item.profile.last_name : ''
  }`

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const handleProfileOpen = () => {
    history.push(`/profile/${item.profile.name}`)
  }

  return (
    <StyledFeedItem ref={ref}>
      <motion.div
        className="top-line"
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
        onClick={handleProfileOpen}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Img src={item.profile.avatar_url || Fill} />

        <div className="data">
          <UiText
            variant="contentBold"
            alt={`@${item.profile.name}`}
            title={`@${item.profile.name}`}
          >
            {fullName && fullName !== '' ? fullName : `@${item.profile.name}`}
          </UiText>

          <Text>
            {formatDistanceToNow(new Date(item.created_at), {
              addSuffix: true,
            })}
          </Text>

          <div className="open-arrow">
            <motion.div
              animate={
                hover
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -100, transition: { duration: 0.05 } }
              }
            >
              <Icon icon="IconArrowRight" size="l" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <LinkItem key={item.id} link={item} editable={false} />
    </StyledFeedItem>
  )
}

export default FeedItem
