import React from 'react'
import Centered from '../chromes/Centered'
import Field from '../../Field'
import * as Paragraph from '../../Paragraph'
import Cross from '../../icons/Cross'
import Loader from '../../Loader'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

import compose from 'ramda/src/compose'
import {withUncontrolledProp} from '@klarna/higher-order-components'

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
  id,
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
  const ids = id
    ? {
      centered: `${id}__centered`,
      field: `${id}__field`,
      errorWrapper: `${id}__error-wrapper`,
      errorParagraph: `${id}__error-paragraph`,
      errorIcon: `${id}__error__icon`,
      loadingWrapper: `${id}__loading-wrapper`,
      loadingIcon: `${id}__loading-icon`,
      loadingParagraph: `${id}__loading-paragraph`,
      message: `${id}__message`
    }
    : {}

  return <Centered
    id={ids.centered}
    labels={{summary, title}}
    {...props}>
    <Field
      className={classNames(classes.field)}
      disabled={!!loading}
      error={error}
      focus={focus}
      id={ids.field}
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

    {errorMessage && <div
      id={ids.errorWrapper}
      className={classNames(classes.error)}>
      <Paragraph.Primary
        id={ids.errorParagraph}
        className={classNames(classes.errorParagraph)}
        color='error'>
        <Cross
          id={ids.errorIcon}
          className={classNames(classes.errorIcon)}
          color='error'
        />
        {errorMessage}
      </Paragraph.Primary>
    </div>}

    {loading && <div
      id={ids.loadingWrapper}
      className={classNames(classes.loading)}>
      <Loader
        id={ids.loadingIcon}
        className={classNames(classes.loadingLoader)}
        size='small'
      />
      {loadingText !== '' && <Paragraph.Secondary
        id={ids.loadingParagraph}
        className={classNames(classes.loadingParagraph)}>
        {loadingText}
      </Paragraph.Secondary>}
    </div>}

    {message && <Paragraph.Secondary
      id={ids.message}
      className={classNames(classes.message)}>
      {message}
    </Paragraph.Secondary>}
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
)(CodePrompt)
