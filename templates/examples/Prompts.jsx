import React from 'react'
import SingleInputPrompt from '../SingleInputPrompt'
import DemoIcon from './DemoIcon'
import { TEMPLATE } from '../../Showroom/variationTypes'

export default {
  title: 'Prompts',

  variations: [
    {
      title: 'SingleInputPrompt',
      require: 'import SingleInputPrompt from \'@klarna/ui/templates/SingleInputPrompt\'',
      type: TEMPLATE,

      examples: {
        Regular: {
          inline: <SingleInputPrompt
            focus
            illustration={<DemoIcon />}
            title='Welcome to the site'
            summary='What is your name fellow traveler?'
            accept='Continue'
            legal='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
            label='Name'
            onChange={(e) => console.log(e.target.value)}
            onAccept={() => console.log('accept')}
            value='Penelope Clearwater'
          />
        },

        Uncontrolled: {
          inline: <SingleInputPrompt
            illustration={<DemoIcon />}
            title='Welcome to the site'
            summary='What is your name fellow traveler?'
            accept='Continue'
            legal='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
            label='Name'
            onChange={(e) => console.log(e.target.value)}
            onAccept={() => console.log('accept')}
            defaultValue='Percy Weasley'
          />
        }
      }
    }
    // ,
    //
    // {
    //   title: 'CompactFormPrompt',
    //   require: 'import CompactFormPrompt from \'@klarna/ui/templates/CompactFormPrompt\'',
    //   type: TEMPLATE,
    //
    //   // NOTE: How exactly should I provide the "Form" like API?
    //   examples: {
    //     Regular: {
    //       inline: <CompactFormPrompt
    //         focus
    //         illustration={<DemoIcon />}
    //         title='Welcome to the site'
    //         summary='What is your name fellow traveler?'
    //         accept='Continue'
    //         legal='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
    //         label='Name'
    //         onChange={(e) => console.log(e.target.value)}
    //         onAccept={() => console.log('accept')}
    //         value='Penelope Clearwater'
    //       />
    //     }
    //   }
    // }
  ]
}
