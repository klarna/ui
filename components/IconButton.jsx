import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'

const iconPropTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse']),
  styles: PropTypes.object
}

export const BackButton = ({ className, color, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'button', color, className)}
      strokeLinecap='round'
      strokeWidth='2'
      viewBox='0 0 25 25'
      {...props}>
      <path
        className={classNames('cui__illustration__stroke')}
        d='M15,6l-6.5,6.5l6.5,6.5'
      />
    </svg>
  )
}

export const CloseButton = ({ className, color, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'button', color, className)}
      strokeLinecap='round'
      strokeWidth='2'
      viewBox='0 0 25 25'
      {...props}>
      <line x1='6' x2='19' y1='6' y2='19'
        className={classNames('cui__illustration__stroke')} />
      <line x1='19' x2='6' y1='6' y2='19'
        className={classNames('cui__illustration__stroke')} />
    </svg>
  )
}

export const HamburgerButton = ({ className, color, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'button', color, className)}
      viewBox='0 0 25 25'
      strokeLinecap='round'
      strokeWidth='2'
      {...props}>
      {[8, 13, 18].map((y) =>
        <line
          className={classNames('cui__illustration__stroke')}
          key={y} x1='6' x2='19' y1={y} y2={y}
        />
      )}
    </svg>
  )
}

export const OptionsButton = ({ className, color, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'button', color, className)}
      viewBox='0 0 25 25'
      {...props}>
      {[7, 13, 19].map((y) =>
        <circle
          className={classNames('cui__illustration__fill')}
          key={y} cx='12' cy={y} r='2'
        />
      )}
    </svg>
  )
}

export const SearchButton = ({ className, color, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'button', color, className)}
      viewBox='0 0 25 25'
      strokeWidth='2'
      strokeLinecap='round'
      {...props}>
      <circle
        className={classNames('cui__illustration__stroke')}
        cx={10.5} cy={10.5} r={5.5} />
      <line
        className={classNames('cui__illustration__stroke')}
        x1={15} x2={19.2} y1={15} y2={19.2} />
    </svg>
  )
}

BackButton.propTypes = CloseButton.propTypes = HamburgerButton.propTypes = OptionsButton.propTypes = SearchButton.propTypes = iconPropTypes
