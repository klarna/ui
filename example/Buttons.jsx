import React from 'react'
import Button from '../components/Button'
import PayButton from '../components/PayButton'
import { BackButton, CloseButton, HamburgerButton, OptionsButton, SearchButton } from '../components/IconButton'
import Block from '../components/Block'
import Code from './Code'

export default function Buttons () {
  return (
    <div>
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

      <h3>Disabled</h3>
      <Code>
        <Button disabled size='small'>Click me!</Button>
        <Button disabled>Click me!</Button>
        <Button disabled size='big'>Click me!</Button>

        <Button design='secondary' disabled size='small'>Click me!</Button>
        <Button design='secondary' disabled>Click me!</Button>
        <Button design='secondary' disabled size='big'>Click me!</Button>
      </Code>

      <h3>Loading</h3>
      <Code>
        <Button loading size='small'>Click me!</Button>
        <Button loading>Click me!</Button>
        <Button loading size='big'>Click me!</Button>

        <hr style={{border: 0, background: 0}} />

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

      <h3>Button with price</h3>
      <h5>Primary</h5>
      <Code>
        <PayButton price='$12.0'>Pay now!</PayButton>
        <PayButton price='14:-' size='big'>Pay now!</PayButton>
        <PayButton price='14:-' loading style={{width: '200px'}}>Pay now!</PayButton>
      </Code>

      <h5>Secondary</h5>
      <Code>
        <PayButton design='secondary' price='$12.0'>Pay now!</PayButton>
        <PayButton design='secondary' price='14:-' size='big'>Pay now!</PayButton>
        <PayButton design='secondary' price='14:-' loading style={{width: '200px'}}>Pay now!</PayButton>
      </Code>

      <h3>Iconic Buttons</h3>
      <h5>Default color scheme</h5>
      <Code>
        <BackButton />
        <CloseButton />
        <HamburgerButton />
        <OptionsButton />
        <SearchButton />
      </Code>

      <h5>Gray color scheme</h5>
      <Code>
        <BackButton color='gray' />
        <CloseButton color='gray' />
        <HamburgerButton color='gray' />
        <OptionsButton color='gray' />
        <SearchButton color='gray' />
      </Code>

      <h5>Inverse color scheme</h5>
      <Code>
        <Block blue style={{padding: 20}}>
          <BackButton color='inverse' />
          <CloseButton color='inverse' />
          <HamburgerButton color='inverse' />
          <OptionsButton color='inverse' />
          <SearchButton color='inverse' />
        </Block>
      </Code>

    </div>
  )
}
