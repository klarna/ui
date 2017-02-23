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
  id,
  illustration,
  onSelect,
  options,
  styles,
  summary,
  title,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      centered: `${id}__centered`,
      selectorDirect: `${id}__selector-direct`
    }
    : {}

  return <Centered
    id={ids.centered}
    illustration={illustration}
    labels={{
      summary,
      title
    }}
    {...props}>
    <Selector.Direct
      id={ids.selectorDirect}
      className={classNames(classes.selector)}
      data={options}
      onSelect={onSelect}
    />
  </Centered>
}
