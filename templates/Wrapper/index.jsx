import React from 'react'
import * as Block from '../../Block'
import * as Dialog from '../../Dialog'
import { Close } from '../../IconButton'

export const archetypes = [
  'dialog'
]

export default function Wrapper ({children, ...props}) {
  const {onClose} = props

  return (
    <Dialog.Overlay show>
      <Dialog.Main>
        <Dialog.Icon>
          <Close
            onClick={onClose}
            color='gray'
          />
        </Dialog.Icon>

        <Dialog.Content>
          {children}
        </Dialog.Content>
      </Dialog.Main>
    </Dialog.Overlay>
  )
}
