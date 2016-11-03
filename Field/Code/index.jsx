import React, {Component, PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import uncontrolled from 'decorators/uncontrolled'
import compose from 'lib/compose'
import defaultStyles from './styles.scss'

const baseClass = 'segmented-field'

function SegmentedField ({
  className,
  length,
  onChange,
  styles,
  value,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <input
    className={classNames(baseClass, className)}
    onChange={onChange}
    maxLength={length}
    type='tel'
    value={value}
    {...props}
  />
}

SegmentedField.defaultProps = {
  length: 6,
  styles: {},
  value: ''
}

SegmentedField.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func,
  styles: PropTypes.object,
  value: PropTypes.string
}

export default compose(
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlerName: 'onChange',
    handlerSelector: (e) => e.target.value
  })
)(SegmentedField)
