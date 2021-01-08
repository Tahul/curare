import { motion } from 'framer-motion'
import React from 'react'

const Plants = ({ style, ...rest }) => {
  return (
    <motion.svg
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      {...rest}
      style={style}
      width="100%"
      viewBox="0 0 755 610"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M81.8668 233.84C67.3755 214.387 88.7357 209.686 78.8255 191.368C66.8174 169.171 84.0474 173.628 76.626 151.291C70.7536 133.617 60.4989 132.856 59.5858 107.664C58.674 82.4726 13.0475 81.0536 22.9072 116.259C32.7684 151.465 7.40055 142.796 11.864 168.374C17.8303 202.563 -6.11039 188.869 1.51551 215.182C8.00277 237.566 -19.6601 275.088 46.0986 283.891C104.623 280.916 96.3595 253.294 81.8668 233.84Z"
        fill="#009BA0"
      />
      <path
        d="M31.5731 193.337C31.5731 193.337 33.9893 204.043 45.5318 215.149"
        stroke="#190134"
        strokeWidth="3.02759"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9379 235.64C20.9379 235.64 25.1942 246.182 45.5318 257.122"
        stroke="#190134"
        strokeWidth="3.02759"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.1373 210.522C66.1373 210.522 63.4753 227.368 45.5318 239.606"
        stroke="#190134"
        strokeWidth="3.02759"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M202.269 156.481C189.635 125.586 208.362 103.778 182.668 45.2573C156.974 -13.264 121.981 -13.4705 116.673 35.6219C111.367 84.7143 70.1045 115.884 89.1343 160.196C107.837 203.745 69.092 213.944 81.6618 246.236C97.6398 287.283 150.525 288.849 150.525 288.849C208.117 288.849 217.475 269.94 221.97 253.512C233.759 210.423 207.721 169.815 202.269 156.481Z"
        fill="#FFB201"
      />
      <path
        d="M177.807 103.774C177.807 103.774 173.147 127.294 150.886 151.695"
        stroke="#190134"
        strokeWidth="3.02759"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M186.115 201.93C186.115 201.93 179.96 225.45 150.554 249.851"
        stroke="#190134"
        strokeWidth="3.02759"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M121.307 153.678C121.307 153.678 125.129 181.629 150.886 201.93"
        stroke="#190134"
        strokeWidth="3.02759"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.1995 310V168.881"
        stroke="#190134"
        strokeWidth="3.02759"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M150.554 308.017V74.6909"
        stroke="#190134"
        strokeWidth="3.02759"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

export default Plants
