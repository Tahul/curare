import { Card, Text } from '@heetch/flamingo-react'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import useDraggablePage from '../../hooks/useDraggablePage'
import MainIllustration from '../illustrations/MainIllustration'
import { SplitText } from '../utils/SplitText'

const StyledMain = styled.div`
  position: relative;
`

const Main = ({ onPrevious, onNext }) => {
  const controls = useAnimation()
  const { onDrag, onDragEnd } = useDraggablePage({
    onPrevious,
    onNext,
    controls,
  })

  return (
    <motion.div
      animate={controls}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    >
      <StyledMain className="landingPart">
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

        <MainIllustration />

        <motion.div
          initial={{ y: 75, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Card>
            <Text>
              Daily, we <b>share content</b> with people around us.
            </Text>

            <Text>
              This is done mostly through <b>I</b>nstant <b>M</b>essaging.
            </Text>

            <Text>
              Sadly, <b>IM</b> apps are{' '}
              <motion.span
                style={{
                  display: 'inline-block',
                }}
                initial={{ x: -1, y: -1 }}
                animate={{ x: 0, y: 0 }}
                transition={{ repeat: Infinity }}
              >
                fuzzy
              </motion.span>
              , but <b>Curare</b> is not.
            </Text>
          </Card>
        </motion.div>
      </StyledMain>
    </motion.div>
  )
}

export default Main
