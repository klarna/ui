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

const isNumber = (x) => x === '0' || x === '1' || x === '2' || x === '3' || x === '4' || x === '5' || x === '6' || x === '7' || x === '8' || x === '9'

const all = (a, b) => a && b

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
      onChange={(e) => (
        e.target.value === '' ||
        e.target.value.split('').map(isNumber).reduce(all, true)
      ) && onChange(e)}
      value={value}
      label='Temporary label'
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
