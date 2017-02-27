import React from 'react'
import { Back, Close, Hamburger, Options, Search, Select } from '../IconButton'
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
      require: `import * as Button from '@klarna/ui/Button'`,
      type: LIVE,

      examples: {
        Small: <Button.Primary size='small'>Click me!</Button.Primary>,
        Regular: <Button.Primary>Click me!</Button.Primary>,
        Big: <Button.Primary size='big'>Click me!</Button.Primary>,
        Custom: <Button.Primary
          customize={{textColor: '#F9FF3C', borderRadius: '15px', backgroundColor: '#3500C8'}}>
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
        'High brand volume': (
          <div>
            <Button.Primary brandVolume='high'>
              Start your journey
            </Button.Primary>
            <Button.Primary brandVolume='high' size='big' style={{marginTop: 10, display: 'block'}}>
              Start your journey
            </Button.Primary>
          </div>
        ),
        'High brand volume with price': (
          <div>
            <Button.Primary brandVolume='high'>
              Pay now
              <Button.Price>
                12$
              </Button.Price>
            </Button.Primary>
            <Button.Primary brandVolume='high' size='big' style={{marginTop: 10, display: 'block'}}>
              Pay now
              <Button.Price>
                12$
              </Button.Price>
            </Button.Primary>
          </div>
        ),
        Disabled: <Button.Primary disabled>Click me!</Button.Primary>,
        Loading: <Button.Primary loading>Click me!</Button.Primary>,
        'Loading with customization': <Button.Primary
          loading
          customize={{backgroundColor: '#3500C8', borderRadius: '15px', textColor: '#F9FF3C'}}
        />,
        Success: <Button.Primary success>Click me!</Button.Primary>
      }
    },

    {
      title: 'Secondary',
      require: `import * as Button from '@klarna/ui/Button'`,
      type: LIVE,

      examples: {
        Small: <Button.Secondary size='small'>Click me!</Button.Secondary>,
        Regular: <Button.Secondary>Click me!</Button.Secondary>,
        Big: <Button.Secondary size='big'>Click me!</Button.Secondary>,
        Custom: <Button.Secondary
          customize={{textColor: '#F9FF3C', borderRadius: '15px', backgroundColor: '#3500C8'}}>
          Beautiful!
        </Button.Secondary>,
        'High brand volume': (
          <div>
            <Button.Secondary brandVolume='high'>
              Start your journey
            </Button.Secondary>
            <Button.Secondary brandVolume='high' size='big' style={{marginTop: 10}}>
              Start your journey
            </Button.Secondary>
          </div>
        ),
        Disabled: <Button.Secondary disabled>Click me!</Button.Secondary>,
        Loading: <Button.Secondary loading>Click me!</Button.Secondary>,
        'Loading with customization': <Button.Secondary
          loading
          customize={{backgroundColor: '#3500C8', borderRadius: '15px', textColor: '#F9FF3C'}}
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
      title: 'Tertiary',
      require: `import * as Button from '@klarna/ui/Button'`,
      type: LIVE,

      examples: {
        Small: <Button.Tertiary size='small'>Click me!</Button.Tertiary>,
        Regular: <Button.Tertiary brandVolume='high'>Click me!</Button.Tertiary>,
        Big: <Button.Tertiary size='big'>Click me!</Button.Tertiary>,
        Custom: <Button.Tertiary
          customize={{textColor: '#F9FF3C', borderRadius: '15px', backgroundColor: '#3500C8'}}>
          Beautiful!
        </Button.Tertiary>,
        Disabled: <Button.Tertiary disabled>Click me!</Button.Tertiary>,
        Loading: <Button.Tertiary loading>Click me!</Button.Tertiary>,
        'Loading with customization': <Button.Tertiary
          loading
          customize={{backgroundColor: '#3500C8', borderRadius: '15px', textColor: '#F9FF3C'}}
        />,
        Success: <Button.Tertiary success>Click me!</Button.Tertiary>,
        'Button with price small': <Button.Tertiary size='small'>
          Pay now!
          <Button.Price>$12.0</Button.Price>
        </Button.Tertiary>,
        'Button with price': <Button.Tertiary>
          Pay now!
          <Button.Price>$12.0</Button.Price>
        </Button.Tertiary>,
        'Button with price big': <Button.Tertiary size='big'>
          Pay now!
          <Button.Price>14:-</Button.Price>
        </Button.Tertiary>
      }
    },

    {
      title: 'Iconic Buttons',
      require: `import { Back, Close, Hamburger, Options, Search, Select } from '@klarna/ui/IconButton'`,
      type: LIVE,

      examples: {
        'Default color scheme': [
          <Block.Plain
            key='0'
            style={{display: 'inline-block', padding: '20px'}}>
            <Back />
          </Block.Plain>,

          <Block.Plain key='1' style={{display: 'inline-block', padding: '20px'}}>
            <Close />
          </Block.Plain>,

          <Block.Plain key='2' style={{display: 'inline-block', padding: '20px'}}>
            <Hamburger />
          </Block.Plain>,

          <Block.Plain key='3' style={{display: 'inline-block', padding: '20px'}}>
            <Options />
          </Block.Plain>,

          <Block.Plain key='4' style={{display: 'inline-block', padding: '20px'}}>
            <Search />
          </Block.Plain>
        ],

        'With text': [
          <Block.Plain key='0' style={{padding: '20px'}}>
            <Back label='Back' />
          </Block.Plain>,

          <Block.Plain key='1' style={{padding: '20px'}}>
            <Select label='Select' />
          </Block.Plain>,

          <Block.Plain key='2' style={{padding: '20px'}}>
            <Close label='Close' color='gray' left />
          </Block.Plain>
        ],

        'Gray color scheme': [
          <Block.Plain key='0' style={{display: 'inline-block', padding: '20px'}}>
            <Back color='gray' />
          </Block.Plain>,

          <Block.Plain key='1' style={{display: 'inline-block', padding: '20px'}}>
            <Close color='gray' />
          </Block.Plain>,

          <Block.Plain key='2' style={{display: 'inline-block', padding: '20px'}}>
            <Hamburger color='gray' />
          </Block.Plain>,

          <Block.Plain key='3' style={{display: 'inline-block', padding: '20px'}}>
            <Options color='gray' />
          </Block.Plain>,

          <Block.Plain key='4' style={{display: 'inline-block', padding: '20px'}}>
            <Search color='gray' />
          </Block.Plain>
        ],

        'Inverse color scheme': [
          <Block.Plain key='0' blue style={{display: 'inline-block', padding: 20}}>
            <Back color='inverse' />
          </Block.Plain>,

          <Block.Plain key='1' blue style={{display: 'inline-block', padding: 20}}>
            <Close color='inverse' />
          </Block.Plain>,

          <Block.Plain key='2' blue style={{display: 'inline-block', padding: 20}}>
            <Hamburger color='inverse' />
          </Block.Plain>,

          <Block.Plain key='3' blue style={{display: 'inline-block', padding: 20}}>
            <Options color='inverse' />
          </Block.Plain>,

          <Block.Plain key='4' blue style={{display: 'inline-block', padding: 20}}>
            <Search color='inverse' />
          </Block.Plain>
        ]
      }
    }
  ]
}
