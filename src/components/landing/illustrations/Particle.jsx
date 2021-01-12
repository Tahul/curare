import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import useIsMounted from '../../../hooks/useIsMounted'

const availableParticles = ['book', 'art', 'podcasts', 'plants', 'music']

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
      style={{ ...style, zIndex: '999' }}
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

      {particle === 'plants' && (
        <>
          <path
            fill="#8bc34a"
            d="M24,25C24,25,24,25,24,25c-0.6,0-1-0.5-1-1c0-0.1,0.1-5.6-3.3-7.7c-0.5-0.3-0.6-0.9-0.3-1.4 c0.3-0.5,0.9-0.6,1.4-0.3c4.4,2.8,4.3,9.2,4.3,9.5C25,24.6,24.5,25,24,25z"
          />
          <path
            fill="#8bc34a"
            d="M20.2 7C15.4 4.6 7.9 7.3 6 8c2.8 1.7 2.4 10.9 7.5 12.6 3.6 1.2 6.4-.2 6.7-5.2C24.2 13.1 23.6 8.7 20.2 7zM24 28c-.6 0-1-.4-1-1v-3c0-7.8 5.8-9 5.8-9 .5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2C29 17 25 17.9 25 24v3C25 27.6 24.6 28 24 28z"
          />
          <path
            fill="#8bc34a"
            d="M30.2,8.3C34.6,6.9,40.6,11,42,12c-2.6,1-4.3,9.3-8.9,9.9c-3.2,0.4-4.9-1.3-4.1-5.9 C25.4,13.2,27.1,9.2,30.2,8.3z"
          />
          <path
            fill="#689f38"
            d="M13.5 20.6C8.4 18.9 8.8 9.7 6 8c2.5.2 6.1 2.4 14.2 7.4C19.9 20.4 17.2 21.8 13.5 20.6zM33.2 21.9c4.5-.6 6.2-8.9 8.9-9.9-2.1-.3-5.4.9-13 4C27.4 20.5 29.9 22.4 33.2 21.9z"
          />
          <path fill="#e64a19" d="M13,27l3,15h16l3-15H13z" />
          <path
            fill="#bf360c"
            d="M35,30H13c-0.6,0-1-0.5-1-1v-4h24v4C36,29.5,35.5,30,35,30z"
          />
        </>
      )}

      {particle === 'art' && (
        <>
          <path
            fill="#FFC107"
            d="M24.639,4c-8.6,0-18.43,4.954-18.43,18.947C6.209,33.108,13.842,44,25.519,44c0.004,0,0.169,0,0.175,0c4.385-0.079,9.105-2.918,9.105-8.959c0-1.157-0.431-2.159-0.809-3.042c-0.102-0.233-0.199-0.462-0.288-0.694c-0.864-2.175,0.089-2.971,2.329-4.565c2.537-1.806,6.013-4.278,5.968-10.819C41.999,12.032,37.756,4,24.639,4z M25.199,39.2c-2.241,0-4.001-1.76-4.001-3.999c0-2.241,1.76-4.001,4.001-4.001c2.238,0,3.998,1.76,3.998,4.001C29.197,37.44,27.438,39.2,25.199,39.2z"
          />
          <path
            fill="#9C27B0"
            d="M34.5 13A3.5 3.5 0 1 0 34.5 20A3.5 3.5 0 1 0 34.5 13Z"
          />
          <path
            fill="#2196F3"
            d="M25.5 7A3.5 3.5 0 1 0 25.5 14A3.5 3.5 0 1 0 25.5 7Z"
          />
          <path
            fill="#4CAF50"
            d="M15.5 12A3.5 3.5 0 1 0 15.5 19A3.5 3.5 0 1 0 15.5 12Z"
          />
          <path
            fill="#FF3D00"
            d="M14.5 23A3.5 3.5 0 1 0 14.5 30A3.5 3.5 0 1 0 14.5 23Z"
          />
        </>
      )}
    </motion.svg>
  )
}

export default Particle
