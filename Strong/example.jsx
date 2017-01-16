import React from 'react'
import Strong from '../Strong'
import * as Paragraph from '../Paragraph'
import {LIVE} from '../Showroom/variationTypes'

export default {
  title: 'Strong',

  examples: {
    require: 'import Strong from \'@klarna/ui/Strong\'',
    type: LIVE,

    examples: {
      Regular: <Paragraph.Primary>Hello <Strong>World</Strong>!</Paragraph.Primary>
    }
  }
}
