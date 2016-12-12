import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import overridable from '../../decorators/overridable'
import compose from '../../lib/compose'
import defaultStyles from '../styles.scss'
import withDisplayName from '../withDisplayName'

const classes = {
  iconButton: 'icon-button',
  fill: 'illustration__fill',
  label: 'illustration__label',
  stroke: 'illustration__stroke'
}

const Back = function ({ className, color, label, left, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton, className)} {...props}>
    <svg
      className={classNames('illustration', 'button', color)}
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

    <span className={classNames(classes.label, { left }, color)}>{label}</span>
  </div>
}

Back.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  styles: PropTypes.object
}

export default compose(
  themeable(function () { return { color: 'gray' } }),
  withDisplayName('Back'),
  overridable(defaultStyles)
)(Back)
