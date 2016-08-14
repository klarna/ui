import React, { Component } from 'react'
import * as Button from '../Button'
import * as Dialog from '../Dialog'
import { Close } from '../IconButton'
import { Title, Subtitle, Paragraph } from '../Text'

const Examples = React.createClass({
  displayName: 'Dialogs',

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
      <Paragraph margins>
      Dialogs are full screen. Please click the button to show it.
      </Paragraph>

      <Button.Primary onClick={open}>
      Show Dialog
      </Button.Primary>

      <Dialog.Overlay show={this.state.dialog.open}>
      <Dialog.Main>
      <Dialog.Icon>
      <Close
      onClick={close}
      />
      </Dialog.Icon>

      <Dialog.Content>
      <Title.Primary margins>The title is primary</Title.Primary>
      <Subtitle margins>Just trying to fill up space</Subtitle>
      <Paragraph design='secondary' margins>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</Paragraph>
      </Dialog.Content>

      <Dialog.Footer>
      <Button.Primary onClick={close}>
      Close the nice dialog
      </Button.Primary>
      </Dialog.Footer>
      </Dialog.Main>
      </Dialog.Overlay>
      </div>
    )
  }
})

export default function Dialogs () {
  return <Examples />
}
