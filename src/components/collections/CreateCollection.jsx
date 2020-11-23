import React from 'react'
import styled from 'styled-components'

// Components
import { Button, Card, theme } from '@heetch/flamingo-react'
import { motion } from 'framer-motion'
import CollectionForm from './CollectionForm'

const StyledCreateCollection = styled.div`
  .buttons {
    margin-top: ${theme.space.l};

    button {
      margin-top: 0;
      margin-bottom: ${theme.space.l};
      width: 100%;
    }
  }
`

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

const buttonsVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0.25,
    y: 50,
  },
}

const CreateCollection = ({ loading, createCollection, onFormOpen }) => {
  const [isCreating, setIsCreating] = React.useState(false)

  const handleCreate = () => {
    setIsCreating(true)

    onFormOpen()
  }

  const handleClose = () => {
    setIsCreating(false)
  }

  return (
    <StyledCreateCollection>
      {isCreating ? (
        <motion.div variants={formVariants} initial="hidden" animate="visible">
          <CollectionForm
            onCancel={handleClose}
            onCreateCollection={createCollection}
            loading={loading}
          />
        </motion.div>
      ) : null}

      {!isCreating ? (
        <motion.div
          className="buttons"
          variants={buttonsVariants}
          initial="hidden"
          animate="visible"
        >
          <Button onClick={handleCreate}>New collection</Button>
        </motion.div>
      ) : null}
    </StyledCreateCollection>
  )
}

export default CreateCollection
