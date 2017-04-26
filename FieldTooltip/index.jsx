import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import Question from '../icons/Question.jsx'
import Tooltip from '../Tooltip'

const baseClass = 'field-tooltip'

const classes = {
  icon: `${baseClass}__icon`,
  text: `${baseClass}__text`
}

const FieldTooltip = React.createClass({

  getInitialState () {
    return {
      hover: undefined
    }
  },

  onTooltipClick () {
    this.setState({
      hover: !this.state.hover
    })
  },

  onMouseEnter () {
    this.setState({
      hover: true
    })
  },

  onMouseLeave () {
    this.setState({
      hover: false
    })
  },

  render () {
    const {
      arrow,
      id,
      fieldTooltip
    } = this.props

    const {
      hover
    } = this.state

    const classNames = classNamesBind.bind({ ...defaultStyles })

    return (
      <div>
        <span
          id={id}
          onClick={this.onTooltipClick}
          onBlur={this.onMouseLeave}
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          className={classNames(classes.icon)}>
          <Question color='black'/>
        </span>
        <Tooltip inverse arrow={arrow} className={classNames(classes.text, hover ? '' : 'is-hidden', arrow)}>
          {fieldTooltip}
        </Tooltip>
      </div>
    )
  }
})

FieldTooltip.propTypes = {
  arrow: PropTypes.string,
  id: PropTypes.string,
  fieldTooltip: PropTypes.string
}

export default FieldTooltip
