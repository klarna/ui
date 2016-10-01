import React from 'react'
import Label, { designs } from '../Label'
import * as Block from '../Block'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Label',
  icon: 'Label',

  examples: {
    require: 'import Label from \'@klarna/ui/Label\'',
    type: LIVE,

    examples: {
      Regular: designs.map((design) => <Label
        key={design}
        design={design}
        style={{margin: '5px'}}>
        {design}
      </Label>),

      Outlined: designs.map((design) => <Label
        outline
        key={`outline-${design}`}
        design={design}
        style={{margin: '5px'}}>
        {design}
      </Label>),

      Inverted: [
        <Block.Plain blue>
          <Label inverted style={{margin: '5px'}}>
            inverted
          </Label>

          <Label inverted outline style={{margin: '5px'}}>
            inverted outline
          </Label>
        </Block.Plain>
      ]
    }
  }
}
