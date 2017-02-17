import React, {PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../../propTypes/children'

const baseClass = 'block--content'

export default function Content ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (<div className={classNames(baseClass, className)} {...props}>
    {children}
  </div>)
}

Content.displayName = 'Block.Content'

Content.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}
