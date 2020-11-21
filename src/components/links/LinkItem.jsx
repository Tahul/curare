import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme, UiText } from '@heetch/flamingo-react'

// Components
import { ImageState, LazyImageFull } from 'react-lazy-images'

// Assets
import Fill from '../../assets/images/fill.png'

const StyledLinkItem = styled.div`
  width: 100%;
  background-color: ${theme.color.text.white};
  margin-top: ${theme.space.l};
  border-radius: ${theme.borderRadius.m};
  overflow: hidden;

  img {
    width: 100%;
    height: 125px;
    object-fit: cover;
  }

  .itemContent {
    padding: ${theme.space.l};
  }
`

const item = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
  hidden: { opacity: 0.25, y: 100 },
}

const LinkItem = ({ link, i }) => {
  return (
    <motion.li
      custom={i}
      animate="visible"
      variants={item}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
    >
      <StyledLinkItem>
        <div className="image">
          <LazyImageFull
            src="https://source.unsplash.com/random"
            alt={`${link.title}`}
            title={`${link.title}`}
          >
            {({ imageProps, imageState, ref }) => (
              <img // eslint-disable-line
                {...imageProps}
                ref={ref}
                src={
                  imageState === ImageState.LoadSuccess ? imageProps.src : Fill
                }
              />
            )}
          </LazyImageFull>
        </div>

        <div className="itemContent">
          <UiText variant={'contentBold'}>{link.title}</UiText>
        </div>
      </StyledLinkItem>
    </motion.li>
  )
}

export default LinkItem
