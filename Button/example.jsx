import React from 'react'
import { Back, Close, Hamburger, Options, Search } from '../IconButton'
import * as Block from '../Block'
import * as Button from '../Button'
// import * as Paragraph from '../Paragraph'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Button',
  icon: 'Button',

  variations: [
    // {
    //   title: 'Showcase',
    //   type: SHOWCASE,
    //
    //   example: [
    //     <Paragraph.Secondary style={{textAlign: 'center'}}>
    //       Here's an overview of all buttons.
    //     </Paragraph.Secondary>,
    //     <Paragraph.Secondary style={{textAlign: 'center'}}>
    //       Place the mouse cursor over the elements and click them to the see the different states.
    //     </Paragraph.Secondary>,
    //     <table style={{marginTop: '40px', textAlign: 'center', width: '100%'}}>
    //       <tbody>
    //         <tr>
    //           <td>
    //             <Button.Primary size='small'>Primary</Button.Primary>
    //           </td>
    //           <td>
    //             <Button.Primary loading size='small'>Primary</Button.Primary>
    //           </td>
    //           <td>
    //             <Button.Primary disabled size='small'>Primary</Button.Primary>
    //           </td>
    //           <td>
    //             <Button.Primary size='small'>Primary<Button.Price>$Price</Button.Price></Button.Primary>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>
    //             <Button.Primary>Primary</Button.Primary>
    //           </td>
    //           <td>
    //             <Button.Primary loading>Primary</Button.Primary>
    //           </td>
    //           <td>
    //             <Button.Primary disabled>Primary</Button.Primary>
    //           </td>
    //           <td>
    //             <Button.Primary>Primary<Button.Price>$Price</Button.Price></Button.Primary>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>
    //             <Button.Primary size='big'>Primary</Button.Primary>
    //           </td>
    //           <td>
    //             <Button.Primary loading size='big'>Primary</Button.Primary>
    //           </td>
    //           <td>
    //             <Button.Primary disabled size='big'>Primary</Button.Primary>
    //           </td>
    //           <td>
    //             <Button.Primary size='big'>Primary<Button.Price>$Price</Button.Price></Button.Primary>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>
    //             <Button.Secondary size='small'>Secondary</Button.Secondary>
    //           </td>
    //           <td>
    //             <Button.Secondary loading size='small'>Secondary</Button.Secondary>
    //           </td>
    //           <td>
    //             <Button.Secondary disabled size='small'>Secondary</Button.Secondary>
    //           </td>
    //           <td>
    //             <Button.Secondary size='small'>Secondary<Button.Price>$Price</Button.Price></Button.Secondary>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>
    //             <Button.Secondary>Secondary</Button.Secondary>
    //           </td>
    //           <td>
    //             <Button.Secondary loading>Secondary</Button.Secondary>
    //           </td>
    //           <td>
    //             <Button.Secondary disabled>Secondary</Button.Secondary>
    //           </td>
    //           <td>
    //             <Button.Secondary>Secondary<Button.Price>$Price</Button.Price></Button.Secondary>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td>
    //             <Button.Secondary size='big'>Secondary</Button.Secondary>
    //           </td>
    //           <td>
    //             <Button.Secondary loading size='big'>Secondary</Button.Secondary>
    //           </td>
    //           <td>
    //             <Button.Secondary disabled size='big'>Secondary</Button.Secondary>
    //           </td>
    //           <td>
    //             <Button.Secondary size='big'>Secondary<Button.Price>$Price</Button.Price></Button.Secondary>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   ]
    // },

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
        'With price small': <Button.Primary size='small'>
          Pay now!
          <Button.Price>$12.0</Button.Price>
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
        'Button with price small': <Button.Secondary size='small'>
          Pay now!
          <Button.Price>$12.0</Button.Price>
        </Button.Secondary>,
        'Button with price': <Button.Secondary>
          Pay now!
          <Button.Price>$12.0</Button.Price>
        </Button.Secondary>,
        'Button with price big': <Button.Secondary size='big'>
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
        'With text': <Block.Plain>
          <Back label='Back' />
          <Close label='Close' color='gray' left />
        </Block.Plain>,
        'Gray color scheme': <Block.Plain>
          <Back color='gray' />
          <Close color='gray' />
          <Hamburger color='gray' />
          <Options color='gray' />
          <Search color='gray' />
        </Block.Plain>,
        'Inverse color scheme': <Block.Plain blue style={{padding: 20}}>
          <Back color='inverse' />
          <Close color='inverse' />
          <Hamburger color='inverse' />
          <Options color='inverse' />
          <Search color='inverse' />
        </Block.Plain>
      }
    }
  ]
}
