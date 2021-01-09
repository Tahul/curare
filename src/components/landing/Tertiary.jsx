import { Text } from '@heetch/flamingo-react'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import useDraggablePage from '../../hooks/useDraggablePage'
import { SplitText } from '../utils/SplitText'
import TertiaryIllustration from './illustrations/TertiaryIllustration'

const StyledTertiary = styled.div``

const Tertiary = ({ onPrevious, onNext }) => {
  const controls = useAnimation()
  const { onDrag, onDragEnd } = useDraggablePage({ onPrevious, onNext })

  return (
    <motion.div
      animate={controls}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    >
      <StyledTertiary className="landingPart">
        <div className="catchLine">
          <Text>
            <SplitText
              initial={{ y: '100%' }}
              animate="visible"
              variants={{
                visible: (i) => ({
                  y: 0,
                  transition: {
                    delay: i * 0.05,
                  },
                }),
              }}
            >
              We are all
            </SplitText>
          </Text>

          <Text>
            <SplitText
              initial={{ y: '100%' }}
              animate="visible"
              variants={{
                visible: (i) => ({
                  y: 0,
                  transition: {
                    delay: 0.15 + i * 0.05,
                  },
                }),
              }}
            >
              Content Curators
            </SplitText>
          </Text>
        </div>

        <TertiaryIllustration />
      </StyledTertiary>
    </motion.div>
  )
}

export default Tertiary