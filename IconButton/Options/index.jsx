import React, { PropTypes } from 'react'
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

const Options = ({
  className,
  color,
  id,
  label,
  left,
  styles,
  topLeft,
  topRight,
  ...props
}) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const ids = id
    ? {
      illustration: `${id}__illustration`,
      label: `${id}__label`
    } : {}

  return <div
    className={classNames(
      classes.iconButton,
      {
        'top-right': topRight,
        'top-left': topLeft
      },
      className
    )}
    id={id}
    {...props}>
    <div className={classNames(classes.bgWrapper, color)}>
      <svg
        className={classNames('illustration', 'button', color)}
        id={ids.illustration}
        viewBox='0 0 25 25'
        height='20px'
        width='20px'>
        {[7, 13, 19].map((y) =>
          <circle
            className={classNames(classes.fill)}
            key={y} cx='12' cy={y} r='2'
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

Options.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  themeable(() => ({color: 'gray'})),
  overridable(defaultStyles),
  withDisplayName('Options')
)(Options)
