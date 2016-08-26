import flip from 'ramda/src/flip'
import map from 'ramda/src/map'
import asString from 'react-to-jsx'
import { Children } from 'react'

const asCode = (children) =>
  map(flip(asString)({ indent: '  ' }), Children.toArray(children)).join('')

export default asCode
