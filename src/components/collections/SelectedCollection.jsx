import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

// Components
import { Item, theme, UiText } from '@heetch/flamingo-react'
import { LazyImageFull } from 'react-lazy-images'

// Assets
import Fill from '../../assets/images/fill.png'

const StyledSelectedCollection = styled.div`
  margin-top: ${theme.space.l};

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

const SelectedCollection = ({ collection, onClose, onClick }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <StyledSelectedCollection>
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
                    imageState === imageState.LoadSuccess
                      ? imageProps.src
                      : Fill
                  }
                />
              )}
            </LazyImageFull>

            <UiText>{collection.title}</UiText>
          </div>
        </Item>
      </StyledSelectedCollection>
    </motion.div>
  )
}

export default SelectedCollection
