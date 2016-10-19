import React from 'react'
import Centered from '../chromes/Centered'
import Input from '../../Input'
import compose from '../../lib/compose'
import uncontrolled from '../../decorators/uncontrolled'
import defaultStyles from './styles.scss'

function SingleInputPrompt ({
  accept,
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
  ...props
}) {
  return <Centered
    onAccept={onAccept}
    onCancel={onCancel}
    illustration={illustration}
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
        focus={focus}
        label={label}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
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
