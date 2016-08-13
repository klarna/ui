/* globals alert */

import React from 'react'
import { Back, Close, Hamburger, Options, Search } from '../IconButton'
import Block from '../Block'
import { Title, Subtitle } from '../Text'
import Code from '../Code'
import * as Button from '../Button'

export default function Buttons () {
  return (
    <div>
      <Title.Secondary color='blue' margins>Primary</Title.Secondary>

      <Subtitle margins>Regular</Subtitle>
      <Code>
        <Button.Primary size='small'>Click me!</Button.Primary>
        <Button.Primary>Click me!</Button.Primary>
        <Button.Primary size='big'>Click me!</Button.Primary>
        <Button.Primary customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button.Primary>
      </Code>

      <Title.Secondary color='blue' margins>Secondary</Title.Secondary>

      <Subtitle margins>Regular</Subtitle>
      <Code>
        <Button.Secondary size='small'>Click me!</Button.Secondary>
        <Button.Secondary>Click me!</Button.Secondary>
        <Button.Secondary size='big'>Click me!</Button.Secondary>
        <Button.Secondary customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button.Secondary>
      </Code>

      <Title.Secondary color='blue' margins>Disabled</Title.Secondary>
      <Code>
        <Button.Primary disabled size='small'>Click me!</Button.Primary>
        <Button.Primary disabled>Click me!</Button.Primary>
        <Button.Primary disabled size='big'>Click me!</Button.Primary>

        <Button.Secondary disabled size='small'>Click me!</Button.Secondary>
        <Button.Secondary disabled>Click me!</Button.Secondary>
        <Button.Secondary disabled size='big'>Click me!</Button.Secondary>
      </Code>

      <Title.Secondary color='blue' margins>Loading</Title.Secondary>
      <Code>
        <Button.Primary loading size='small'>Click me!</Button.Primary>
        <Button.Primary loading>Click me!</Button.Primary>
        <Button.Primary loading size='big'>Click me!</Button.Primary>
        <Button.Primary loading customize={{backgroundColor: '#3500C8', textColor: '#F9FF3C'}}/>

        <hr style={{border: 0, background: 0}} />

        <Button.Secondary loading size='small'>Click me!</Button.Secondary>
        <Button.Secondary loading>Click me!</Button.Secondary>
        <Button.Secondary loading size='big'>Click me!</Button.Secondary>
        <Button.Secondary loading customize={{backgroundColor: '#3500C8', textColor: '#F9FF3C'}}/>
      </Code>

      <Title.Secondary color='blue' margins>Success</Title.Secondary>
      <Code>
        <Button.Primary success size='small'>Click me!</Button.Primary>
        <Button.Primary success>Click me!</Button.Primary>
        <Button.Primary success size='big'>Click me!</Button.Primary>
      </Code>

      <Title.Secondary color='blue' margins>Button with price</Title.Secondary>
      <Subtitle margins>Primary</Subtitle>
      <Code>
        <Button.Primary>
          Pay now!
          <Button.Price>$12.0</Button.Price>
        </Button.Primary>
        <Button.Primary size='big'>
          Pay now!
          <Button.Price>14:-</Button.Price>
        </Button.Primary>
        <Button.Primary loading style={{width: '200px'}}>
          Pay now!
          <Button.Price>14:-</Button.Price>
        </Button.Primary>
      </Code>

      <Subtitle margins>Secondary</Subtitle>
      <Code>
        <Button.Secondary>
          Pay now!
          <Button.Price>$12.0</Button.Price>
        </Button.Secondary>
        <Button.Secondary size='big'>
          Pay now!
          <Button.Price>14:-</Button.Price>
        </Button.Secondary>
        <Button.Secondary loading style={{width: '200px'}}>
          Pay now!
          <Button.Price>14:-</Button.Price>
        </Button.Secondary>
      </Code>

      <Title.Secondary color='blue' margins>Iconic Buttons</Title.Secondary>
      <Subtitle margins>Default color scheme</Subtitle>
      <Code>
        <Back />
        <Close />
        <Hamburger />
        <Options />
        <Search />
      </Code>

      <Subtitle margins>Gray color scheme</Subtitle>
      <Code>
        <Back color='gray' />
        <Close color='gray' />
        <Hamburger color='gray' />
        <Options color='gray' />
        <Search color='gray' />
      </Code>

      <Subtitle margins>Inverse color scheme</Subtitle>
      <Code>
        <Block blue style={{padding: 20}}>
          <Back onClick={() => alert('lala')} color='inverse' />
          <Close color='inverse' />
          <Hamburger color='inverse' />
          <Options color='inverse' />
          <Search color='inverse' />
        </Block>
      </Code>

    </div>
  )
}
