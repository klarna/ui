import React from 'react'
import * as Button from '../../Button'

/* global geminiReact */
geminiReact.suite('Button', () => {
  geminiReact.suite('Primary', (suite) => {
    suite
      .render(<Button.Primary>Click me!</Button.Primary>)
      .capture('initial')
      .capture('hovered', (actions, find) => {
        actions.mouseMove(find('button'))
      })
      .capture('pressed', (actions, find) => {
        actions.mouseDown(find('button'))
      })
  })
})
