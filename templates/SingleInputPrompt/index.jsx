import React from 'react'
import Centered from '../chromes/Centered'
import Input from '../../Input'
import compose from '../../lib/compose'
import uncontrolled from '../../decorators/uncontrolled'
import defaultStyles from './styles.scss'

function SingleInputPrompt ({
  accept,
  brandVolume,
  cancel,
  focus,
  label,
  legal,
  illustration,
  onAccept,
  onBlur,
  onCancel,
  onChange,
  onFocus,
  summary,
  title,
  value,
  loading,
  ...props
}) {
  return <Centered
    brandVolume={brandVolume}
    onAccept={onAccept}
    onCancel={onCancel}
    illustration={illustration}
    loading={loading}
    labels={{
      accept,
      cancel,
      legal,
      summary,
      title
    }}>
    <div className={defaultStyles['single-input-prompt__content']}>
      <Input
        centered
        big
        focus={focus}
        label={label}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        disabled={loading}
        {...props}
      />
    </div>
  </Centered>
}

export default compose(
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlerName: 'onFocus',
    handlerSelector: () => true,
    resetHandlerName: 'onBlur'
  }),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlerName: 'onChange',
    handlerSelector: (e) => e.target.value
  })
)(SingleInputPrompt)
