import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import Question from '../icons/Question.jsx'
import Tooltip from '../Tooltip'
import compose from 'ramda/src/compose'
import {withTouchProps, withHoverProps} from '@klarna/higher-order-components'

const baseClass = 'field-tooltip'

const classes = {
  hover: `${baseClass}__hover`,
  icon: `${baseClass}__icon`,
  text: `${baseClass}__text`
}

function FieldTooltip ({active, arrow, id, fieldTooltip, onMouseOver, onMouseOut, ...props}) {
  const classNames = classNamesBind.bind({ ...defaultStyles })

  return <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
    <span
      id={id}
      className={classNames(classes.icon)}
      {...props}>
      <Question color='black' />
    </span>
    <span
      className={classNames(classes.hover, active ? 'is-visible' : 'is-hidden')}
    />
    <Tooltip inlined inverse arrow={arrow} className={classNames(classes.text, active ? 'is-visible' : 'is-hidden', arrow)}>
      {fieldTooltip}
    </Tooltip>
  </div>
}

FieldTooltip.propTypes = {
  active: PropTypes.bool,
  arrow: PropTypes.string,
  id: PropTypes.string,
  fieldTooltip: PropTypes.string
}

FieldTooltip.defaultProps = {
  active: false
}

export default compose(
  withHoverProps({active: true}),
  withTouchProps({active: true})
)(FieldTooltip)
