import React from 'react'
import * as Switch from '../../../Switch'

export default function Toolbar ({checkmarks, onChange, values}) {
  return <div>
    {checkmarks.map((checkmark) => <Switch.Toggle
      onChange={() => onChange({
        ...values,
        [checkmark.name]: !values[checkmark.name]
      })}
      value={values[checkmark.name]}>
      {checkmark.label}
    </Switch.Toggle>)}
  </div>
}
