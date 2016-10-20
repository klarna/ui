import React from 'react'
import Centered from '../chromes/Centered'
import Fieldset from '../../Fieldset'

export default function CenteredForm ({
  accept,
  cancel,
  illustration,
  onAccept,
  onCancel,
  summary,
  title,
  ...props
}) {
  return <Centered
    onAccept={onAccept}
    onCancel={onCancel}
    illustration={illustration}
    labels={{
      accept,
      cancel,
      summary,
      title
    }}>
    <Fieldset
      {...props}
    />
  </Centered>
}
