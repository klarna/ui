import React from 'react'
import Centered from '../chromes/Centered'
import * as Field from '../../Field'
import * as Paragraph from '../../Paragraph'
import Cross from '../../icons/Cross'
import Loader from '../../Loader'
import compose from '../../lib/compose'
import uncontrolled from '../../decorators/uncontrolled'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'code-prompt'

const classes = {
  error: `${baseClass}__error`,
  errorIcon: `${baseClass}__error__icon`,
  field: `${baseClass}__field`,
  loading: `${baseClass}__loading`,
  message: `${baseClass}__message`
}

function CodePrompt ({
  error,
  loading,
  message,
  onChange,
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
    <Field.PinCode
      className={classNames(classes.field)}
      onChange={onChange}
      value={value}
      label='Temporary label'
      error={!!error}
    />

    {error && <Paragraph.Primary
      className={classNames(classes.error)}
      color='error'>
      <Cross
        color='error'
        className={classNames(classes.errorIcon)}
      /> {error}
    </Paragraph.Primary>}

    {loading && <Paragraph.Secondary
      className={classNames(classes.loading)}>
      <Loader
        size='small'
        style={{
          display: 'inline-block',
          position: 'relative',
          top: '2px'
        }}
      /> {loading}
    </Paragraph.Secondary>}

    {message && <Paragraph.Secondary
      className={classNames(classes.message)}>
      {message}
    </Paragraph.Secondary>}
  </Centered>
}

export default compose(
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlerName: 'onChange',
    handlerSelector: (e) => e.target.value
  })
)(CodePrompt)
