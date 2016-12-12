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

const Hamburger = ({ className, color, label, left, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton, className)} {...props}>
    <svg
      className={classNames('illustration', 'button', color)}
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

    <span className={classNames(classes.label, { left }, color)}>{label}</span>
  </div>
}

Hamburger.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  styles: PropTypes.object
}

export default compose(
  themeable(() => ({ color: 'gray' })),
  withDisplayName('Hamburger'),
  overridable(defaultStyles)
)(Hamburger)
