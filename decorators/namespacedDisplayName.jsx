export default (namespace) => (name) => (Component) => {
  Component.displayName = `${namespace}.${name}`
  return Component
}
