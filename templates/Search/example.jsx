import React from 'react'
import Search from './'
import * as Dialog from '../../Dialog'
import { Close } from '../../IconButton'

export default {
  title: 'Search',
  variations: [{
    title: 'Search Dialog',
    require: 'import Search from \'@klarna/ui/templates/Search\'',

    Regular: [
      <Dialog.Overlay show>
        <Dialog.Main>
          <Dialog.Icon>
            <Close color='gray' />
          </Dialog.Icon>

          <Dialog.Content>
            <Search
              labels={{
                title: 'Welcome to the site',
                summary: 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
                accept: 'Continue',
                cancel: 'Go back'
              }}
              onAccept={() => console.log('accept')}
              onCancel={() => console.log('cancel')}
            />
          </Dialog.Content>
        </Dialog.Main>
      </Dialog.Overlay>
    ]
  }]
}
