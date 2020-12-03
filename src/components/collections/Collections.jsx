import React from 'react'
import { motion } from 'framer-motion'

// Components
import CollectionItem from './CollectionItem'
import SelectedCollection from './SelectedCollection'
import CreateCollection from './CreateCollection'

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Collections = ({
  userName,
  loading,
  editable,
  collections,
  selectedCollection,
  selectedCollectionId,
  onSelectCollection,
  createCollection,
  updateCollection,
  deleteCollection,
  updateCollectionImage,
}) => {
  const onOpen = (collection) => {
    onSelectCollection(collection)
  }

  const hanldeScrollBottom = () => {
    setTimeout(() => {
      document
        .querySelector('body')
        .scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, 100)
  }

  return (
    <div>
      {loading ? null : selectedCollection && selectedCollectionId ? (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }}>
          <SelectedCollection
            userName={userName}
            id={selectedCollectionId}
            key={selectedCollectionId}
            collection={selectedCollection}
            onClose={onSelectCollection}
            onFormOpen={hanldeScrollBottom}
            updateCollection={updateCollection}
            deleteCollection={deleteCollection}
            updateCollectionImage={updateCollectionImage}
            onSelectCollection={onSelectCollection}
            loading={loading}
            editable={editable}
          />
        </motion.div>
      ) : (
        <motion.ul initial="hidden" animate="visible" variants={list}>
          {collections.map((collection, i) => (
            <CollectionItem
              loading={loading}
              key={collection.id}
              i={i}
              collection={collection}
              onClick={onOpen}
            />
          ))}

          <CreateCollection
            createCollection={createCollection}
            updateCollectionImage={updateCollectionImage}
            loading={loading}
            onFormOpen={hanldeScrollBottom}
          />
        </motion.ul>
      )}
    </div>
  )
}

export default Collections
