import React, { PropTypes } from 'react'
import validateSize from 'lib/validateSize'

const strokes = {
  disabled: '#cbcbcd',
  error: '#e63200',
  focused: '#0074c8',
  warning: '#e0a644'
}

export default function Icon ({children, className, size = '20px', state}) {
  const commonProps = {
    stroke: strokes[state] || '#a9a9a9',
    strokeWidth: '5',
    fill: 'transparent'
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { ...commonProps })
  })

  return (
    <svg className={ className } width={ size } height={ size } viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      { childrenWithProps }
    </svg>
  )
}

Icon.states = Object.keys(strokes)

export const defaultProps = {
  size: '20px'
}

export const propTypes = {
  className: PropTypes.string,
  state: PropTypes.oneOf(Icon.states),
  size: validateSize
}
