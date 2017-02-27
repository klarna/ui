import React, {PropTypes} from 'react'
import * as palette from '../settings/palette'

export const defaultStyles = {
  main: {
    backgroundColor: palette.BACKDROP.dark,
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  }
}

export default function Backdrop ({className, styles, ...props}) {
  return <div
    style={{...defaultStyles.main, ...styles.main}}
    {...props}
  />
}

Backdrop.propTypes = {
  styles: PropTypes.shape({
    main: PropTypes.object
  })
}

Backdrop.defaultProps = {
  styles: {
    main: {}
  }
}
