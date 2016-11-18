export const regexp = (props, propName, componentName) => (
  (props[propName] instanceof RegExp) || (props[propName] === undefined) // we can modify this to support isRequired, when needed
  ? undefined
  : new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a RegExp, got: ${props[propName]}.`)
)

