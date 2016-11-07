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
  errorParagraph: `${baseClass}__error__paragraph`,
  loading: `${baseClass}__loading`,
  loadingLoader: `${baseClass}__loading__loader`,
  loadingParagraph: `${baseClass}__loading__paragraph`,
  field: `${baseClass}__field`,
  message: `${baseClass}__message`
}

const any = (a, b) => a || b
const all = (a, b) => a && b

const isDigit = (x) => [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
].reduce(any, false)

function CodePrompt ({
  autoFocus,
  error,
  label,
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
      autoFocus={autoFocus}
      className={classNames(classes.field)}
      onChange={(e) => (
        e.target.value === '' ||
        e.target.value.split('').map(isDigit).reduce(all, true)
      ) && onChange(e)}
      value={value}
      placeholder={label}
    />

    {error && <div className={classNames(classes.error)}>
      <Cross
        className={classNames(classes.errorIcon)}
        color='error'
      />
      <Paragraph.Primary
        className={classNames(classes.errorParagraph)}
        color='error'>
        {error}
      </Paragraph.Primary>
    </div>}

    {loading && <div className={classNames(classes.loading)}>
      <Loader
        className={classNames(classes.loadingLoader)}
        size='small'
      />
      <Paragraph.Secondary
        className={classNames(classes.loadingParagraph)}>
        {loading}
      </Paragraph.Secondary>
    </div>}

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
