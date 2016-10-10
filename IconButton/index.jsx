import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'illustration'

const classes = {
  iconButton: 'icon-button',
  fill: `${baseClass}__fill`,
  label: `${baseClass}__label`,
  stroke: `${baseClass}__stroke`
}

const iconPropTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  styles: PropTypes.object
}

export const Back = ({ className, color, label, left, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton)} {...props}>
    <svg
      className={classNames(baseClass, 'button', color, className)}
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

export const Close = ({ className, color, label, left, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton)} {...props}>
    <svg
      className={classNames(baseClass, 'button', color, className)}
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

export const Hamburger = ({ className, color, label, left, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton)} {...props}>
    <svg
      className={classNames(baseClass, 'button', color, className)}
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

export const Options = ({ className, color, label, left, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton)} {...props}>
    <svg
      className={classNames(baseClass, 'button', color, className)}
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

export const Search = ({ className, color, label, left, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <div className={classNames(classes.iconButton)} {...props}>
    <svg
      className={classNames(baseClass, 'button', color, className)}
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

Back.propTypes = Close.propTypes = Hamburger.propTypes = Options.propTypes = Search.propTypes = iconPropTypes
