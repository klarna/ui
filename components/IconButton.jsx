import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/illustration.scss'

const classNames = classNamesBind.bind(styles)

const iconPropTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse'])
}

export const BackButton = ({ className, color, ...props }) => (
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

export const CloseButton = ({ className, color, ...props }) => (
  <svg
    className={classNames('cui__illustration', 'button', color, className)}
    strokeLinecap='round'
    strokeWidth='2'
    viewBox='0 0 25 25'
    {...props}>
    {[45, -45].map((deg) =>
      <line
        className={classNames('cui__illustration__stroke')}
        style={{transformOrigin: '50% 50%', transform: `rotate(${deg}deg)`}}
        key={deg} x1='3.3' x2='21.7' y1='12.5' y2='12.5'
      />
    )}
  </svg>
)

export const HamburgerButton = ({ className, color, ...props }) => (
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

export const OptionsButton = ({ className, color, ...props }) => (
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

export const SearchButton = ({ className, color, ...props }) => (
  <svg
    className={classNames('cui__illustration', 'button', color, className)}
    viewBox='0 0 25 25'
    {...props}>
    <defs>
      <polygon
        id="path-1"
        points="16.28 16.28 16.28 0.0003 0 0.0003 0 8.14015 0 16.28">
      </polygon>
    </defs>
    <g transform="translate(4.000000, 4.000000)">
      <mask id="mask-2" fill="white">
        <use xlinkHref="#path-1"></use>
      </mask>
      <path
        className={classNames('cui__illustration__fill')}
        d="M6.5,11 C4.019,11 2,8.981 2,6.5 C2,4.019 4.019,2 6.5,2 C8.981,2 11,4.019 11,6.5 C11,8.981 8.981,11 6.5,11 M15.987,14.573 L11.744,10.33 C12.53,9.255 13,7.934 13,6.5 C13,2.91 10.09,0 6.5,0 C2.91,0 0,2.91 0,6.5 C0,10.09 2.91,13 6.5,13 C7.934,13 9.255,12.53 10.33,11.744 L14.573,15.987 C14.769,16.183 15.024,16.28 15.28,16.28 C15.536,16.28 15.792,16.183 15.987,15.987 C16.378,15.597 16.378,14.964 15.987,14.573"
        mask="url(#mask-2)"></path>
    </g>
  </svg>
)
