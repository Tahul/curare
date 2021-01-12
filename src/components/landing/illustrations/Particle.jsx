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
      {particle === 'podcast' && (
        <>
          <path
            fill="#9fa8da"
            d="M33,24c0,3.3-2.7,6-6,6h-6c-3.3,0-6-2.7-6-6V10c0-3.3,2.7-6,6-6h6c3.3,0,6,2.7,6,6V24z"
          />
          <path fill="#3f51b5" d="M22 34H26V44H22z" />
          <path fill="#303f9f" d="M35,43c0,0-6-2-11-2s-11,2-11,2v2h22V43z" />
          <path
            fill="#5c6bc0"
            d="M15 10H23V12H15zM25 10H33V12H25zM25 14H33V16H25zM15 14H23V16H15zM25 18H33V20H25zM15 18H23V20H15zM15 22H23V24H15zM25 22H33V24H25z"
          />
          <path
            fill="#3f51b5"
            d="M26,35h-4c-3.1,0-9-1.7-9-8v-9h2v9c0,5.9,6.7,6,7,6h4c0.3,0,7-0.1,7-6v-9h2v9C35,33.3,29.1,35,26,35z"
          />
        </>
      )}

      {particle === 'music' && (
        <>
          <path
            fill="#f44336"
            d="M16,13c0,0,0,23.988,0,24h3V21.583L36,16v17h3V6L16,13z"
          />
          <path
            fill="#f44336"
            d="M13 31A6 6 0 1 0 13 43 6 6 0 1 0 13 31zM33 27A6 6 0 1 0 33 39 6 6 0 1 0 33 27z"
          />
        </>
      )}

      {particle === 'book' && (
        <>
          <path
            fill="#7E57C2"
            d="M38,5L14,4.998c-2.207,0-4.816,1.068-4.984,6.002H9c0,0,0,19.824,0,28l0.018-0.054C9.2,42.585,11.565,43,12.607,43H36c0.188,0,0.5,0,1,0c2,0,2-2,2-2v-5.998V6C39,5.447,38.553,5,38,5z"
          />
          <path
            fill="#FFE0B2"
            d="M36,36H12.607C11.275,36,11,37.119,11,38.5c0,1.382,0.275,2.502,1.607,2.502L36,41V36z"
          />
          <path
            fill="#E0B990"
            d="M12.607,36c-1.167,0-1.522,0.858-1.593,2H36v-2H12.607z"
          />
          <path fill="#FFECB3" d="M14 10.998H35V15.998H14z" />
          <path
            fill="#311B92"
            d="M38,36h-2v7c0.188,0,0.5,0,1,0c2,0,2-2,2-2v-5.998C39,35.553,38.553,36,38,36z"
          />
        </>
      )}
    </motion.svg>
  )
}

export default Particle
