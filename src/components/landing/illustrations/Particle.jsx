import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import useIsMounted from '../../../hooks/useIsMounted'

const Particle = ({ particle = 'book', children, style, ...rest }) => {
  const isMounted = useIsMounted()
  const controls = useAnimation()

  useEffect(() => {
    const startAnimation = async () => {
      if (isMounted)
        await controls.set({
          scale: 0.25,
          x: 0,
          y: 0,
          opacity: 0,
        })

      if (isMounted)
        await controls.start({
          scale: 1,
          y: 0,
          opacity: 1,
        })

      if (isMounted)
        await controls.start({
          y: -100,
          opacity: 0,
          transition: {
            duration: 3,
          },
        })

      if (isMounted) {
        await controls.start({
          y: 0,
          scale: 0.25,
        })
      }

      startAnimation()
    }

    if (isMounted) startAnimation()
  })

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      initial={{ y: 0, opacity: 0 }}
      animate={controls}
      style={style}
      {...rest}
    >
      <text fontSize="2em" text-anchor="middle" x="50%" y="20%" dy=".25em">
        {children}
      </text>
    </motion.svg>
  )
}

export default Particle
