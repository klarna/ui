import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import overridable from '../../decorators/overridable'
import compose from 'ramda/src/compose'
import defaultStyles from '../styles.scss'

const classes = {
  iconButton: 'icon-button',
  fill: 'illustration__fill',
  label: 'illustration__label',
  stroke: 'illustration__stroke'
}

const Close = ({ className, color, label, left, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton, className)} {...props}>
    <svg
      className={classNames('illustration', 'button', color)}
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

    <span className={classNames(classes.label, { left }, color)}>{label}</span>
  </div>
}

Close.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  styles: PropTypes.object
}

export default compose(
  themeable(() => ({ color: 'gray' })),
  overridable(defaultStyles)
)(Close)
