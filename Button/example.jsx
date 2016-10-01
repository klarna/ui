import React from 'react'
import { Back, Close, Hamburger, Options, Search } from '../IconButton'
import * as Block from '../Block'
import * as Button from '../Button'
import { LIVE, SHOWCASE } from '../Showroom/variationTypes'

export default {
  title: 'Button',
  icon: 'Button',

  variations: [
    {
      title: 'Showcase',
      type: SHOWCASE,

      example: <table>
        <tr>
          <td>
            <Button.Primary size='small'>Primary</Button.Primary>
          </td>
        </tr>
      </table>
    },

    {
      title: 'Primary',
      require: 'import * as Button from \'@klarna/ui/Button\'',
      type: LIVE,

      examples: {
        Small: <Button.Primary size='small'>Click me!</Button.Primary>,
        Regular: <Button.Primary>Click me!</Button.Primary>,
        Big: <Button.Primary size='big'>Click me!</Button.Primary>,
        Custom: <Button.Primary
          customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>
          Beautiful!
        </Button.Primary>,
        'With price regular': <Button.Primary>
          Pay now!
          <Button.Price>$12.0</Button.Price>
        </Button.Primary>,
        'With price big': <Button.Primary size='big'>
          Pay now!
          <Button.Price>14:-</Button.Price>
        </Button.Primary>,
        'With price loading': <Button.Primary loading style={{width: '200px'}}>
          Pay now!
          <Button.Price>14:-</Button.Price>
        </Button.Primary>,
        Disabled: <Button.Primary disabled>Click me!</Button.Primary>,
        Loading: <Button.Primary loading>Click me!</Button.Primary>,
        'Loading with customization': <Button.Primary
          loading
          customize={{backgroundColor: '#3500C8', textColor: '#F9FF3C'}}
        />,
        Success: <Button.Primary success>Click me!</Button.Primary>
      }
    },

    {
      title: 'Secondary',
      require: 'import * as Button from \'@klarna/ui/Button\'',
      type: LIVE,

      examples: {
        Small: <Button.Secondary size='small'>Click me!</Button.Secondary>,
        Regular: <Button.Secondary>Click me!</Button.Secondary>,
        Big: <Button.Secondary size='big'>Click me!</Button.Secondary>,
        Custom: <Button.Secondary
          customize={{textColor: '#F9FF3C', backgroundColor: '#3500C8'}}>
          Beautiful!
        </Button.Secondary>,
        Disabled: <Button.Secondary disabled>Click me!</Button.Secondary>,
        Loading: <Button.Secondary loading>Click me!</Button.Secondary>,
        'Loading with customization': <Button.Secondary
          loading
          customize={{backgroundColor: '#3500C8', textColor: '#F9FF3C'}}
        />,
        Success: <Button.Secondary success>Click me!</Button.Secondary>,
        'Button with price small': <Button.Secondary>
          Pay now!
          <Button.Price>$12.0</Button.Price>
        </Button.Secondary>,
        'Button with price small': <Button.Secondary>
          Pay now!
          <Button.Price>14:-</Button.Price>
        </Button.Secondary>
      }
    },

    {
      title: 'Iconic Buttons',
      require: 'import { Back, Close, Hamburger, Options, Search } from \'@klarna/ui/IconButton\'',
      type: LIVE,

      examples: {
        'Default color scheme': <Block.Plain>
          <Back />
          <Close />
          <Hamburger />
          <Options />
          <Search />
        </Block.Plain>,
        'Gray color scheme': <Block.Plain>
          <Back color='gray' />
          <Close color='gray' />
          <Hamburger color='gray' />
          <Options color='gray' />
          <Search color='gray' />
        </Block.Plain>,
        'Inverse color scheme': <Block.Plain blue style={{padding: 20}}>
          <Back onClick={() => console.log('lala')} color='inverse' />
          <Close color='inverse' />
          <Hamburger color='inverse' />
          <Options color='inverse' />
          <Search color='inverse' />
        </Block.Plain>
      }
    }
  ]
}
