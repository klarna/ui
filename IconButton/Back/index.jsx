import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from '../styles.scss'
import withDisplayName from '../withDisplayName'

import compose from 'ramda/src/compose'
import {withOverrideFromContext, withTheme} from '@klarna/higher-order-components'

const classes = {
  bgWrapper: 'bg-wrapper',
  iconButton: 'icon-button',
  fill: 'illustration__fill',
  label: 'illustration__label',
  stroke: 'illustration__stroke'
}

const Back = ({className, color, id, label, left, styles, ...props}) => {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      illustration: `${id}__illustration`,
      label: `${id}__label`
    } : {}

  return <div
    className={classNames(classes.iconButton, className)}
    id={id}
    {...props}>
    <div className={classNames(classes.bgWrapper, color)}>
      <svg
        focusable='false'
        className={classNames('illustration', 'button', color)}
        id={ids.illustration}
        strokeLinecap='round'
        strokeWidth='2'
        viewBox='0 0 25 25'
        height='20px'
        width='20px'>
        <path
          className={classNames(classes.stroke)}
          d='M15,6l-6.5,6.5l6.5,6.5'
        />
      </svg>
      <span
        className={classNames(classes.label, { left }, color)}
        id={ids.label}>
        {label}
      </span>
    </div>
  </div>
}

Back.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  withTheme(() => ({color: 'gray'})),
  withDisplayName('Back'),
  withOverrideFromContext
)(Back)
