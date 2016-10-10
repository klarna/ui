import React from 'react'
import * as Button from '../Button'
import * as Dialog from '../Dialog'
import { Close } from '../IconButton'
import { Title, Paragraph, Subtitle } from '../Text'
import { MANUAL } from '../Showroom/variationTypes'

const Example = React.createClass({
  displayName: 'DialogExample',

  getInitialState () {
    return {
      open: false
    }
  },

  render () {
    const close = () => this.setState({ open: false })
    const open = () => this.setState({ open: true })

    return (
      <div>
        <Button.Primary onClick={open}>
          Show Dialog
        </Button.Primary>

        <Dialog.Overlay show={this.state.open}>
          <Dialog.Main>
            <Dialog.Icon>
              <Close onClick={close} />
            </Dialog.Icon>

            <Dialog.Content
              stickyFooter={true}
              footer={<Button.Primary
                onClick={close}
                style={{width: '100%'}}>
                Close the nice dialog
              </Button.Primary>}>
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
          </Dialog.Main>
        </Dialog.Overlay>
      </div>
    )
  }
})

export default {
  title: 'Dialog',
  icon: 'Dialog',

  examples: {
    require: 'import * as Dialog from \'@klarna/ui/Dialog\'',
    type: MANUAL,

    examples: {
      Regular: {
        live: <Example />,
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
