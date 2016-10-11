import React from 'react'
import Centered from '../chromes/Centered'
import * as Selector from '../../Selector'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'centered-selection'

const classes = {
  selector: `${baseClass}__selector`
}

export default function CenteredSelection ({
  illustration,
  onSelect,
  options,
  styles,
  summary,
  title,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <Centered
    illustration={illustration}
    labels={{
      summary,
      title
    }}
    {...props}>
    <Selector.Direct
      className={classNames(classes.selector)}
      data={options}
    />
  </Centered>
}
