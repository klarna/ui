/* globals alert */

import React from 'react'
import { Back, Close, Hamburger, Options, Search } from '../IconButton'
import Block from '../Block'
import Code from '../Code'
import * as Button from '../Button'

const Primary = {}
Primary.title = 'Primary'

Primary.Small = (
  <Code>
  <Button.Primary size='small'>Click me!</Button.Primary>
  </Code>
)

Primary.Regular = (
  <Code>
  <Button.Primary>Click me!</Button.Primary>
  </Code>
)

Primary.Big = (
  <Code>

  <Button.Primary size='big'>Click me!</Button.Primary>
  </Code>

)

/*
Primary.Custom = (
  <Code>
    <Button.Primary customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button.Primary>
  </Code>
)

Primary['Button with price'] = (
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
)

const Secondary = {}
Secondary.title = 'Secondary'

Secondary.Regular = (
  <Code>
    <Button.Secondary size='small'>Click me!</Button.Secondary>
    <Button.Secondary>Click me!</Button.Secondary>
    <Button.Secondary size='big'>Click me!</Button.Secondary>
    <Button.Secondary customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>Beautiful!</Button.Secondary>
  </Code>
)

Secondary.Disabled = (
  <Code>
    <Button.Primary disabled size='small'>Click me!</Button.Primary>
    <Button.Primary disabled>Click me!</Button.Primary>
    <Button.Primary disabled size='big'>Click me!</Button.Primary>

    <Button.Secondary disabled size='small'>Click me!</Button.Secondary>
    <Button.Secondary disabled>Click me!</Button.Secondary>
    <Button.Secondary disabled size='big'>Click me!</Button.Secondary>
  </Code>
)


Secondary.Loading = (
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
)

Secondary.Success = (
  <Code>
    <Button.Primary success size='small'>Click me!</Button.Primary>
    <Button.Primary success>Click me!</Button.Primary>
    <Button.Primary success size='big'>Click me!</Button.Primary>
  </Code>
)


Secondary['Button with price'] = (
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
)

const Iconic = {}
Iconic.title = 'Iconic Buttons'

Iconic['Default color scheme'] = (
  <Code>
    <Back />
    <Close />
    <Hamburger />
    <Options />
    <Search />
  </Code>
)

Iconic['Gray color scheme'] = (
  <Code>
    <Back color='gray' />
    <Close color='gray' />
    <Hamburger color='gray' />
    <Options color='gray' />
    <Search color='gray' />
  </Code>
)

Iconic['Inverse color scheme'] = (
  <Code>
    <Block blue style={{padding: 20}}>
      <Back onClick={() => alert('lala')} color='inverse' />
      <Close color='inverse' />
      <Hamburger color='inverse' />
      <Options color='inverse' />
      <Search color='inverse' />
    </Block>
  </Code>
  )

, Secondary, Iconic
*/
export default {
  title: 'Button',
  variations: [Primary]
}
