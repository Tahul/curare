import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Button, Icon, IconButton, theme, UiText } from '@heetch/flamingo-react'

// Components
import { ImageState, LazyImageFull } from 'react-lazy-images'

// Assets
import Fill from '../../assets/images/fill.png'
import ExpandableText from './ExpandableText'

const StyledLinkItem = styled.div`
  width: 100%;
  background-color: ${theme.color.text.white};
  margin-top: ${theme.space.l};
  border-radius: ${theme.borderRadius.m};
  overflow: hidden;

  .image {
    height: 125px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .itemContent {
    padding: ${theme.space.l};
    overflow: hidden;

    .title p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .line {
      margin-top: ${theme.space.l};
      width: 100%;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      margin-top: ${theme.space.l};

      .expand {
        transform: rotate(90deg);
      }
    }
  }
`

const renderHTML = (rawHTML) =>
  React.createElement('p', { dangerouslySetInnerHTML: { __html: rawHTML } })

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

const LinkItem = ({ link, i, editing = false, onSave }) => {
  const { ogp } = link

  const [full, setFull] = React.useState(false)

  const toggleFull = () => {
    setFull(!full)
  }

  const handleSave = () => {
    onSave(link)
  }

  return (
    <motion.li
      custom={i}
      animate="visible"
      variants={item}
      whileHover={editing ? false : { scale: 1.03 }}
      whileTap={editing ? false : { scale: 1 }}
    >
      <StyledLinkItem>
        <div className="image">
          <LazyImageFull
            src={ogp?.og?.['og:image']}
            alt={`${ogp.title}`}
            title={`${ogp.title}`}
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
          <UiText className="title" variant="contentBold">
            {renderHTML(ogp.title)}
          </UiText>

          <ExpandableText
            full={full}
            className="line"
            text={ogp?.description}
          />

          <div class="actions">
            {ogp?.description.length > 35 && !full ? (
              <IconButton
                className="expand"
                onClick={toggleFull}
                icon="IconOption"
              />
            ) : (
              <IconButton
                className="expand"
                onClick={toggleFull}
                icon="IconCross"
              />
            )}

            <Button onClick={handleSave} icon="IconCheck">
              Save
            </Button>
          </div>
        </div>
      </StyledLinkItem>
    </motion.li>
  )
}

export default LinkItem
