import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Components
import { Item, theme, UiText } from '@heetch/flamingo-react'
import { LazyImageFull, ImageState } from 'react-lazy-images'

// Assets
import Fill from '../../assets/images/fill.png'

const StyledCollectionItem = styled.div`
  margin-top: ${theme.space.xl};

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
      delay: i * 0.05,
    },
  }),
  hidden: { opacity: 0.25, y: 100 },
}

const CollectionItem = ({ collection, i, onOpen }) => {
  const onClick = () => {
    onOpen(collection, i)
  }

  return (
    <motion.li
      custom={i}
      animate="visible"
      variants={item}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
    >
      <StyledCollectionItem>
        <Item onClick={onClick}>
          <div className="itemContent">
            <LazyImageFull
              src="https://source.unsplash.com/random/48x48"
              alt={`${collection.title}`}
              title={`${collection.title}`}
            >
              {({ imageProps, imageState, ref }) => (
                <img // eslint-disable-line
                  {...imageProps}
                  ref={ref}
                  src={
                    imageState === ImageState.LoadSuccess
                      ? imageProps.src
                      : Fill
                  }
                />
              )}
            </LazyImageFull>

            <UiText>{collection.title}</UiText>
          </div>
        </Item>
      </StyledCollectionItem>
    </motion.li>
  )
}

export default CollectionItem
