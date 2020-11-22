import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '@heetch/flamingo-react'

// Components
import CollectionItem from './CollectionItem'
import useLinks from '../../hooks/useLinks'
import LinkItem from '../links/LinkItem'

const StyledSelectedCollection = styled.div`
  margin-bottom: ${theme.space.l};

  .selected {
    margin-bottom: calc(${theme.space.xxl} + ${theme.space.s});

    .f-Item {
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

const SelectedCollection = ({ collection, onClose }) => {
  const [links] = useLinks()

  const handleClose = () => {
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <StyledSelectedCollection>
        <motion.ul initial="hidden" animate="visible" variants={list}>
          <CollectionItem
            className="selected"
            selected={true}
            collection={collection}
            i={0}
            icon={false}
            onClick={handleClose}
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
