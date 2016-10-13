import React, { PropTypes } from 'react'
import Fieldset from '../Fieldset'
import Field from '../Field'
import Input from '../Input'
import compose from '../lib/compose'
import uncontrolled from '../decorators/uncontrolled'

function Form ({
  fields,
  fieldType,
  focus,
  onBlur,
  onChange,
  onFocus,
  values,
  ...props
}) {
  const FieldType = fieldType === 'field'
    ? Field
    : Input

  return <Fieldset>
    {fields && fields.map((field) => <FieldType
      key={field.name}
      focus={focus === field.name}
      value={values && values[field.name]}
      onBlur={handleBlur(onBlur, field.name)}
      onChange={handleChange(values, onChange, field.name)}
      onFocus={handleFocus(onFocus, field.name)}
      {...field}
    />)}
  </Fieldset>
}

Form.defaultProps = {
  fieldType: 'field'
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  fieldType: PropTypes.oneOf(['field', 'input']),
  focus: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.string)
}

const handleChange = (values, onChange, name) => (e) =>
  onChange({...values, [name]: e.target.value})

const handleBlur = (onBlur, name) => () =>
  onBlur(name)

const handleFocus = (onFocus, name) => () =>
  onFocus(name)

export default compose(
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlerName: 'onFocus',
    handlerSelector: (x) => x,
    resetHandlerName: 'onBlur'
  }),
  uncontrolled({
    prop: 'values',
    defaultProp: 'defaultValues',
    handlerName: 'onChange',
    handlerSelector: (x) => x
  })
)(Form)
