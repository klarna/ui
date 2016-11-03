import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import overridable from '../../decorators/overridable'
import compose from '../../lib/compose'
import defaultStyles from '../styles.scss'

const classes = {
  iconButton: 'icon-button',
  fill: 'illustration__fill',
  label: 'illustration__label',
  stroke: 'illustration__stroke'
}

const Search = ({ className, color, label, left, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton, className)} {...props}>
    <svg
      className={classNames('illustration', 'button', color)}
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

    <span className={classNames(classes.label, { left }, color)}>{label}</span>
  </div>
}

Search.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  styles: PropTypes.object
}

export default compose(
  themeable(() => ({ color: 'gray' })),
  overridable(defaultStyles)
)(Search)
