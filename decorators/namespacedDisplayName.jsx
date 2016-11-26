export default function (namespace) {
  return function (name) {
    return function (Component) {
      Component.displayName = `${namespace}.${name}`
      return Component
    }
  }
}
