import React, {PropTypes, PureComponent} from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import overridable from '../../decorators/overridable'
import uncontrolled from '../../decorators/uncontrolled'
import themeable from '../../decorators/themeable'
import compose from '../../lib/compose'

const baseClass = 'field-code'

class PinCode extends PureComponent {
  constructor () {
    super()

    this.state = {
      hover: false,
      focus: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled && !this.props.disabled && this.state.focus) {
      this._input.blur()
    }
  }

  render () {
    const {
      className,
      customize,
      error,
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
      ...(!error
        ? {
          color: customize.inputColor,
          borderColor: (hover || focus)
            ? customize.borderColorSelected
            : customize.borderColor,
          boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`
        }
        : {}
      ),
      borderRadius: customize.borderRadius,
      ...style
    } : style

    return <input
      ref={(elm) => this._input = elm}
      className={classNames(baseClass, {error}, className)}
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
  error: false,
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
  error: PropTypes.bool,
  length: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
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
  }),
  themeable((customizations, props) => ({
    customize: {
      ...props.style,
      borderColor: customizations.color_border,
      borderColorSelected: customizations.color_border_selected,
      borderRadius: customizations.radius_border,
      inputColor: customizations.color_text
    }
  })),
  overridable(defaultStyles)
)(PinCode)
