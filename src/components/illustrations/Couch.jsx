import { motion } from 'framer-motion'
import React from 'react'

const Couch = ({ style, ...rest }) => {
  return (
    <motion.svg
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      {...rest}
      style={style}
      viewBox="0 0 450 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.7005 223.34L57.5061 279.759L62.6289 280L81.6639 217.989L62.8742 215.361L62.7005 223.34Z"
        fill="#090E2B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M369.72 217.989L388.755 280L393.878 279.759L388.684 223.339L388.509 215.361L369.72 217.989Z"
        fill="#090E2B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.7862 222.567L90.5918 278.987L95.7146 279.227L114.75 217.217L95.9602 214.588L95.7862 222.567Z"
        fill="#090E2B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M349.821 222.567L355.015 278.987L349.892 279.227L330.857 217.217L349.647 214.588L349.821 222.567Z"
        fill="#090E2B"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="450"
        height="207"
      >
        <path d="M0 0H450V206.309H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.781 130.037C30.781 130.037 -32.7564 48.9229 22.7399 23.5204C62.0386 5.5318 305.564 -23.4438 428.858 30.4725C428.858 30.4725 478.465 55.0808 420.839 119.517L388.675 201.049L69.645 206.309L30.781 130.037Z"
          fill="#008BF2"
        />
      </g>
      <path
        d="M31.6399 114.332C-2.31314 53.7956 33.6419 38.5475 33.6419 38.5475C58.7287 23.0839 140.734 11.4102 222.955 11.4102C305.175 11.4102 387.181 23.0839 412.268 38.5475C412.268 38.5475 448.222 53.7956 414.269 114.332"
        stroke="#090E2B"
        strokeWidth="3.50058"
      />
      <path
        d="M73.6643 156.473L382.056 158.937"
        stroke="#090E2B"
        strokeWidth="2.91715"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M342.483 80.9314C316.273 80.9314 311.687 135.643 313.672 154.87C313.672 154.87 313.871 163.332 317.463 161.553C321.055 159.774 364.043 170.927 375.087 170.016C375.087 170.016 412.353 124.646 404.563 102.703C398.549 91.0172 354.023 80.9314 342.483 80.9314Z"
        fill="#FFB201"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M373.099 177.05H80.597C74.6514 150.462 55.4952 96.4574 13.8392 116.868C13.8392 116.868 -3.13358 129.586 15.8357 147.197C30.0376 160.381 34.0225 174.113 36.0091 192.91C37.4655 206.692 47 218.419 60.3915 222.867C61.6059 223.27 62.4897 223.509 62.8784 223.509H390.884C391.238 223.509 391.99 223.315 393.022 222.983C406.555 218.619 416.219 206.82 417.685 192.933C419.67 174.125 423.653 160.386 437.86 147.197C456.83 129.586 439.857 116.868 439.857 116.868C398.201 96.4574 379.045 150.462 373.099 177.05Z"
        fill="#276DFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M431.91 135.112C431.91 140.192 427.707 144.311 422.523 144.311C417.339 144.311 413.136 140.192 413.136 135.112C413.136 130.031 417.339 125.913 422.523 125.913C427.707 125.913 431.91 130.031 431.91 135.112Z"
        fill="#090E2B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.9369 135.112C42.9369 140.192 38.7341 144.311 33.5496 144.311C28.3651 144.311 24.1626 140.192 24.1626 135.112C24.1626 130.031 28.3651 125.913 33.5496 125.913C38.7341 125.913 42.9369 130.031 42.9369 135.112Z"
        fill="#090E2B"
      />
    </motion.svg>
  )
}

export default Couch
