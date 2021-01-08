import { motion } from 'framer-motion'
import React from 'react'

const Bush = ({ style, ...rest }) => {
  return (
    <motion.svg
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      {...rest}
      style={style}
      width="100%"
      height="250"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.7327 250C66.7327 250 51.5992 203.337 21.1818 160.618C-9.23569 117.899 -4.79848 88.8064 21.1818 81.3123C47.162 73.8181 89.3806 95.9407 102.444 126.166C110.89 145.71 125.242 207.52 89.8382 250C79.7234 249.725 66.7327 250 66.7327 250Z"
        fill="#017C7F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.3498 87.9983C41.7289 4.43137 73.9633 -7.03489 109.794 3.08365C145.624 13.2022 169.781 57.2336 164.315 99.2985C155.973 163.502 107.06 250 107.06 250H78.9707C78.9707 197.71 72.7638 143.71 60.3498 87.9983Z"
        fill="#009BA0"
      />
      <path
        d="M100.589 31.3977C100.589 31.3977 114.563 61.9954 116.61 117.899C118.186 160.938 110.089 197.801 96.8224 249.85"
        stroke="#190134"
        strokeWidth="1.99468"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M197.08 93.3141C250.881 90.6085 254.3 134.705 247.321 152.861C239.087 174.282 214.384 188.56 194.648 197.042C148.218 216.995 136.397 250 136.397 250H95.7452C95.7452 250 103.503 98.0201 197.08 93.3141Z"
        fill="#FFB201"
      />
      <path
        d="M117.152 249.85C128.72 187.614 158.16 146.993 205.472 127.989"
        stroke="#190134"
        strokeWidth="1.99468"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

export default Bush
