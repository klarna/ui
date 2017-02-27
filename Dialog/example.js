import React from 'react'
import * as Button from '../Button'
import Backdrop from '../Backdrop'
import Dialog from '../Dialog'
import Footer from '../Footer'
import { Back, Close } from '../IconButton'
import * as Title from '../Title'
import * as Paragraph from '../Paragraph'
import * as Code from '../Code'
import Subtitle from '../Subtitle'
import { SHOWCASE } from '../Showroom/variationTypes'
import * as GettingStarted from '../Showroom/Page/icons/GettingStarted'

import * as palette from '../settings/palette'
import grid from '../settings/grid'

const firstExample = `<div
  style={{
    alignItems: 'center',
    display: 'flex',
    height: 600,
    justifyContent: 'center',
    position: 'relative',
    width: '100%'
  }}>
  <Backdrop />
  <Dialog smallPadding>
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
</div>`

const secondExample = `<div
  style={{
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: palette.GREY_LINES,
    flex: 1,
    height: 700,
    width: 400
  }}>
  <Dialog layout='mobile'>
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
</div>`

export default {
  title: 'Dialog',
  icon: 'Dialog',

  examples: {
    require: `import Dialog from '@klarna/ui/Dialog'`,
    type: SHOWCASE,

    example: <section>
      <Subtitle
        margins
        style={{marginBottom: grid(1)}}>
        Desktop
      </Subtitle>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: grid(600 / 5),
          justifyContent: 'center',
          marginBottom: grid(4),
          position: 'relative',
          width: '100%'
        }}>
        <Backdrop />
        <Dialog smallPadding>
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

      <Code.Block standalone>
        {firstExample}
      </Code.Block>

      <Subtitle
        margins
        style={{
          borderTopColor: palette.GREY_SELECTOR_LINES,
          borderTopWidth: grid(0.2),
          borderTopStyle: 'solid',
          paddingTop: grid(7),
          marginBottom: grid(1),
          marginTop: grid(8)
        }}>
        Mobile
      </Subtitle>
      <div
        style={{
          display: 'flex',
          width: '100%'
        }}>
        <div
          style={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES,
            flex: 1,
            height: 700,
            width: 400
          }}>
          <Dialog layout='mobile'>
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

        <Code.Block
          style={{
            flex: 1,
            marginLeft: grid(4),
            maxWidth: 'calc(100% - 420px)'
          }}>
          {secondExample}
        </Code.Block>
      </div>
      <Subtitle
        margins
        style={{
          borderTopColor: palette.GREY_SELECTOR_LINES,
          borderTopWidth: grid(0.2),
          borderTopStyle: 'solid',
          paddingTop: grid(7),
          marginBottom: grid(1),
          marginTop: grid(8)
        }}>
        Narrow
      </Subtitle>
      <div
        style={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: palette.GREY_LINES,
          height: 640,
          width: 280
        }}>
        <Dialog layout='narrow'>
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
    </section>
  }
}
