import React from 'react'
import Centered from '../chromes/Centered'
import Field from '../../Field'
import * as Paragraph from '../../Paragraph'
import Cross from '../../icons/Cross'
import Loader from '../../Loader'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

import compose from 'ramda/src/compose'
import {uncontrolled} from '@klarna/higher-order-components'

const baseClass = 'code-prompt'

const classes = {
  error: `${baseClass}__error`,
  errorIcon: `${baseClass}__error__icon`,
  errorParagraph: `${baseClass}__error__paragraph`,
  loading: `${baseClass}__loading`,
  loadingLoader: `${baseClass}__loading__loader`,
  loadingParagraph: `${baseClass}__loading__paragraph`,
  field: `${baseClass}__field`,
  message: `${baseClass}__message`
}

const all = (a, b) => a && b

const isDigit = (x) => [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
].indexOf(x) >= 0

function CodePrompt ({
  error,
  errorMessage,
  focus,
  label,
  loading,
  message,
  onBlur,
  onChange,
  onFocus,
  summary,
  styles,
  title,
  value,
  length,
  pattern,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const loadingText = loading
  loading = loading || loadingText === ''
  error = errorMessage && error == null ? true : error

  return <Centered
    labels={{summary, title}}
    {...props}>
    <Field
      className={classNames(classes.field)}
      disabled={!!loading}
      error={error}
      focus={focus}
      label={label}
      maxLength={length}
      onBlur={onBlur}
      onChange={(e) => (
        e.target.value === '' ||
        e.target.value.split('').map(isDigit).reduce(all, true)
      ) && onChange(e)}
      onFocus={onFocus}
      pattern={pattern}
      pinCode
      value={value}
    />

    {errorMessage && <div className={classNames(classes.error)}>
      <Paragraph.Primary
        className={classNames(classes.errorParagraph)}
        color='error'>
        <Cross
          className={classNames(classes.errorIcon)}
          color='error'
        />
        {errorMessage}
      </Paragraph.Primary>
    </div>}

    {loading && <div className={classNames(classes.loading)}>
      <Loader
        className={classNames(classes.loadingLoader)}
        size='small'
      />
      {loadingText !== '' && (
        <Paragraph.Secondary
          className={classNames(classes.loadingParagraph)}>
          {loadingText}
        </Paragraph.Secondary>
      )}
    </div>}

    {message && <Paragraph.Secondary
      className={classNames(classes.message)}>
      {message}
    </Paragraph.Secondary>}
  </Centered>
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
)(CodePrompt)
