import React from 'react'
import { LIVE_WIDE } from '../Showroom/variationTypes'
import Dialog from '../Dialog'
import { Back, Close } from '../IconButton'
import * as Title from '../Title'

export default {
  title: 'Dialog',
  icon: 'Dialog',

  examples: {
    require: `import Dialog from '@klarna/ui/Dialog'`,
    title: 'Dialog',
    type: LIVE_WIDE,

    examples: {
      Regular: <Dialog styles={{ base: { dialog: {width: '100%'} } }}>
        <Back topLeft label='BACK' />
        <Close topRight label='CLOSE' />
        <Title.Primary>Hello Dialog</Title.Primary>
      </Dialog>
    }
  }
}
