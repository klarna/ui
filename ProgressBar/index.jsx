import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import { Motion, spring } from 'react-motion'

const colors = ['blue', 'light-blue', 'gray']

const ProgressBar = ({
  borderColor,
  fillColor,
  id,
  percentage,
  className,
  styles,
  ...props
}) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const ids = id
    ? {
      progress: `${id}__progress`
    } : {}

  return (
    <div
      className={classNames('progressbar', borderColor, className)}
      id={id}
      {...props}>
      <Motion style={{ percentage: spring(percentage) }}>
        {({ percentage }) =>
        <div
          className={classNames('progressbar-fill', fillColor)}
          id={ids.progress}
          style={{width: `${percentage}%`}}
        />
      }
      </Motion>
    </div>
  )
}

ProgressBar.defaultProps = {
  borderColor: 'gray',
  fillColor: 'light-blue',
  styles: {}
}

ProgressBar.propTypes = {
  borderColor: PropTypes.oneOf(colors),
  fillColor: PropTypes.oneOf(colors),
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object,
  percentage: PropTypes.number.isRequired
}

export default ProgressBar
