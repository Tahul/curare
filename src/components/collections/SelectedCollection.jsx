import { theme } from '@heetch/flamingo-react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import useIsMounted from '../../hooks/useIsMounted'
import useLinks from '../../hooks/useLinks'
import BackButton from '../layout/BackButton'
import AddLink from '../links/AddLink'
import LinkItem from '../links/LinkItem'
import CollectionForm from './CollectionForm'
import CollectionItem from './CollectionItem'

const StyledSelectedCollection = styled.div`
  margin-bottom: ${theme.space.l};

  .selected {
    margin-bottom: ${(props) =>
      props.editable ? `calc(${theme.space.xxl} + ${theme.space.s})` : 0};

    .f-Item {
      .f-Icon {
        display: none;
      }

      &:hover {
        background-color: white;
      }
    }
  }

  li {
    margin-top: ${theme.space.l};
  }

  .f-FormEl-wrapper {
    margin: 0;
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
  editable,
  collection,
  onClose,
  loading,
  deleteCollection,
  updateCollection,
  updateCollectionImage,
  onUpdateSelectedCollection,
  refreshCollection,
}) => {
  const isMounted = useIsMounted()
  const [loadingLink, setLoadingLink] = React.useState(false)
  const [edit, setEdit] = React.useState(false)
  const { links, getLinkPreview, createLink, deleteLink, clickLink } = useLinks(
    {
      collectionId: collection.id,
    },
  )
  const history = useHistory()

  const toggleEdit = () => {
    setEdit(!edit)
  }

  const handleUpdate = async ({ title }, isUpdatingImage = false) => {
    const updatedCollection = await updateCollection({
      id: collection.id,
      title,
    })

    onUpdateSelectedCollection(updatedCollection)

    return updatedCollection
  }

  const handleImageUpdate = async ({ id, image }) => {
    const updatedCollection = await updateCollectionImage({ id, image })

    onUpdateSelectedCollection(updatedCollection)

    return updatedCollection
  }

  const handleDelete = async ({ id }) => {
    await deleteCollection({ id })

    history.push(`/profile/${userName}`)
  }

  const handleLinkSave = async ({ url, ogp }) => {
    const link = { collection_id: collection.id, url, ogp }

    await createLink(link)

    const updatedCollection = await refreshCollection({ id: collection.id })

    onUpdateSelectedCollection(updatedCollection)
  }

  const handleLinkDelete = async ({ id }) => {
    if (isMounted) setLoadingLink(id)

    await deleteLink({ id })

    const updatedCollection = await refreshCollection({ id: collection.id })

    onUpdateSelectedCollection(updatedCollection)

    if (isMounted) setLoadingLink(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <StyledSelectedCollection editable={editable}>
        <BackButton onBack={onClose}>Go back to collections</BackButton>

        <motion.ul initial="hidden" animate="visible" variants={list}>
          <CollectionItem
            className="selected"
            selected={true}
            collection={collection}
            i={0}
            loading={loading}
            onDelete={handleDelete}
            onEdit={toggleEdit}
            editable={editable}
            isEditing={edit}
          />

          {!edit && (
            <motion.div
              id="content"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {editable ? (
                <AddLink
                  onLinkPreview={getLinkPreview}
                  onLinkSave={handleLinkSave}
                />
              ) : null}

              <AnimatePresence>
                {links.map((link) => (
                  <LinkItem
                    key={link.id}
                    link={link}
                    editable={editable}
                    onDelete={handleLinkDelete}
                    onOpen={clickLink}
                    loading={loadingLink === link.id}
                  />
                ))}
              </AnimatePresence>
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
