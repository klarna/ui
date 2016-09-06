import React from 'react'
import * as Button from '../Button'
import * as Dialog from '../Dialog'
import { Close } from '../IconButton'
import { Title, Paragraph, Subtitle } from '../Text'

const Example = React.createClass({
  displayName: 'Dialog',

  getInitialState () {
    return {
      dialog: {
        open: false
      }
    }
  },

  render () {
    const close = () => this.setState({ dialog: { open: false } })
    const open = () => this.setState({ dialog: { open: true } })

    return (
      <div>
        <Button.Primary onClick={open}>
          Show Dialog
        </Button.Primary>

        <Dialog.Overlay show={this.state.dialog.open}>
          <Dialog.Main>
            <Dialog.Icon>
              <Close onClick={close} />
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
                onClick={close}
                style={{width: '100%'}}>
                Close the nice dialog
              </Button.Primary>
            </Dialog.Footer>
          </Dialog.Main>
        </Dialog.Overlay>
      </div>
    )
  }
})

export default {
  title: 'Dialog',
  icon: 'Dialog',
  variations: [{
    title: 'Dialog',
    require: `import * as Dialog from '@klarna/ui/Dialog'`,
    Regular: {
      example: (
        <Example />
      ),
      code: `<div>
  <Button.Primary onClick={open}>
    Show Dialog
  </Button.Primary>

  <Dialog.Overlay show={this.state.dialog.open}>
    <Dialog.Main>
      <Dialog.Icon>
        <Close onClick={close} />
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
          onClick={close}
          style={{width: '100%'}}>
          Close the nice dialog
        </Button.Primary>
      </Dialog.Footer>
    </Dialog.Main>
  </Dialog.Overlay>
</div>`
    }
  }]
}
