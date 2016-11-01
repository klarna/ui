import React, {Component, PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import uncontrolled from 'decorators/uncontrolled'
import compose from 'lib/compose'
import defaultStyles from './styles.scss'

const baseClass = 'segmented-field'

const classes = {
  input: `${baseClass}__input`
}

const isNumber = (x) => x === '0' || x === '1' || x === '2'  || x === '3' || x === '4'  || x === '5' || x === '6' || x === '7' || x === '8' || x === '9'

const isEnabled = (i, value, length) => value.length === length
  ? i === length - 1
  : i === value.length

class SegmentedField extends Component {
  constructor () {
    super()
    this.inputs = []
  }

  render () {
    const {length, onChange, styles, value} = this.props
    const classNames = classNamesBind.bind({...defaultStyles, ...styles})

    return <div
      className={classNames(baseClass)}
      onClick={() => {
        const enabled = value.length === length ? value.length - 1 : value.length
        this.inputs[enabled].focus()
      }}>
      {Array.apply(null, Array(length)).map((_, i) => <input
        className={classNames(classes.input)}
        onChange={(e) => {
          if (isNumber(e.target.value)) {
            const newValue = (
              value.slice(0, i) +
              e.target.value +
              value.slice(i)
            ).slice(0, length)

            onChange(newValue)

            if (newValue.length < length) {
              setTimeout(() => this.inputs[newValue.length].focus())
            }
          }
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 8) {
            const newValue = value.slice(0, value.length - 1)

            onChange(newValue)

            setTimeout(() => this.inputs[newValue.length].focus())
          }
        }}
        disabled={!isEnabled(i, value, length)}
        key={i}
        ref={(element) => this.inputs[i] = element}
        value={value[i] || ''}
      />)}
    </div>
  }
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
    handlerSelector: (x) => x
  })
)(SegmentedField)
