import { PropTypes } from 'react'

export const getClassName = ({ disabled, error, warning }) => ({
  'is-disabled': disabled,
  'is-error': error,
  'is-warning': warning
})

export const defaultProps = {
  disabled: false,
  error: false,
  warning: false
}

export const propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool
}
