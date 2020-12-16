import { theme, UiText } from '@heetch/flamingo-react'
import React from 'react'
import styled from 'styled-components'
import LinkItem from '../links/LinkItem'
import Fill from '../../assets/images/fill.png'
import { Img } from 'react-image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const StyledFeedItem = styled.div`
  margin-top: ${theme.space.xxl};

  .top-line {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.space.l};

    img {
      height: 2rem;
      width: 2rem;
      margin-right: ${theme.space.m};
    }
  }
`

const FeedItem = ({ item }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-20px 0px',
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <StyledFeedItem ref={ref}>
      <motion.div
        className="top-line"
        animate={controls}
        initial="hidden"
        variants={{
          hidden: {
            opacity: 0,
            x: -50,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
      >
        <Img src={Fill} />

        <UiText variant="contentBold">@{item.profile.name}</UiText>
      </motion.div>

      <LinkItem key={item.id} link={item} editable={false} />
    </StyledFeedItem>
  )
}

export default FeedItem
