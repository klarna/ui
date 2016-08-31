import flip from 'ramda/src/flip'
import map from 'ramda/src/map'
import asString from 'react-element-to-jsx-string'
import { Children } from 'react'

const opts = {
  showDefaultProps: false,
  showFunctions: true,
  useBooleanShorthandSyntax: true
}

const asCode = (children) =>
  map(flip(asString)(opts), Children.toArray(children)).join('')

export default asCode
