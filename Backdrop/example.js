import React from 'react'
import * as Block from '../Block'
import Backdrop from '../Backdrop'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Backdrop',

  examples: {
    require: 'import Backdrop from \'@klarna/ui/Backdrop\'',
    type: LIVE,

    examples: {
      Regular: <Block.Plain style={{width: 300, height: 500}}>
        <Backdrop />
      </Block.Plain>
    }
  }
}
