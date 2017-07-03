import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import {withTheme, withOverrideFromContext} from '@klarna/higher-order-components'
import compose from 'ramda/src/compose'
import defaultStyles from '../styles.scss'
import withDisplayName from '../withDisplayName'

const classes = {
  bgWrapper: 'bg-wrapper',
  iconButton: 'icon-button',
  fill: 'illustration__fill',
  label: 'illustration__label',
  labelLight: 'illustration__label--light',
  stroke: 'illustration__stroke'
}

const Select = ({className, color, id, label, left, styles, ...props}) => {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      illustration: `${id}__illustration`,
      label: `${id}__label`
    } : {}

  return <div
    className={classNames(classes.iconButton, className)}
    id={id}
    {...props}>
    <div className={classNames(classes.bgWrapper, color)}>
      <svg
        focusable='false'
        className={classNames('illustration', 'button', color)}
        id={ids.illustration}
        strokeLinecap='round'
        strokeWidth='2'
        viewBox='0 0 21 21'
        height='20px'
        width='20px'>
        <path
          className={classNames(classes.stroke)}
          d='M9,6l4,4l-4,4'
        />
      </svg>

      <span
        className={classNames(classes.label, classes.labelLight, { left }, color)}
        id={ids.label}>
        {label}
      </span>
    </div>
  </div>
}

Select.defaultProps = {
  left: true
}

Select.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['gray', 'inverse', 'blue']),
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  withTheme(() => ({color: 'gray'})),
  withOverrideFromContext({ styles: defaultStyles }),
  withDisplayName('Select')
)(Select)
