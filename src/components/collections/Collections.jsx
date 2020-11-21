import React from 'react'
import { motion } from 'framer-motion'

// Components
import CollectionItem from './CollectionItem'
import SelectedCollection from './SelectedCollection'

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Collections = ({
  collections,
  onCollectionsSave,
  editable,
  selectedCollection,
  selectedCollectionId,
  onSelectCollection,
}) => {
  const onOpen = (collection, i) => {
    onSelectCollection(collection)
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
    </div>
  )
}

export default Collections
