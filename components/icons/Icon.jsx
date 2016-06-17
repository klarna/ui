import React, { PropTypes } from 'react'

export default function Icon (props) {
  const { children, size, title, ...remainingProps } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      version='1.1'
      aria-labelledby={title}
      {...remainingProps}>
      <title>{title}</title>
      {children}
    </svg>
  )
}

export const colors = {
  gray: '#cbcbcd',   // disabled
  red: '#e63200',    // error
  green: '#7ED321',  // success
  blue: '#0074c8',   // focused
  orange: '#e0a644', // warning
}

Icon.defaultProps = {
  size: '100px',
  title: 'Icon'
}

Icon.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
}

export const icon = (component) => {
  const exportedIcon = ({ color = 'black', ...props }) => {
    const hexColor = colors[color]
    return component(hexColor, props)
  }

  exportedIcon.defaultProps = {
    title: component.name,
    ...component.defaultProps
  }

  exportedIcon.propTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
    title: PropTypes.string,
    ...component.propTypes
  }

  exportedIcon.displayName = component.name
  return exportedIcon
}
