import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Icon, Text, theme } from '@heetch/flamingo-react'

// Components
import CollectionItem from './CollectionItem'
import useLinks from '../../hooks/useLinks'
import LinkItem from '../links/LinkItem'
import { useHistory } from 'react-router-dom'
import CollectionForm from './CollectionForm'
import AddLink from '../links/AddLink'

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

const formVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0.25,
    y: -50,
  },
}

const contentVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0.25,
    y: 50,
  },
}

const SelectedCollection = ({
  userName,
  collection,
  onClose,
  loading,
  deleteCollection,
  updateCollection,
  updateCollectionImage,
  onSelectCollection,
}) => {
  const [edit, setEdit] = React.useState(false)
  const { links, getLinkPreview } = useLinks({ collectionId: collection.id })
  const history = useHistory()

  const handleBack = () => {
    onClose()
  }

  const toggleEdit = () => {
    setEdit(!edit)
  }

  const handleUpdate = async ({ title }) => {
    const updatedCollection = await updateCollection({
      id: collection.id,
      title,
    })

    onSelectCollection(updatedCollection)

    setEdit(false)

    return updatedCollection
  }

  const handleImageUpdate = async ({ id, image }) => {
    const collection = await updateCollectionImage({ id, image })

    onSelectCollection(collection)
  }

  const handleDelete = async ({ id }) => {
    await deleteCollection({ id })

    history.push(`/profile/${userName}`)
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
            onEdit={toggleEdit}
          />

          {!edit && (
            <motion.div
              id="content"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <AddLink onLinkPreview={getLinkPreview} />

              {links.map((link, i) => (
                <LinkItem key={link.id} link={link} i={i + 1} />
              ))}
            </motion.div>
          )}

          {edit && (
            <motion.div
              id="form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <CollectionForm
                collection={collection}
                onSubmit={handleUpdate}
                onImageUpdate={handleImageUpdate}
                onCancel={toggleEdit}
              />
            </motion.div>
          )}
        </motion.ul>
      </StyledSelectedCollection>
    </motion.div>
  )
}

export default SelectedCollection
