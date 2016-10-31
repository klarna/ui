import React from 'react'
import Centered from '../chromes/Centered'
import Field from '../../Field'
import * as Paragraph from '../../Paragraph'
import Cancel from '../../icons/Cancel'
import Loader from '../../Loader'
import compose from '../../lib/compose'
import uncontrolled from '../../decorators/uncontrolled'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'code-prompt'

const classes = {
  error: `${baseClass}__error`,
  field: `${baseClass}__field`,
  loading: `${baseClass}__loading`,
  message: `${baseClass}__message`
}

function CodePrompt ({
  error,
  focus,
  loading,
  message,
  onBlur,
  onChange,
  onFocus,
  summary,
  styles,
  title,
  value,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <Centered
    labels={{summary, title}}
    {...props}>
    <Field
      className={classNames(classes.field)}
      focus={focus}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
      label='Temporary label'
      error={!!error}
    />
    {error && <Paragraph.Primary
      className={classNames(classes.error)}
      color='error'>
      <Cancel color='error' style={{position: 'relative', top: '5px'}} /> {error}
    </Paragraph.Primary>}

    {loading && <Paragraph.Primary
      className={classNames(classes.loading)}>
      <Loader
        size='small'
        style={{
          display: 'inline-block',
          position: 'relative',
          top: '2px'
        }}
      /> {loading}
    </Paragraph.Primary>}

    {message && <Paragraph.Primary
      className={classNames(classes.message)}>
      {message}
    </Paragraph.Primary>}
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
)(CodePrompt)
