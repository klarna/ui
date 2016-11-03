import React from 'react'
import Centered from '../chromes/Centered'
import Fieldset from '../../Fieldset'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export default function CenteredForm ({
  accept,
  cancel,
  illustration,
  onAccept,
  onCancel,
  styles,
  summary,
  title,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

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
    <div className={classNames('centered-form__content')}>
      <Fieldset
        {...props}
      />
    </div>
  </Centered>
}
