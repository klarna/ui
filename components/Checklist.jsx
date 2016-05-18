import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/checklist.scss'

const classNames = classNamesBind.bind(styles)

export default function Checklist ({ chromeless, className, children }) {
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
  chromeless: PropTypes.bool
}

Checklist.Item = ({ className, children }) => (
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

Checklist.Item.displayName = 'Checklist.Item'

Checklist.Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
