import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import defaultStyles from '../styles.scss'

const classes = {
  iconButton: 'icon-button',
  fill: 'illustration__fill',
  label: 'illustration__label',
  stroke: 'illustration__stroke'
}

const Options = ({ className, color, label, left, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton, className)} {...props}>
    <svg
      className={classNames('illustration', 'button', color)}
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

    <span className={classNames(classes.label, { left }, color)}>{label}</span>
  </div>
}

Options.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  styles: PropTypes.object
}

export default themeable(Options, (customizations, props) => ({
  color: 'gray'
}))
