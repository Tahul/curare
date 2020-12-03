import { Text } from '@heetch/flamingo-react'
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import renderHtml from '../../plugins/renderHtml'

const StyledExpandableText = styled.div``

const ExpandableText = ({ full, text = '', ...props }) => {
  const displayText = full ? text : text.slice(0, 35)

  return (
    <StyledExpandableText {...props}>
      <motion.div
        initial={{ height: '1rem' }}
        animate={full ? { height: 'auto' } : { height: '1rem' }}
      >
        <Text>
          {renderHtml(
            'span',
            `${displayText}${!full && text.length > 35 ? '...' : ''}`,
          )}
        </Text>
      </motion.div>
    </StyledExpandableText>
  )
}

export default ExpandableText
