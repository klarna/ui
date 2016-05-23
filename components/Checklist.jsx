import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/checklist.scss'

export default function Checklist ({ chromeless, className, children, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <ul
      className={classNames('cui__checklist', { chromeless }, className)}>
      {children}
    </ul>
  )
}

Checklist.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  chromeless: PropTypes.bool,
  styles: PropTypes.object
}

Checklist.defaultProps = {
  styles: {}
}

Checklist.Item = ({ className, children, styles }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <li
      className={classNames('cui__checklist__item', className)}>
      <svg
        className={classNames('cui__checklist__checkmark')}
        viewBox='0 0 25 25'
        ariaLabelledby='Checkmark'>
        <path d='M5 13.69l4.49 4.23L19.37 8'></path>
      </svg>
      {children}
    </li>
  )
}

Checklist.Item.displayName = 'Checklist.Item'

Checklist.Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

Checklist.Item.defaultProps = {
  styles: {}
}
