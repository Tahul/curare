/**
 * As IconButton from `@heetch/flamingo-react` does not allow to use
 * a children slot for inserting our own custom Icon, this component is
 * a copy of IconButton that aims to allow this in order to create custom IconButtons.
 */
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styled from 'styled-components'

import { theme, Icon, Button } from '@heetch/flamingo-react'

const sizes = Object.values(Icon.SIZES)

const IconButtonComponent = React.forwardRef(
  ({ className, size, iconColor, disabled, children, ...props }, ref) => (
    <Button
      className={cx('f-Button--icon', className)}
      intent={Button.INTENTS.SECONDARY}
      variant={Button.VARIANTS.MINIMAL}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  ),
)

IconButtonComponent.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
}

const IconButton = styled(IconButtonComponent)`
  padding: ${theme.space.m};
  line-height: 1;
  border-radius: 50%;
  color: ${theme.color.icon.dark};
  &:hover {
    background-color: ${theme.color.element.inactive};
    color: ${theme.color.icon.dark};
  }
  & + & {
    margin-left: ${theme.space.m};
  }
  ${Icon} {
    display: block;
  }
  ${theme.breakPoint.s} {
    width: auto;
    flex-grow: inherit;
    padding: ${theme.space.l};
  }
`

IconButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  iconColor: PropTypes.string,
}

IconButton.defaultProps = {
  size: Icon.SIZES.L,
}

export default IconButton
