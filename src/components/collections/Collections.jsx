import { motion } from 'framer-motion'
import React from 'react'
import CollectionItem from './CollectionItem'
import CreateCollection from './CreateCollection'
import SelectedCollection from './SelectedCollection'

const Collections = ({
  userName,
  loading,
  editable,
  collections,
  selectedCollection,
  onSelectCollection,
  createCollection,
  updateCollection,
  deleteCollection,
  refreshCollection,
  updateCollectionImage,
  onUpdateSelectedCollection,
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
      {selectedCollection && (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }}>
          <SelectedCollection
            userName={userName}
            id={selectedCollection.id}
            key={selectedCollection.id}
            collection={selectedCollection}
            onClose={onSelectCollection}
            onFormOpen={hanldeScrollBottom}
            updateCollection={updateCollection}
            deleteCollection={deleteCollection}
            updateCollectionImage={updateCollectionImage}
            onUpdateSelectedCollection={onUpdateSelectedCollection}
            refreshCollection={refreshCollection}
            loading={loading}
            editable={editable}
          />
        </motion.div>
      )}

      {collections && !selectedCollection && (
        <ul>
          {collections.map((collection, i) => (
            <CollectionItem
              loading={loading}
              key={collection.id}
              i={i + 1}
              collection={collection}
              onClick={onOpen}
            />
          ))}

          {editable && !loading ? (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: collections.length * 0.02 },
              }}
            >
              <CreateCollection
                createCollection={createCollection}
                updateCollectionImage={updateCollectionImage}
                loading={loading}
                onFormOpen={hanldeScrollBottom}
              />
            </motion.div>
          ) : null}
        </ul>
      )}
    </div>
  )
}

export default Collections
