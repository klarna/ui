import React, { Component, PropTypes } from 'react'
import RadioGroup from '../RadioGroup'

export default class StatefulRadioGroup extends Component {

  constructor (props) {
    super(props)

    this.state = {selected: props.selected || (props.data && props.data[0].id)}

    this.onChange = this.onChange.bind(this)
  }

  onChange (selected) {
    this.setState({ selected })
    this.props.onChange && this.props.onChange(selected)
  }

  render () {
    const { name, ...remainingProps } = this.props

    return (
      <div>
        <RadioGroup {...remainingProps}
          selected={this.state.selected}
          onChange={this.onChange}/>
        {name && <input type='hidden' name={name} value={this.state.selected} />}
      </div>
    )
  }
}

StatefulRadioGroup.propTypes = {
  name: PropTypes.string,
  // Following PropTypes are the same as RadioGroup's
  // except selected and onChange are optional.
  selected: React.PropTypes.any,
  onChange: React.PropTypes.func,
  className: PropTypes.string,
  data: PropTypes.arrayOf(RadioGroup.optionSchema).isRequired
}
