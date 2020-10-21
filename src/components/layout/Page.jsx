import React from 'react'
import { motion } from 'framer-motion'

const Page = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.25, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      {children}
    </motion.div>
  )
}

export default Page
