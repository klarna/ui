import React, { Component } from 'react'
import Button from '../components/Button'
import Dialog from '../components/Dialog'
import { CloseButton } from '../components/IconButton'
import { PrimaryTitle, Subtitle, Paragraph } from '../components/Text'

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
          <Dialog>
            <Dialog.Icon>
              <CloseButton
                onClick={() => this.setState({ dialog: { open: false } })}
              />
            </Dialog.Icon>

            <Dialog.Content>
              <PrimaryTitle margins>The title is primary</PrimaryTitle>
              <Subtitle margins>Just trying to fill up space</Subtitle>
              <Paragraph design='secondary' margins>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</Paragraph>
            </Dialog.Content>

            <Dialog.Footer>
              <Button onClick={() => this.setState({ dialog: { open: false } })} >Close the nice dialog</Button>
            </Dialog.Footer>
          </Dialog>
        </Dialog.Overlay>
      </div>
    )
  }
}
