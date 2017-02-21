import React from 'react'
import * as Button from '../Button'
import Dialog from '../Dialog'
import Footer from '../Footer'
import { Back, Close } from '../IconButton'
import * as Title from '../Title'
import * as Paragraph from '../Paragraph'
import { LIVE_WIDE } from '../Showroom/variationTypes'
import * as GettingStarted from '../Showroom/Page/icons/GettingStarted'

import * as palette from '../settings/palette'
import grid from '../settings/grid'

export default {
  title: 'Dialog',
  icon: 'Dialog',

  examples: {
    require: `import Dialog from '@klarna/ui/Dialog'`,
    title: 'Dialog',
    type: LIVE_WIDE,

    examples: {
      Regular: <Dialog
        styles={{
          base: {
            dialog: {
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: palette.GREY_LINES,
              width: '100%'
            }
          }
        }}>
        <Back topLeft label='BACK' />
        <Close topRight label='CLOSE' />
        <div style={{textAlign: 'center', width: '100%'}}>
          <GettingStarted.Implementation />
          <Title.Primary style={{paddingTop: grid(5.2)}}>
            Hello Dialog
          </Title.Primary>
          <Paragraph.Secondary style={{paddingTop: grid(1.4)}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph.Secondary>
          <Button.Primary style={{marginTop: grid(6.2)}}>
            Complete this step
          </Button.Primary>
        </div>
      </Dialog>
    }
  }
}
