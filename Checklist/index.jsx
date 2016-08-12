import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export function Main ({ chromeless, className, children, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <ul
      className={classNames('checklist', { chromeless }, className)}>
      {children}
    </ul>
  )
}

Main.displayName = 'Checklist.Main'

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  chromeless: PropTypes.bool,
  styles: PropTypes.object
}

Main.defaultProps = {
  styles: {}
}

export function Item ({ className, children, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <li
      className={classNames('checklist__item', className)}>
      <svg
        className={classNames('checklist__checkmark')}
        viewBox='0 0 25 25'
        aria-labelledby='Checkmark'>
        <path d='M5 13.69l4.49 4.23L19.37 8'></path>
      </svg>
      {children}
    </li>
  )
}

Item.displayName = 'Checklist.Item'

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

Item.defaultProps = {
  styles: {}
}
