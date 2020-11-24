import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Icon, Text, theme, UiText } from '@heetch/flamingo-react'

// Components
import CollectionItem from './CollectionItem'
import useLinks from '../../hooks/useLinks'
import LinkItem from '../links/LinkItem'

const StyledSelectedCollection = styled.div`
  margin-bottom: ${theme.space.l};

  .back {
    display: flex;
    align-items: center;
    margin-top: ${theme.space.l};
    cursor: pointer;

    &:hover {
      color: ${theme.color.element.tertiary};
    }

    .f-Icon {
      margin-right: ${theme.space.s};
    }
  }

  .selected {
    margin-bottom: calc(${theme.space.xxl} + ${theme.space.s});

    .f-Item {
      .f-Icon {
        display: none;
      }

      &:hover {
        background-color: white;
      }
    }
  }
`

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const SelectedCollection = ({
  collection,
  onClose,
  loading,
  deleteCollection,
  updateCollection,
}) => {
  const [links] = useLinks()

  const handleBack = () => {
    onClose()
  }

  const handleUpdate = async (payload) => {
    await updateCollection(payload)

    onClose()
  }

  const handleDelete = async ({ id }) => {
    await deleteCollection({ id })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <StyledSelectedCollection>
        <Text className="back" variant="contentBold" onClick={handleBack}>
          <Icon icon="IconArrowLeft" />
          Go back to collections
        </Text>

        <motion.ul initial="hidden" animate="visible" variants={list}>
          <CollectionItem
            className="selected"
            selected={true}
            collection={collection}
            i={0}
            loading={loading}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />

          {links.map((link, i) => (
            <LinkItem key={link.id} link={link} i={i} />
          ))}
        </motion.ul>
      </StyledSelectedCollection>
    </motion.div>
  )
}

export default SelectedCollection
