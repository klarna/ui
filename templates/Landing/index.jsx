import React from 'react'
import classNamesBind from 'classnames/bind'
import Centered from '../chromes/Centered'
import defaultStyles from './styles.scss'

const baseClass = 'landing'

// const classes = {
//   title: `${baseClass}__title`,
//   paragraphPrimary: `${baseClass}__paragraph--primary`,
//   buttonAccept: `${baseClass}__button--accept`,
//   legal: `${baseClass}__paragraph--legal`
// }

export default function Landing ({
  ...props
}) {
  return <Centered {...props} />
}
