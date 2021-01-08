import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import useIsMounted from '../../../hooks/useIsMounted'

const Heart = ({ style, ...rest }) => {
  const isMounted = useIsMounted()
  const heartControls = useAnimation()

  useEffect(() => {
    const startAnimation = async () => {
      if (isMounted)
        await heartControls.set({
          x: 0,
          y: 0,
          rotate: 0,
          scale: 0,
          opacity: 0,
        })

      if (isMounted)
        await heartControls.start({
          scale: 1,
          opacity: 1,
          rotate: -12,
          transition: {
            delay: 1,
            duration: 0.5,
          },
        })

      if (isMounted)
        await heartControls.start({
          scale: 0,
          opacity: 0,
          rotate: 0,
          transition: {
            delay: 2,
            duration: 0.25,
          },
        })

      if (isMounted) startAnimation()
    }

    startAnimation()

    return () => heartControls.stop()
  })

  return (
    <motion.div animate={heartControls} style={style}>
      <svg
        viewBox="437 229 839 667"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M870.655248,332.151974 C816.415285,264.717325 737.139469,231 632.8278,231 C476.360297,231 415.973048,426.854292 456.002243,553.937283 C496.031439,681.020275 752,863.2992 870.655248,894.56823 C989,863.2992 1270,632.709632 1270,471.928856 C1270,311.148081 1156.51703,231 1057.23776,231 C991.051571,231 928.857401,264.717325 870.655248,332.151974 Z"
            id="Path-5"
            fill="#FF0057"
            opacity=".75"
          />
        </g>
      </svg>
    </motion.div>
  )
}
export default Heart
