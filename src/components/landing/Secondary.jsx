import { Text } from '@heetch/flamingo-react'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import useDraggablePage from '../../hooks/useDraggablePage'
import { SplitText } from '../utils/SplitText'
import SecondaryIllustration from './illustrations/SecondaryIllustration'

const StyledSecondary = styled.div``

const Secondary = ({ onPrevious, onNext }) => {
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
      <StyledSecondary className="landingPart">
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
              Bookmarks are not
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
              a social experience
            </SplitText>
          </Text>
        </div>

        <SecondaryIllustration />
      </StyledSecondary>
    </motion.div>
  )
}

export default Secondary
