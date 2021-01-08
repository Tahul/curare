import { motion } from 'framer-motion'
import React from 'react'

export function SplitText({ children, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        <motion.span
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.span>
      </span>
    )
  })
}
