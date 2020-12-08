import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import renderHtml from '../../plugins/renderHtml'

// Hooks
import useActionsSounds from '../../hooks/useActionsSounds'

// Components
import {
  Button,
  Icon,
  IconButton,
  Text,
  theme,
  UiText,
} from '@heetch/flamingo-react'

// Assets
import ExpandableText from './ExpandableText'
import { Img } from 'react-image'

const StyledLinkItem = styled.div`
  width: 100%;
  background-color: ${theme.color.text.white};
  margin-top: ${theme.space.l};
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

      .f-Text {
        margin-right: ${theme.space.s};
      }
    }

    .actions {
      display: flex;
      justify-content: flex-end;

      .expand {
        transform: rotate(90deg);
      }
    }
  }
`

const LinkItem = ({
  link,
  i,
  editing = false,
  loading = false,
  editable,
  onSave,
  onDelete,
  onOpen,
}) => {
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

  return (
    <motion.li
      initial={{
        opacity: 1,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.05,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <StyledLinkItem editing={editing}>
        {ogp?.og?.['og:image'] ? (
          <div className="image" onClick={editing ? null : handleOpen}>
            <Img
              src={`${ogp.og['og:image']}`}
              alt={`${ogp.title}`}
              title={`${ogp.title}`}
            />
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

        <div className="footer">
          <div className="infos">
            <Text>
              {link.clicks > 0 ? `${link.clicks} clicks` : `No clicks yet`}
            </Text>
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
