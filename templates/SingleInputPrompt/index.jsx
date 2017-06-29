import React from 'react'
import Centered from '../chromes/Centered'
import Input from '../../Input'
import defaultStyles from './styles.scss'

import compose from 'ramda/src/compose'
import {withUncontrolledProp} from '@klarna/higher-order-components'

function SingleInputPrompt ({
  accept,
  brandVolume,
  cancel,
  focus,
  label,
  legal,
  id,
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
  style,
  ...props
}) {
  const ids = id
    ? {
      centered: `${id}__centered`,
      content: `${id}__content`,
      input: `${id}__input`
    }
    : {}
  return <Centered
    brandVolume={brandVolume}
    onAccept={onAccept}
    onCancel={onCancel}
    id={ids.centered}
    illustration={illustration}
    loading={loading}
    style={style}
    labels={{
      accept,
      cancel,
      legal,
      summary,
      title
    }}>
    <div
      id={ids.content}
      className={defaultStyles['single-input-prompt__content']}>
      <Input
        id={ids.input}
        centered
        big
        focus={focus}
        label={label}
        onBlur={onBlur}
        onChange={onChange}
        onEnter={onAccept}
        onFocus={onFocus}
        value={value}
        disabled={loading}
        {...props}
      />
    </div>
  </Centered>
}

export default compose(
  withUncontrolledProp({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => () => true,
      onBlur: () => () => false
    }
  }),
  withUncontrolledProp({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => e => e.target.value
    }
  })
)(SingleInputPrompt)
