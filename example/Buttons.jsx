/* globals alert */

import React from 'react'
import Button from '../components/Button'
import PayButton from '../components/PayButton'
import { BackButton, CloseButton, HamburgerButton, OptionsButton, SearchButton } from '../components/IconButton'
import Block from '../components/Block'
import { SecondaryTitle, Subtitle } from '../components/Text'
import Code from './Code'

export default function Buttons () {
  return (
    <div>
      <SecondaryTitle color='blue' margins>Primary</SecondaryTitle>

      <Subtitle margins>Regular</Subtitle>
      <Code>
        <Button size='small'>Click me!</Button>
        <Button>Click me!</Button>
        <Button size='big'>Click me!</Button>
        <Button customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button>
      </Code>

      <SecondaryTitle color='blue' margins>Secondary</SecondaryTitle>

      <Subtitle margins>Regular</Subtitle>
      <Code>
        <Button design='secondary' size='small'>Click me!</Button>
        <Button design='secondary'>Click me!</Button>
        <Button design='secondary' size='big'>Click me!</Button>
        <Button design='secondary' customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button>
      </Code>

      <SecondaryTitle color='blue' margins>Disabled</SecondaryTitle>
      <Code>
        <Button disabled size='small'>Click me!</Button>
        <Button disabled>Click me!</Button>
        <Button disabled size='big'>Click me!</Button>

        <Button design='secondary' disabled size='small'>Click me!</Button>
        <Button design='secondary' disabled>Click me!</Button>
        <Button design='secondary' disabled size='big'>Click me!</Button>
      </Code>

      <SecondaryTitle color='blue' margins>Loading</SecondaryTitle>
      <Code>
        <Button loading size='small'>Click me!</Button>
        <Button loading>Click me!</Button>
        <Button loading size='big'>Click me!</Button>
        <Button loading customize={{backgroundColor: '#3500C8', textColor: '#F9FF3C'}}/>

        <hr style={{border: 0, background: 0}} />

        <Button design='secondary' loading size='small'>Click me!</Button>
        <Button design='secondary' loading>Click me!</Button>
        <Button design='secondary' loading size='big'>Click me!</Button>
        <Button design='secondary' loading customize={{backgroundColor: '#3500C8', textColor: '#F9FF3C'}}/>
      </Code>

      <SecondaryTitle color='blue' margins>Success</SecondaryTitle>
      <Code>
        <Button success size='small'>Click me!</Button>
        <Button success>Click me!</Button>
        <Button success size='big'>Click me!</Button>
      </Code>

      <SecondaryTitle color='blue' margins>Button with price</SecondaryTitle>
      <Subtitle margins>Primary</Subtitle>
      <Code>
        <PayButton price='$12.0'>Pay now!</PayButton>
        <PayButton price='14:-' size='big'>Pay now!</PayButton>
        <PayButton price='14:-' loading style={{width: '200px'}}>Pay now!</PayButton>
      </Code>

      <Subtitle margins>Secondary</Subtitle>
      <Code>
        <PayButton design='secondary' price='$12.0'>Pay now!</PayButton>
        <PayButton design='secondary' price='14:-' size='big'>Pay now!</PayButton>
        <PayButton design='secondary' price='14:-' loading style={{width: '200px'}}>Pay now!</PayButton>
      </Code>

      <SecondaryTitle color='blue' margins>Iconic Buttons</SecondaryTitle>
      <Subtitle margins>Default color scheme</Subtitle>
      <Code>
        <BackButton />
        <CloseButton />
        <HamburgerButton />
        <OptionsButton />
        <SearchButton />
      </Code>

      <Subtitle margins>Gray color scheme</Subtitle>
      <Code>
        <BackButton color='gray' />
        <CloseButton color='gray' />
        <HamburgerButton color='gray' />
        <OptionsButton color='gray' />
        <SearchButton color='gray' />
      </Code>

      <Subtitle margins>Inverse color scheme</Subtitle>
      <Code>
        <Block blue style={{padding: 20}}>
          <BackButton onClick={() => alert('lala')} color='inverse' />
          <CloseButton color='inverse' />
          <HamburgerButton color='inverse' />
          <OptionsButton color='inverse' />
          <SearchButton color='inverse' />
        </Block>
      </Code>

    </div>
  )
}
