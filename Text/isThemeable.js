const UNTHEMED_STATES = ['error', 'warning']

const isThemeable = (adapter) => (customizations, props) => {
  return UNTHEMED_STATES.includes(props.color) ? () => {} : adapter
}

export default isThemeable
