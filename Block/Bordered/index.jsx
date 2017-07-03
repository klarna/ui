import React from 'react'
import PropTypes from 'prop-types'
import compose from 'ramda/src/compose'
import classNamesBind from 'classnames/bind'
import childrenPropType from '../../propTypes/children'
import defaultStyles from './styles.scss'
import {
  withOverrideFromContext,
  withTheme
} from '@klarna/higher-order-components'

const baseClass = 'block--bordered'

function Bordered (props) {
  const {
    children,
    className,
    customize,
    style,
    styles,
    ...remainingProps
  } = props
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const customizations = customize
    ? {
      borderRadius: customize.borderRadius
    } : {}

  return (
    <div
      className={classNames(baseClass, className)}
      style={{
        ...customizations,
        ...style
      }}
      {...remainingProps}
    >
      {children}
    </div>
  )
}

Bordered.displayName = 'Block.Bordered'

Bordered.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  withTheme((customizations, {customize}) => ({
    customize: {
      borderRadius: customizations.radius_border,
      ...customize
    }
  })),
  withOverrideFromContext({ styles: defaultStyles })
)(Bordered)
