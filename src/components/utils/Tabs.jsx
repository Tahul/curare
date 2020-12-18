import { Icon, theme, UiText } from '@heetch/flamingo-react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import useActionsSounds from '../../hooks/useActionsSounds'

const StyledTabs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: ${theme.space.l} 0;
`

const Tabs = ({ tabs, currentValue, onChange }) => {
  const { playButton } = useActionsSounds()

  const handleChange = (value) => {
    onChange(value)

    if (currentValue !== value) playButton()
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <StyledTabs>
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            tab={tab}
            current={tab.value === currentValue}
            onClick={() => handleChange(tab.value)}
          />
        ))}
      </StyledTabs>
    </motion.div>
  )
}

const StyledTab = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: ${theme.space.l};
  color: ${theme.color.element.primary};
  background-color: ${theme.color.element.primary};
  border-radius: ${theme.borderRadius.xl};
  cursor: pointer;

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: ${theme.color.brand.primary};
    border-radius: ${theme.borderRadius.xl};
  }

  p {
    display: flex;
    align-items: center;
    z-index: 10;
    color: ${({ active }) =>
      active ? theme.color.element.primary : theme.color.brand.primary};
    transition: color 0.2s ease-in;
    user-select: none;

    i {
      margin-right: ${theme.space.m};
    }
  }
`

const tabVariants = {
  hidden: {
    scale: 0,
  },
  active: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
}

const Tab = ({ tab, current, onClick }) => {
  const [hover, setHover] = useState(false)
  const currentVariant =
    hover && !current ? 'hover' : current ? 'active' : 'hidden'

  return (
    <StyledTab
      active={current || hover}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <motion.div
        initial={{ scale: 0 }}
        custom={current}
        variants={tabVariants}
        animate={currentVariant}
        className="background"
      />

      <UiText>
        <Icon icon={tab.icon} />
        {tab.name}
      </UiText>
    </StyledTab>
  )
}

export default Tabs
