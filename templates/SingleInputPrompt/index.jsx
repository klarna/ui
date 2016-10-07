import React from 'react'
import Centered from '../chromes/Centered'
import Input from '../../Input'
import defaultStyles from './styles.scss'

export default function SingleInputPrompt ({
  accept,
  label,
  legal,
  onChange,
  summary,
  title,
  value,
  ...props
}) {
  return <Centered
    labels={{
      accept,
      legal,
      summary,
      title
    }}
    {...props}>
    <div className={defaultStyles['single-input-prompt__content']}>
      <Input
        centered
        label={label}
        onChange={onChange}
        value={value}
      />
    </div>
  </Centered>
}
