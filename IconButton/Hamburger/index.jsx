import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from '../styles.scss'
import withDisplayName from '../withDisplayName'

import compose from 'ramda/src/compose'
import {overridable, withTheme} from '@klarna/higher-order-components'

const classes = {
  bgWrapper: 'bg-wrapper',
  iconButton: 'icon-button',
  fill: 'illustration__fill',
  label: 'illustration__label',
  stroke: 'illustration__stroke'
}

const Hamburger = ({className, color, id, label, left, styles, ...props}) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
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
        viewBox='0 0 25 25'
        strokeLinecap='round'
        strokeWidth='2'
        height='20px'
        width='20px'>
        {[8, 13, 18].map((y) =>
          <line
            className={classNames(classes.stroke)}
            key={y} x1='6' x2='19' y1={y} y2={y}
          />
        )}
      </svg>

      <span
        className={classNames(classes.label, { left }, color)}
        id={ids.label}>
        {label}
      </span>
    </div>
  </div>
}

Hamburger.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  withTheme(() => ({color: 'gray'})),
  overridable(defaultStyles),
  withDisplayName('Hamburger')
)(Hamburger)
