import React from 'react'
import Button from '../components/Button'

export default function Buttons () {
  return (
    <div className='button-examples'>
      <div className='appchrome__section appchrome__section--bottomline'>
        <h1>Button examples</h1>
      </div>

      <div className='appchrome__section'>
        <Button size='small'>Click me!</Button>
        <Button size='normal'>Click me!</Button>
        <Button size='big'>Click me!</Button>
      </div>

      <div className='appchrome__section'>
        <Button design='secondary' size='small'>Click me!</Button>
        <Button design='secondary' size='normal'>Click me!</Button>
        <Button design='secondary' size='big'>Click me!</Button>
      </div>

      <div className='appchrome__section'>
        <Button loading size='small'>Click me!</Button>
        <Button loading size='normal'>Click me!</Button>
        <Button loading size='big'>Click me!</Button>
      </div>

      <div className='appchrome__section'>
        <Button success size='small'>Click me!</Button>
        <Button success size='normal'>Click me!</Button>
        <Button success size='big'>Click me!</Button>
      </div>

    </div>
  )
}
