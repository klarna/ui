import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from '../styles.scss'
import withDisplayName from '../withDisplayName'

import compose from 'ramda/src/compose'
import {overridable, themeable} from '@klarna/higher-order-components'

const classes = {
  bgWrapper: 'bg-wrapper',
  iconButton: 'icon-button',
  fill: 'illustration__fill',
  label: 'illustration__label',
  stroke: 'illustration__stroke'
}

const Search = ({className, color, id, label, left, styles, ...props}) => {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      illustration: `${id}__illustration`,
      label: `${id}__label`
    } : {}

  return <div className={classNames(classes.iconButton, className)} {...props}>
    <div className={classNames(classes.bgWrapper, color)}>
      <svg
        focusable='false'
        className={classNames('illustration', 'button', color)}
        id={ids.illustration}
        viewBox='0 0 25 25'
        strokeWidth='2'
        strokeLinecap='round'
        height='20px'
        width='20px'>
        <circle
          className={classNames(classes.stroke)}
          cx={10.5} cy={10.5} r={5.5} />
        <line
          className={classNames(classes.stroke)}
          x1={15} x2={19.2} y1={15} y2={19.2} />
      </svg>

      <span
        className={classNames(classes.label, { left }, color)}
        id={ids.label}>
        {label}
      </span>
    </div>
  </div>
}

Search.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  themeable(() => ({color: 'gray'})),
  overridable(defaultStyles),
  withDisplayName('Search')
)(Search)
