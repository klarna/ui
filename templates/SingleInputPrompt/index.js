import React, {PropTypes} from 'react'
import Centered from '../chromes/Centered'
import Input from '../../Input'
import defaultStyles from './styles.scss'

import compose from 'ramda/src/compose'
import {uncontrolled} from '@klarna/higher-order-components'

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
        onFocus={onFocus}
        value={value}
        disabled={loading}
        {...props}
      />
    </div>
  </Centered>
}

SingleInputPrompt.propTypes = {
  accept: PropTypes.string,
  brandVolume: PropTypes.oneOf(['low', 'high']),
  cancel: PropTypes.string,
  focus: PropTypes.bool,
  label: PropTypes.string,
  legal: PropTypes.string,
  loading: PropTypes.bool,
  id: PropTypes.string,
  illustration: PropTypes.node,
  onAccept: PropTypes.func,
  onBlur: PropTypes.func,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  summary: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string
}

export default compose(
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => () => true,
      onBlur: () => () => false
    }
  }),
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => e => e.target.value
    }
  })
)(SingleInputPrompt)