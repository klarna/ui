/* globals alert */

import React from 'react'
import { Back, Close, Hamburger, Options, Search } from '../IconButton'
import Block from '../Block'
import * as Button from '../Button'

const Primary = {}
Primary.title = 'Primary'

Primary.Small =
  <Button.Primary size='small'>Click me!</Button.Primary>

Primary.Regular =
  <Button.Primary>Click me!</Button.Primary>

Primary.Big =
  <Button.Primary size='big'>Click me!</Button.Primary>

Primary.Custom =
  <Button.Primary customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button.Primary>

Primary['With price regular'] =
  <Button.Primary>
    Pay now!
    <Button.Price>$12.0</Button.Price>
  </Button.Primary>

Primary['With price big'] =
  <Button.Primary size='big'>
    Pay now!
    <Button.Price>14:-</Button.Price>
  </Button.Primary>

Primary['With price loading'] =
  <Button.Primary loading style={{width: '200px'}}>
    Pay now!
    <Button.Price>14:-</Button.Price>
  </Button.Primary>

const Secondary = {}
Secondary.title = 'Secondary'

Secondary.Small =
  <Button.Secondary size='small'>Click me!</Button.Secondary>

Secondary.Regular =
  <Button.Secondary>Click me!</Button.Secondary>

Secondary.Big =
  <Button.Secondary size='big'>Click me!</Button.Secondary>

Secondary.Custom =
  <Button.Secondary customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button.Secondary>

Primary.Disabled =
  <Button.Primary disabled>Click me!</Button.Primary>

Secondary.Disabled =
  <Button.Secondary disabled>Click me!</Button.Secondary>

Primary.Loading =
  <Button.Primary loading>Click me!</Button.Primary>

Primary['Loading with customization'] =
  <Button.Primary loading customize={{backgroundColor: '#3500C8', textColor: '#F9FF3C'}}/>

Secondary.Loading =
    <Button.Secondary loading>Click me!</Button.Secondary>

Secondary['Loading with customization'] =
  <Button.Secondary loading customize={{backgroundColor: '#3500C8', textColor: '#F9FF3C'}}/>

Primary.Success =
  <Button.Primary success>Click me!</Button.Primary>

Secondary.Success =
  <Button.Secondary success>Click me!</Button.Secondary>

Secondary['Button with price small'] =
  <Button.Secondary>
    Pay now!
    <Button.Price>$12.0</Button.Price>
  </Button.Secondary>

Secondary['Button with price small'] =
  <Button.Secondary>
    Pay now!
    <Button.Price>14:-</Button.Price>
  </Button.Secondary>

const Iconic = {}
Iconic.title = 'Iconic Buttons'

Iconic['Default color scheme'] = (
  <Block>
    <Back />
    <Close />
    <Hamburger />
    <Options />
    <Search />
  </Block>
)

Iconic['Gray color scheme'] = (
  <Block>
    <Back color='gray' />
    <Close color='gray' />
    <Hamburger color='gray' />
    <Options color='gray' />
    <Search color='gray' />
  </Block>
)

Iconic['Inverse color scheme'] = (
  <Block blue style={{padding: 20}}>
    <Back onClick={() => alert('lala')} color='inverse' />
    <Close color='inverse' />
    <Hamburger color='inverse' />
    <Options color='inverse' />
    <Search color='inverse' />
  </Block>
)

export default {
  title: 'Button',
  icon: 'Button',
  variations: [Primary, Secondary, Iconic]
}
