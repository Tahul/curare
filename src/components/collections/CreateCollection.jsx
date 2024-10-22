import { Button, theme } from '@heetch/flamingo-react'
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import useActionsSounds from '../../hooks/useActionsSounds'
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
    y: -100,
  },
}

const buttonsVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0.25,
    y: 100,
  },
}

const CreateCollection = ({
  loading,
  createCollection,
  updateCollectionImage,
  onFormOpen,
}) => {
  const { playButton } = useActionsSounds()
  const [formVisible, setFormVisible] = React.useState(false)

  const handleCreate = () => {
    setFormVisible(true)

    playButton()

    onFormOpen()
  }

  const handleClose = () => {
    setFormVisible(false)
  }

  return (
    <StyledCreateCollection>
      {formVisible ? (
        <motion.div variants={formVariants} initial="hidden" animate="visible">
          <CollectionForm
            onCancel={handleClose}
            onSubmit={createCollection}
            onImageUpdate={updateCollectionImage}
            loading={loading}
          />
        </motion.div>
      ) : null}

      {!formVisible ? (
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
