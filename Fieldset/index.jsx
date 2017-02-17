import React, { PropTypes} from 'react'
import Field from '../Field'
import Dropdown from '../Dropdown'
import Input from '../Input'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'

import compose from 'ramda/src/compose'
import {uncontrolled} from '@klarna/higher-order-components'

function Fieldset ({
  className,
  children,
  fields,
  fieldType,
  focus,
  id,
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
    id={id}
    {...props}>
    {fields && fields.map((field) => {
      const FieldType = getFieldType(fieldType, field)

      return <FieldType
        key={field.name}
        focus={focus === field.name}
        id={`${id}__${field.name}`}
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

const getFieldType = (fieldType, field) => {
  if (field.options) { return Dropdown }
  if (fieldType === 'field') { return Field }
  return Input
}

const handleChange = (values, onChange, name) => (e) =>
  onChange({...values, [name]: e.target.value})

const handleBlur = (onBlur, name) => () =>
  onBlur(name)

const handleFocus = (onFocus, name) => () =>
  onFocus(name)

Fieldset.defaultProps = {
  margins: false,
  fieldType: 'field'
}

Fieldset.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  fieldType: PropTypes.oneOf(['field', 'input']),
  focus: PropTypes.string,
  id: PropTypes.string,
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
    handlers: {
      onFocus: () => field => field,
      onBlur: () => () => undefined
    }
  }),
  uncontrolled({
    prop: 'values',
    defaultProp: 'defaultValues',
    handlers: {
      onChange: () => value => value
    }
  })
)(Fieldset)
