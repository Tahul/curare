import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import renderHtml from '../../plugins/renderHtml'

// Components
import { ImageState, LazyImageFull } from 'react-lazy-images'
import { Button, Icon, IconButton, theme, UiText } from '@heetch/flamingo-react'

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
    height: 130px;
    overflow: hidden;
    cursor: ${(props) => (!props.editing ? 'pointer' : 'cursor')};

    img {
      width: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  .content {
    padding: ${theme.space.l};
    overflow: hidden;
    cursor: ${(props) => (!props.editing ? 'pointer' : 'cursor')};

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        fill: ${theme.color.element.tertiary};
      }

      span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: ${theme.space.m};
      }
    }

    .line {
      margin-top: ${theme.space.l};
      width: 100%;
    }
  }

  .actions {
    padding: 0 ${theme.space.l};
    display: flex;
    justify-content: flex-end;

    .expand {
      transform: rotate(90deg);
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

const LinkItem = ({ link, i, editing = false, editable, onSave, onDelete }) => {
  const [hash, setHash] = React.useState(Date.now())

  const { ogp } = link

  const [full, setFull] = React.useState(false)

  const toggleFull = () => {
    setFull(!full)
  }

  const handleSave = () => {
    onSave(link)
  }

  const handleDelete = () => {
    onDelete(link)
  }

  const handleOpen = () => {
    window.open(link.url, '_blank')
  }

  React.useEffect(() => {
    let isMounted = true

    if (isMounted) setHash(Date.now())

    return () => (isMounted = false)
  }, [link])

  return (
    <motion.li
      custom={i}
      animate="visible"
      variants={item}
      whileHover={editing ? false : { scale: 1.03 }}
      whileTap={editing ? false : { scale: 1 }}
    >
      <StyledLinkItem editing={editing}>
        {ogp?.og?.['og:image'] ? (
          <div className="image" onClick={editing ? null : handleOpen}>
            <LazyImageFull
              src={`${ogp.og['og:image']}?${hash}`}
              alt={`${ogp.title}`}
              title={`${ogp.title}`}
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
          </div>
        ) : null}

        <div className="content" onClick={editing ? null : handleOpen}>
          <UiText
            className="title"
            variant="contentBold"
            alt={link?.url}
            title={link?.url}
          >
            {renderHtml('span', ogp.title || ogp.domain)}

            <Icon icon="IconGlobe" />
          </UiText>

          {ogp.description ? (
            <ExpandableText
              full={full}
              className="line"
              text={ogp.description}
            />
          ) : null}
        </div>

        <div className="actions">
          {ogp.description ? (
            ogp?.description.length > 35 && !full ? (
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
            )
          ) : (
            ''
          )}

          {editable ? (
            link?.id ? (
              <IconButton icon="IconTrash" onClick={handleDelete} />
            ) : (
              <Button onClick={handleSave} icon="IconCheck">
                Save
              </Button>
            )
          ) : null}
        </div>
      </StyledLinkItem>
    </motion.li>
  )
}

export default LinkItem
