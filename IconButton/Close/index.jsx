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

const Close = ({className, color, id, label, left, styles, ...props}) => {
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
        strokeLinecap='round'
        strokeWidth='2'
        viewBox='0 0 25 25'
        height='20px'
        width='20px'>
        <line x1='6' x2='19' y1='6' y2='19'
          className={classNames(classes.stroke)} />
        <line x1='19' x2='6' y1='6' y2='19'
          className={classNames(classes.stroke)} />
      </svg>

      <span
        className={classNames(classes.label, { left }, color)}
        id={ids.label}>
        {label}
      </span>
    </div>
  </div>
}

Close.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  withTheme(() => ({color: 'gray'})),
  overridable(defaultStyles),
  withDisplayName('Close')
)(Close)
