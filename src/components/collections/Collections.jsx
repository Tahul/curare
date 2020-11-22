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
  loading,
  collections,
  selectedCollection,
  selectedCollectionId,
  onSelectCollection,
  createCollection,
  updateCollection,
  deleteCollection,
}) => {
  const onOpen = (collection, i) => {
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
      {selectedCollection && selectedCollectionId ? (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }}>
          <SelectedCollection
            id={selectedCollectionId}
            key={selectedCollectionId}
            collection={selectedCollection}
            onClose={onSelectCollection}
            onFormOpen={hanldeScrollBottom}
          />
        </motion.div>
      ) : (
        <motion.ul initial="hidden" animate="visible" variants={list}>
          {collections.map((collection, i) => (
            <CollectionItem
              key={collection.id}
              i={i}
              collection={collection}
              onClick={onOpen}
            />
          ))}
        </motion.ul>
      )}

      <CreateCollection
        createCollection={createCollection}
        loading={loading}
        onFormOpen={hanldeScrollBottom}
      />
    </div>
  )
}

export default Collections
