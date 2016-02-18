import React from 'react'
import Button from '../components/Button'
import Code from './Code'

export default function Buttons () {
  return (
    <div>
      <h1>Button examples</h1>

      <h2>Primary</h2>

      <h5>Regular</h5>
      <Code>
        <Button size='small'>Click me!</Button>
        <Button>Click me!</Button>
        <Button size='big'>Click me!</Button>
      </Code>

      <h5>Loading</h5>
      <Code>
        <Button loading size='small'>Click me!</Button>
        <Button loading>Click me!</Button>
        <Button loading size='big'>Click me!</Button>
      </Code>

      <h2>Secondary</h2>

      <h5>Regular</h5>
      <Code>
        <Button design='secondary' size='small'>Click me!</Button>
        <Button design='secondary'>Click me!</Button>
        <Button design='secondary' size='big'>Click me!</Button>
      </Code>

      <h5>Loading</h5>
      <Code>
        <Button design='secondary' loading size='small'>Click me!</Button>
        <Button design='secondary' loading>Click me!</Button>
        <Button design='secondary' loading size='big'>Click me!</Button>
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
