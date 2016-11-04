import React, {PropTypes, PureComponent} from 'react'
import classNamesBind from 'classnames/bind'
import uncontrolled from '../../decorators/uncontrolled'
import compose from '../../lib/compose'
import defaultStyles from './styles.scss'

const baseClass = 'field-code'

class PinCode extends PureComponent {
  constructor () {
    super()

    this.state = {
      hover: false,
      focus: false
    }
  }

  render () {
    const {
      className,
      customize,
      length,
      onChange,
      style,
      styles,
      value,
      ...props
    } = this.props
    const {focus, hover} = this.state
    const classNames = classNamesBind.bind({...defaultStyles, ...styles})
    const inputStyle = customize ? {
      color: customize.inputColor,
      borderColor: (hover || focus)
        ? customize.borderColorSelected
        : customize.borderColor,
      borderRadius: customize.borderRadius,
      boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`
    } : style

    return <input
      className={classNames(baseClass, className)}
      onBlur={() => this.setState({focus: false})}
      onChange={onChange}
      onFocus={() => this.setState({focus: true})}
      onMouseEnter={() => this.setState({hover: true})}
      onMouseLeave={() => this.setState({hover: false})}
      maxLength={length}
      style={inputStyle}
      type='tel'
      value={value}
      {...props}
    />
  }
}

PinCode.defaultProps = {
  length: 6,
  styles: {},
  value: ''
}

PinCode.propTypes = {
  customize: PropTypes.shape({
    borderColor: PropTypes.string,
    borderColorSelected: PropTypes.string,
    borderRadius: PropTypes.string,
    inputColor: PropTypes.string
  }),
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
