import React from 'react'
import Centered from '../chromes/Centered'
import Input from '../../Input'
import compose from '../../lib/compose'
import uncontrolled from '../../decorators/uncontrolled'
import defaultStyles from './styles.scss'

function SingleInputPrompt ({
  accept,
  focus,
  label,
  legal,
  onBlur,
  onChange,
  onFocus,
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
        focus={focus}
        label={label}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
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