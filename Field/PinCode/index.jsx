import React, {PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import uncontrolled from '../../decorators/uncontrolled'
import compose from '../../lib/compose'
import defaultStyles from './styles.scss'

const baseClass = 'field-code'

function PinCode ({
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

PinCode.defaultProps = {
  length: 6,
  styles: {},
  value: ''
}

PinCode.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func,
  styles: PropTypes.object,
  value: PropTypes.string
}

PinCode.displayName = 'Field.PinCode'

export default compose(
  uncontrolled({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlerName: 'onChange',
    handlerSelector: (e) => e.target.value
  })
)(PinCode)
