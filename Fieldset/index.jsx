import React, { PropTypes} from 'react'
import Field from '../Field'
import Dropdown from '../Dropdown'
import Input from '../Input'
import compose from '../lib/compose'
import uncontrolled from '../decorators/uncontrolled'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

function Fieldset ({
  className,
  children,
  fields,
  fieldType,
  focus,
  margins,
  onBlur,
  onChange,
  onFocus,
  styles,
  values,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  return <div
    className={classNames('fieldset', { 'default-margins': margins }, className)}
    {...props}>
    {fields && fields.map(function (field) {
      const FieldType = getFieldType(fieldType, field)

      return <FieldType
        key={field.name}
        focus={focus === field.name}
        value={values && values[field.name]}
        onBlur={handleBlur(onBlur, field.name)}
        onChange={handleChange(values, onChange, field.name)}
        onFocus={handleFocus(onFocus, field.name)}
        {...field}
      />
    })}
    {children}
  </div>
}

const getFieldType = function (fieldType, field) {
  if (field.options) { return Dropdown }
  if (fieldType === 'field') { return Field }
  return Input
}

const handleChange = function (values, onChange, name) {
  return function (e) {
    onChange({...values, [name]: e.target.value})
  }
}

const handleBlur = function (onBlur, name) {
  return function () {
    onBlur(name)
  }
}

const handleFocus = function (onFocus, name) {
  return function () {
    onFocus(name)
  }
}

Fieldset.defaultProps = {
  margins: false,
  fieldType: 'field'
}

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  fieldType: PropTypes.oneOf(['field', 'input']),
  focus: PropTypes.string,
  margins: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  styles: PropTypes.object,
  values: PropTypes.objectOf(PropTypes.string)
}

export default compose(
  uncontrolled({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlerName: 'onFocus',
    handlerSelector: function (x) { return x },
    resetHandlerName: 'onBlur'
  }),
  uncontrolled({
    prop: 'values',
    defaultProp: 'defaultValues',
    handlerName: 'onChange',
    handlerSelector: function (x) { return x }
  })
)(Fieldset)
