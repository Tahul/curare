import { motion } from 'framer-motion'
import React from 'react'

const Trees = ({ style, ...rest }) => {
  return (
    <motion.svg
      style={style}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      {...rest}
      viewBox="0 0 700 905"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M254.503 678.518C209.453 622.076 275.856 608.436 245.048 555.285C207.718 490.88 261.282 503.813 238.21 439.003C219.954 387.72 188.075 385.511 185.237 312.418C182.402 239.325 40.5611 235.208 71.2125 337.357C101.868 439.506 23.0062 414.352 36.8821 488.568C55.4296 587.767 -18.9958 548.034 4.71113 624.381C24.8784 689.329 -61.1183 798.2 143.309 823.743C325.245 815.111 299.557 734.964 254.503 678.518Z"
        fill="#009BA0"
      />
      <path
        d="M98.4516 561.453C98.4516 561.453 105.956 592.713 141.806 625.14"
        stroke="#090E2B"
        strokeWidth="8.38002"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65.0323 684.637C65.0323 684.637 78.3191 715.069 141.806 746.648"
        stroke="#090E2B"
        strokeWidth="8.38002"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M205.935 610.894C205.935 610.894 197.651 659.919 141.806 695.531"
        stroke="#090E2B"
        strokeWidth="8.38002"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M629.216 454.426C589.877 364.706 648.19 301.376 568.182 131.429C488.174 -38.519 379.208 -39.1187 362.68 103.447C346.156 246.013 217.67 336.53 276.926 465.214C335.164 591.684 214.516 621.3 253.658 715.078C303.412 834.28 468.091 838.827 468.091 838.827C647.427 838.827 676.568 783.916 690.565 736.207C727.274 611.077 646.195 493.148 629.216 454.426Z"
        fill="#FFB201"
      />
      <path
        d="M553.677 301.676C553.677 301.676 539.137 369.949 469.677 440.782"
        stroke="#090E2B"
        strokeWidth="8.38002"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M578.968 586.592C578.968 586.592 559.896 654.867 468.774 725.698"
        stroke="#090E2B"
        strokeWidth="8.38002"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M377.548 446.648C377.548 446.648 389.451 527.714 469.677 586.592"
        stroke="#090E2B"
        strokeWidth="8.38002"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M140.452 900V490.223"
        stroke="#090E2B"
        strokeWidth="8.38002"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M468.323 894.134V217.039"
        stroke="#090E2B"
        strokeWidth="8.38002"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

export default Trees
