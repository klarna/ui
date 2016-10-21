import React, { isValidElement } from 'react'
import { render } from 'react-dom'
import ProgressBar from './ProgressBar'
// import example from './ProgressBar/example'
import { curry, chain, map } from 'ramda'

const reasonableStructure = [
  'ProgressBar', [
    'Regular', <ProgressBar percentage={50} />
  ]
]

function Branch (title, leaves) {
  return {
    leaves: map(
      ([title, x]) => isValidElement(x)
        ? Leaf(title, x)
        : Branch(title, x),
      leaves
    ),
    title,
    map: (f) => Branch(title, map(f, leaves))
  }
}

function Leaf (title, example) {
  return {
    title,
    example,
    map: (f) => Leaf(title, f(example)),
    join: () => Leaf()
  }
}

const itOrDescribe = (x) => {
  console.log('it or describe?', x)
  return isValidElement(x)
    ? (x) => it('ANY IT CAN HAPPEN', () => {
      render(x, document.something)
    })
    : (x) => describe('ANY DESCRIBE CAN HAPPEN', () => x)
}

// const output = chain(
//   map(itOrDescribe),
//   reasonableStructure
// )
//
const Branch = compose(
  chain(itOrDescribe),
  Branch
)(reasonableStructure)

Branch.unsafeSideEffect()

// console.log('output', output)


// const transformToReasonableStructure = (componentExample) => [
//   componentExample.title,
//   map(
//     (key) => [key, componentExample.examples.examples[key]]
//     keys(componentExample.examples.examples)
//   )
// ]
//
// const exampleTree = transformToReasonableStructure(example)
//


// import { identity, reduce, values, mapObjIndexed } from 'ramda'
//
// import { LIVE } from './Showroom/variationTypes'
//
// const container = document.createElement('div')
// container.id = 'container'
//
// document.body.appendChild(container)
//
// const itOrDescribe = (x) => isValidElement(x)
//   ? it
//   : describe
//
//
// (x) => x.type !== LIVE
//
// const isPassthrough = (x) => x.title == null
//
// class Testable {
//   constructor (object) {
//     this.__value = object
//   }
//
//   itOrDescribeOrPassthrough () {
//     if (isValidElement(this.__value)) {
//       return it
//     }
//
//     if (!isPassthrough(this.__value)) {
//       return describe
//     }
//
//     return identity
//   }
//
//   map (f) {
//     switch (this.itOrDescribeOrPassthrough()) {
//       case describe:
//         return new Testable(f(this.__value))
//     }
//   }
// }
//
// function Testable (object) {
//   return {
//     __value: object,
//     map: (f) =>
//   }
// }
//
// Testable.is
