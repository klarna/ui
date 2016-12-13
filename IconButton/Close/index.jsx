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
    <svg
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
}

Close.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  styles: PropTypes.object
}

export default compose(
  themeable(() => ({color: 'gray'})),
  withDisplayName('Close'),
  overridable(defaultStyles)
)(Close)
