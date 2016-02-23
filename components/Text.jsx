import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from 'ui-css-components/src/components/text.scss'

const classNames = classNamesBind.bind(styles)

export function PrimaryTitle(props) {
  const {
    className,
    blue,
    small,
    strong,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__title--primary', {
    blue,
    small,
    strong
  }, className)

  return (
    <h1 className={cls} {...remainingProps}>
      {children}
    </h1>
  )
}

PrimaryTitle.defaultProps = {
  blue: false,
  small: false,
  strong: false
}

PrimaryTitle.propTypes = {
  blue: PropTypes.bool,
  small: PropTypes.bool,
  strong: PropTypes.bool
}


export function SecondaryTitle(props) {
  const {
    className,
    blue,
    condensed,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__title--secondary', {
    blue,
    condensed
  }, className)

  return (
    <h2 className={cls} {...remainingProps}>
      {children}
    </h2>
  )
}

SecondaryTitle.defaultProps = {
  blue: false,
  condensed: false,
}

SecondaryTitle.propTypes = {
  blue: PropTypes.bool,
  condensed: PropTypes.bool
}


export function Subtitle(props) {
  const {
    className,
    blue,
    condensed,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__subtitle', {
    blue,
    condensed
  }, className)

  return (
    <h3 className={cls} {...remainingProps}>
      {children}
    </h3>
  )
}

Subtitle.defaultProps = {
  blue: false,
  condensed: false,
}

Subtitle.propTypes = {
  blue: PropTypes.bool,
  condensed: PropTypes.bool
}


export function Paragraph(props) {
  const {
    className,
    design,
    condensed,
    children,
    ...remainingProps } = props

  const cls = classNames(`cui__paragraph--${design}`, {
    condensed
  }, className)

  return (
    <p className={cls} {...remainingProps}>
      {children}
    </p>
  )
}

Paragraph.designs = ['primary', 'secondary', 'legal']

Paragraph.defaultProps = {
  condensed: false,
  design: 'primary'
}

Paragraph.propTypes = {
  condensed: PropTypes.bool,
  design: PropTypes.oneOf(Paragraph.designs)
}


export function Label(props) {
  const {
    className,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__label', className)

  return (
    <span className={cls}>{ children }</span>
  )
}

export function TextLabel(props) {
  const {
    className,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__text-label', className)

  return (
    <h4 className={cls}>{ children }</h4>
  )
}
