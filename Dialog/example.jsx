import React, { Component } from 'react'
import Button from '../Button'
import * as Dialog from '../Dialog'
import { CloseButton } from '../IconButton'
import { Title, Subtitle, Paragraph } from '../Text'

export default class Dialogs extends Component {
  constructor () {
    super()

    this.state = {
      dialog: {
        open: false
      }
    }
  }

  render () {
    return (
      <div>
        <Paragraph margins>
          Dialogs are full screen. Please click the button to show it.
        </Paragraph>

        <Button onClick={() => this.setState({
          dialog: {
            open: true
          }
        })}>
          Show Dialog
        </Button>

        <Dialog.Overlay show={this.state.dialog.open}>
          <Dialog.Main>
            <Dialog.Icon>
              <CloseButton
                onClick={() => this.setState({ dialog: { open: false } })}
              />
            </Dialog.Icon>

            <Dialog.Content>
              <Title.Primary margins>The title is primary</Title.Primary>
              <Subtitle margins>Just trying to fill up space</Subtitle>
              <Paragraph design='secondary' margins>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</Paragraph>
            </Dialog.Content>

            <Dialog.Footer>
              <Button onClick={() => this.setState({ dialog: { open: false } })} >Close the nice dialog</Button>
            </Dialog.Footer>
          </Dialog.Main>
        </Dialog.Overlay>
      </div>
    )
  }
}
