import { Card, Text, theme } from '@heetch/flamingo-react'
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { SplitText } from '../utils/SplitText'
import MainIllustration from './MainIllustration'

const StyledMain = styled.div`
  position: relative;

  .catchLine {
    width: 100%;
    text-align: center;

    p {
      font-size: ${theme.fontSize.xxl};
      line-height: ${theme.fontSize.xxl};
      font-weight: ${theme.fontWeight.bold};
      color: ${theme.color.text.primary};
    }

    p:first-child {
      margin-top: ${theme.space.xxl};
    }

    p:nth-child(2) {
      margin-top: ${theme.space.m};
    }
  }

  .f-Card {
    margin-top: ${theme.space.xxl};

    p {
      &:not(:first-child) {
        margin-top: ${theme.space.m};
      }
    }
  }
`

const Main = () => {
  const onDrag = (event, info) => {
    if (info.velocity.x > 100) {
      console.log('right!')
    }

    if (info.velocity.x < -100) {
      console.log('left')
    }
  }

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDrag={onDrag}
    >
      <StyledMain>
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

            <Text>This is done mostly through Instant Messaging.</Text>

            <Text>
              Sadly, instant messaging is{' '}
              <motion.span
                style={{
                  display: 'inline-block',
                  fontWeight: theme.fontWeight.bold,
                }}
                initial={{ x: -1, y: -1 }}
                animate={{ x: 0, y: 0 }}
                transition={{ repeat: Infinity }}
              >
                fuzzy
              </motion.span>
              .
            </Text>
          </Card>
        </motion.div>
      </StyledMain>
    </motion.div>
  )
}

export default Main
