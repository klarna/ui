/* globals alert */

import React from 'react'
import Button, { Price } from './'
import { BackButton, CloseButton, HamburgerButton, OptionsButton, SearchButton } from '../IconButton'
import Block from '../Block'
import { Title, Subtitle } from '../Text'
import Code from '../Code'

export default function Buttons () {
  return (
    <div>
      <Title.Secondary color='blue' margins>Primary</Title.Secondary>

      <Subtitle margins>Regular</Subtitle>
      <Code>
        <Button size='small'>Click me!</Button>
        <Button>Click me!</Button>
        <Button size='big'>Click me!</Button>
        <Button customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button>
      </Code>

      <Title.Secondary color='blue' margins>Secondary</Title.Secondary>

      <Subtitle margins>Regular</Subtitle>
      <Code>
        <Button design='secondary' size='small'>Click me!</Button>
        <Button design='secondary'>Click me!</Button>
        <Button design='secondary' size='big'>Click me!</Button>
        <Button design='secondary' customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button>
      </Code>

      <Title.Secondary color='blue' margins>Disabled</Title.Secondary>
      <Code>
        <Button disabled size='small'>Click me!</Button>
        <Button disabled>Click me!</Button>
        <Button disabled size='big'>Click me!</Button>

        <Button design='secondary' disabled size='small'>Click me!</Button>
        <Button design='secondary' disabled>Click me!</Button>
        <Button design='secondary' disabled size='big'>Click me!</Button>
      </Code>

      <Title.Secondary color='blue' margins>Loading</Title.Secondary>
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

      <Title.Secondary color='blue' margins>Success</Title.Secondary>
      <Code>
        <Button success size='small'>Click me!</Button>
        <Button success>Click me!</Button>
        <Button success size='big'>Click me!</Button>
      </Code>

      <Title.Secondary color='blue' margins>Button with price</Title.Secondary>
      <Subtitle margins>Primary</Subtitle>
      <Code>
        <Button>
          Pay now!
          <Price>$12.0</Price>
        </Button>
        <Button size='big'>
          Pay now!
          <Price>14:-</Price>
        </Button>
        <Button loading style={{width: '200px'}}>
          Pay now!
          <Price>14:-</Price>
        </Button>
      </Code>

      <Subtitle margins>Secondary</Subtitle>
      <Code>
        <Button design='secondary'>
          Pay now!
          <Price>$12.0</Price>
        </Button>
        <Button design='secondary' size='big'>
          Pay now!
          <Price>14:-</Price>
        </Button>
        <Button design='secondary' loading style={{width: '200px'}}>
          Pay now!
          <Price>14:-</Price>
        </Button>
      </Code>

      <Title.Secondary color='blue' margins>Iconic Buttons</Title.Secondary>
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
