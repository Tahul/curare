import { Card, Text } from '@heetch/flamingo-react'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import useDraggablePage from '../../hooks/useDraggablePage'
import SecondaryIllustration from '../illustrations/SecondaryIllustration'
import { SplitText } from '../utils/SplitText'

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
              Bookmarks should be
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

        <motion.div
          initial={{ y: 75, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Card>
            <Text>
              <b>Recommendations</b> are a major social contact.
            </Text>

            <Text>
              What <b>we love</b> is who <b>we are</b>.
            </Text>

            <Text>
              <b>Curare</b> is the best place to <b>keep track</b> of both.
            </Text>
          </Card>
        </motion.div>
      </StyledSecondary>
    </motion.div>
  )
}

export default Secondary
