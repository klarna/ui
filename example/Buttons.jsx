import React from 'react'
import Button from '../components/Button'
import Code from './Code'

export default function Buttons () {
  return (
    <div>
      <h1>Button examples</h1>

      <h3>Primary</h3>
      <Code>
        <Button size='small'>Click me!</Button>
        <Button>Click me!</Button>
        <Button size='big'>Click me!</Button>
      </Code>

      <h3>Secondary</h3>
      <Code>
        <Button design='secondary' size='small'>Click me!</Button>
        <Button design='secondary'>Click me!</Button>
        <Button design='secondary' size='big'>Click me!</Button>
      </Code>

      <h3>Loading</h3>
      <Code>
        <Button loading size='small'>Click me!</Button>
        <Button loading>Click me!</Button>
        <Button loading size='big'>Click me!</Button>
      </Code>

      <h3>Success</h3>
      <Code>
        <Button success size='small'>Click me!</Button>
        <Button success>Click me!</Button>
        <Button success size='big'>Click me!</Button>
      </Code>
    </div>
  )
}
