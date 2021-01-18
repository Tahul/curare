import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import useIsMounted from '../../hooks/useIsMounted'

const Phone = ({ style, ...rest }) => {
  const isMounted = useIsMounted()
  const groupControls = useAnimation()

  useEffect(() => {
    const startAnimation = async () => {
      if (isMounted)
        await groupControls.set({
          y: 100,
          x: 0,
          opacity: 0,
        })

      if (isMounted)
        await groupControls.start({
          y: 0,
          opacity: 1,
          transition: {
            delay: 1.25,
            duration: 0.5,
          },
        })

      if (isMounted)
        await groupControls.start({
          y: 100,
          opacity: 0,
          transition: {
            delay: 2,
            duration: 0.25,
          },
        })

      if (isMounted) startAnimation()
    }

    if (isMounted) startAnimation()
  })

  return (
    <motion.svg
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      {...rest}
      style={style}
      viewBox="0 0 297 533"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M263.354 533H32.8478C14.7064 533 0 518.441 0 500.482V32.5181C0 14.5588 14.7064 0 32.8478 0H263.354C281.495 0 296.202 14.5588 296.202 32.5181V500.482C296.202 518.441 281.495 533 263.354 533Z"
        fill="#190134"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M254.705 21.9438H219.823V30.8617C219.823 43.0198 209.867 52.8768 197.584 52.8768H98.6171C86.3349 52.8768 76.3779 43.0198 76.3779 30.8609V21.9438H41.4968C30.8202 21.9438 22.1652 30.5113 22.1652 41.0808V491.92C22.1652 502.489 30.8202 511.057 41.4968 511.057H254.705C265.381 511.057 274.036 502.489 274.036 491.92V41.0808C274.036 30.5113 265.381 21.9438 254.705 21.9438Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.667 244.633H58.881C52.2057 244.633 46.7948 239.32 46.7948 232.766V135.604C46.7948 129.05 52.2057 123.737 58.881 123.737H240.667C247.343 123.737 252.754 129.05 252.754 135.604V232.766C252.754 239.32 247.343 244.633 240.667 244.633Z"
        fill="#FFB201"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.5288 325.8H58.7814C52.1612 325.8 46.7948 320.487 46.7948 313.934V286.465C46.7948 279.911 52.1612 274.599 58.7814 274.599H86.5288C93.149 274.599 98.5154 279.911 98.5154 286.465V313.934C98.5154 320.487 93.149 325.8 86.5288 325.8Z"
        fill="#FF2773"
      />
      <path
        d="M249.983 274.599H119.142C117.612 274.599 116.371 275.827 116.371 277.342C116.371 278.857 117.612 280.085 119.142 280.085H249.983C251.513 280.085 252.754 278.857 252.754 277.342C252.754 275.827 251.513 274.599 249.983 274.599Z"
        fill="#E7EAFD"
      />
      <path
        d="M215.81 294.104H119.142C117.612 294.104 116.371 295.332 116.371 296.847C116.371 298.362 117.612 299.59 119.142 299.59H215.81C217.341 299.59 218.581 298.362 218.581 296.847C218.581 295.332 217.341 294.104 215.81 294.104Z"
        fill="#E7EAFD"
      />
      <path
        d="M192.721 313.609H119.142C117.612 313.609 116.371 314.837 116.371 316.352C116.371 317.867 117.612 319.095 119.142 319.095H192.721C194.251 319.095 195.492 317.867 195.492 316.352C195.492 314.837 194.251 313.609 192.721 313.609Z"
        fill="#E7EAFD"
      />

      <motion.g animate={groupControls}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M86.5288 401.688H58.7814C52.1612 401.688 46.7948 396.376 46.7948 389.822V362.353C46.7948 355.799 52.1612 350.487 58.7814 350.487H86.5288C93.149 350.487 98.5154 355.799 98.5154 362.353V389.822C98.5154 396.376 93.149 401.688 86.5288 401.688Z"
          fill="#2B1E70"
        />

        <path
          d="M249.983 354.144H119.142C117.612 354.144 116.371 355.372 116.371 356.887C116.371 358.402 117.612 359.63 119.142 359.63H249.983C251.513 359.63 252.754 358.402 252.754 356.887C252.754 355.372 251.513 354.144 249.983 354.144Z"
          fill="#E7EAFD"
        />

        <path
          d="M215.81 373.649H119.142C117.612 373.649 116.371 374.877 116.371 376.392C116.371 377.907 117.612 379.135 119.142 379.135H215.81C217.341 379.135 218.581 377.907 218.581 376.392C218.581 374.877 217.341 373.649 215.81 373.649Z"
          fill="#E7EAFD"
        />

        <path
          d="M192.721 393.155H119.142C117.612 393.155 116.371 394.383 116.371 395.897C116.371 397.412 117.612 398.64 119.142 398.64H192.721C194.251 398.64 195.492 397.412 195.492 395.897C195.492 394.383 194.251 393.155 192.721 393.155Z"
          fill="#E7EAFD"
        />
      </motion.g>
    </motion.svg>
  )
}

export default Phone