import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Warning ({ color, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color)}
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(19, 23)'>
        <path
          d='M58.9431,51.5 C58.8561,51.65 58.5971,52 58.0771,52 L3.0051,52 C2.4841,52 2.2251,51.65 2.1381,51.5 C2.0521,51.35 1.8791,50.951 2.1391,50.5 L29.6741,2.806 C29.9351,2.354 30.3671,2.306 30.5411,2.306 C30.7141,2.306 31.1461,2.354 31.4071,2.806 L58.9421,50.5 C59.2031,50.951 59.0291,51.35 58.9431,51.5 M60.6741,49.5 L33.1391,1.806 C32.5961,0.866 31.6251,0.306 30.5411,0.306 C29.4571,0.306 28.4851,0.866 27.9421,1.806 L0.4071,49.5 C-0.1349,50.438 -0.1359,51.56 0.4061,52.499 C0.9491,53.439 1.9201,54 3.0051,54 L58.0771,54 C59.1621,54 60.1321,53.439 60.6751,52.499 C61.2171,51.56 61.2161,50.438 60.6741,49.5'></path>
        <path
          d='M30.5408,14.5859 C29.9878,14.5859 29.5408,15.0329 29.5408,15.5859 L29.5408,39.5859 C29.5408,40.1389 29.9878,40.5859 30.5408,40.5859 C31.0938,40.5859 31.5408,40.1389 31.5408,39.5859 L31.5408,15.5859 C31.5408,15.0329 31.0938,14.5859 30.5408,14.5859'></path>
        <path
          d='M30.5408,43.5859 C29.9878,43.5859 29.5408,44.0329 29.5408,44.5859 L29.5408,45.5859 C29.5408,46.1389 29.9878,46.5859 30.5408,46.5859 C31.0938,46.5859 31.5408,46.1389 31.5408,45.5859 L31.5408,44.5859 C31.5408,44.0329 31.0938,43.5859 30.5408,43.5859'></path>
      </g>
    </svg>
  )
}

Warning.defaultProps = {
  color: 'blue',
  styles: {}
}

Warning.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
