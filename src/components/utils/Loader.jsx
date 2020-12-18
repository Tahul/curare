import { Spinner, theme } from '@heetch/flamingo-react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.space.xxl};
  text-align: center;

  span {
    margin-left: ${theme.space.s};
  }
`

const Loader = ({ lastPage, page, loading, onLoad, children }) => {
  const [ref, isInView] = useInView()

  const isEnded = lastPage && page >= lastPage + 1

  React.useEffect(() => {
    if (isEnded) return

    if (isInView && !loading) {
      onLoad()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isInView])

  return (
    <StyledLoader ref={ref} isEnded={isEnded}>
      <AnimatePresence>
        {isInView ? (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
          >
            {!isEnded && <Spinner size="l" />}

            {isEnded && children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </StyledLoader>
  )
}

export default Loader
