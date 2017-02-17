import React from 'react'
import Centered from '../chromes/Centered'
import Fieldset from '../../Fieldset'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export default function CenteredForm ({
  accept,
  brandVolume,
  cancel,
  id,
  illustration,
  onAccept,
  onCancel,
  styles,
  summary,
  title,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      centered: `${id}__centered`,
      content: `${id}__content`,
      fieldset: `${id}__fieldset`
    }
    : {}

  return <Centered
    brandVolume={brandVolume}
    onAccept={onAccept}
    onCancel={onCancel}
    id={ids.centered}
    illustration={illustration}
    labels={{
      accept,
      cancel,
      summary,
      title
    }}>
    <div
      id={ids.content}
      className={classNames('centered-form__content')}>
      <Fieldset
        id={ids.fieldset}
        {...props}
      />
    </div>
  </Centered>
}
