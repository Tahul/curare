import {
  Button,
  Icon,
  IconButton,
  Text,
  theme,
  UiText,
} from '@heetch/flamingo-react'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { Img } from 'react-image'
import { useInView } from 'react-intersection-observer'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import useActionsSounds from '../../hooks/useActionsSounds'
import renderHtml from '../../plugins/renderHtml'
import ExpandableText from './ExpandableText'

const StyledLinkItem = styled.div`
  width: 100%;
  background-color: ${theme.color.text.white};
  border-radius: ${theme.borderRadius.m};
  overflow: hidden;

  .image {
    height: 150px;
    overflow: hidden;
    cursor: ${(props) => (!props.editing ? 'pointer' : 'cursor')};

    img {
      width: 100%;
      height: 100%;
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

  .footer {
    padding: 0 ${theme.space.l};
    display: flex;
    align-items: center;
    justify-content: space-between;

    .infos {
      display: flex;
      align-items: center;

      p {
        display: flex;
        align-items: center;
        margin-right: ${theme.space.s};
        color: ${theme.color.text.secondary};
        cursor: pointer;

        &:hover {
          font-weight: ${theme.fontWeight.bold};
        }

        img {
          border-radius: 50%;
          height: 1.5rem;
          width: 1.5rem;
          margin-right: ${theme.space.m};
        }
      }
    }

    .actions {
      display: flex;
      justify-content: flex-end;

      .expand {
        transform: rotate(90deg);
      }

      button {
        margin-left: ${theme.space.l};
      }
    }
  }
`

const LinkItem = ({
  link,
  editing = false,
  loading = false,
  editable,
  onSave,
  onDelete,
  onOpen,
}) => {
  const history = useHistory()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-20px 0px',
  })
  const { playButton, playBack } = useActionsSounds()
  const { ogp } = link
  const [full, setFull] = React.useState(false)

  const toggleFull = () => {
    if (!full) {
      playButton()
    } else {
      playBack()
    }

    setFull(!full)
  }

  const handleSave = () => {
    onSave(link)
  }

  const handleDelete = () => {
    onDelete(link)
  }

  const handleOpen = async () => {
    window.open(link.url, '_blank')

    await onOpen(link)
  }

  const handleCollectionOpen = () => {
    history.push(`/profile/${link.profile.name}/${link.collection.slug}`)
  }

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.li
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
    >
      <StyledLinkItem editing={editing}>
        {ogp?.og?.['og:image'] ? (
          <div
            className="image"
            onClick={editing ? null : handleOpen}
            alt={`${ogp.title}`}
            title={`${ogp.title}`}
            style={{
              backgroundImage: `url(${ogp.og['og:image']})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              imageRendering: 'crisp-edges',
            }}
          />
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

        <div className="footer">
          <div className="infos">
            {link.collection ? (
              <motion.p
                onClick={handleCollectionOpen}
                whileHover={{ scale: 1.05 }}
              >
                {link.collection.image_url && (
                  <Img src={link.collection.image_url} />
                )}

                {link.collection.title}
              </motion.p>
            ) : (
              <Text>
                {link.clicks > 0 ? `${link.clicks} clicks` : `No clicks`}
              </Text>
            )}
          </div>

          <div className="actions">
            {ogp && ogp.description && ogp.description.length > 35 && !full ? (
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

            {editable ? (
              link?.id ? (
                <IconButton
                  icon="IconTrash"
                  onClick={handleDelete}
                  isLoading={loading}
                />
              ) : (
                <Button
                  onClick={handleSave}
                  icon="IconCheck"
                  isLoading={loading}
                >
                  Save
                </Button>
              )
            ) : null}
          </div>
        </div>
      </StyledLinkItem>
    </motion.li>
  )
}

export default LinkItem
