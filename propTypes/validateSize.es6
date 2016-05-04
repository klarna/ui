export default function validateSize (props, prop, component) {
  if (isSize(props[prop])) {
    return null
  }

  return new Error(`${prop} '${props[prop]}' in ${component} is not valid.`)
}

const isSize = (size) => (
  typeof size === 'undefined' ||
    typeof size === 'string' &&
    size.match(/^(0|\d*\.?\d+?(px|%|em|rem|ex|cm|mm|in|pt|pc|ch|vh|vw|vmin|vmax))$/)
)
