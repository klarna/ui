import React from 'react'
import DialogExample from './examples/DialogExample'
import { MANUAL } from '../Showroom/variationTypes'

export default {
  title: 'Dialog',
  icon: 'Dialog',

  examples: {
    require: `import * as Dialog from '@klarna/ui/Dialog'
import {Close} from '@klarna/ui/IconButton'
import * as Title from '@klarna/ui/Title'
import Subtitle from '@klarna/ui/Subtitle'
import * as Paragraph from '@klarna/ui/Paragraph'
import * as Button from '@klarna/ui/Button'`,
    type: MANUAL,

    examples: {
      Regular: {
        live: <DialogExample />,
        code: `<Dialog.Overlay show>
  <Dialog.Main>
    <Dialog.Icon>
      <Close />
    </Dialog.Icon>

    <Dialog.Content>
      <Title.Primary margins>
        The title is primary
      </Title.Primary>
      <Subtitle margins>
        Just trying to fill up space
      </Subtitle>
      <Paragraph.Secondary margins>
        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
      </Paragraph.Secondary>
    </Dialog.Content>

    <Dialog.Footer>
      <Button.Primary
        style={{width: '100%'}}>
        Close the nice dialog
      </Button.Primary>
    </Dialog.Footer>
  </Dialog.Main>
</Dialog.Overlay>`
      }
    }
  }
}
