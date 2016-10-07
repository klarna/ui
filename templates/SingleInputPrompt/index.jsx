import React from 'react'
import Centered from '../chromes/Centered'
import Input from '../../Input'

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
    <Input
      centered
      label={label}
      onChange={onChange}
      value={value}
    />
  </Centered>
}
