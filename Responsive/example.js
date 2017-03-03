import React from 'react'
import Responsive from '../Responsive'
import Dialog from '../Dialog'
import {Back, Close} from '../IconButton'
import {SHOWCASE} from '../Showroom/variationTypes'

/*
 *  TODO: Desired features:
 *  - Show that the layout can be set up manually (example or variation with that)
 *  - Show that the layout can be derived from a lambda that returns the layout upon receiving the window size information
 *  - Show all the components that are responsive actually responding to the different layouts, capturing them from context
 */

export default {
  title: 'Responsive',

  examples: {
    title: 'Layout examples',
    type: SHOWCASE,

    example: <section>
      <Responsive layout='desktop'>
        <div
          style={{
            height: 600,
            width: '100%'
          }}>
          <Dialog>
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
        </div>
      </Responsive>
    </section>
  }
}
