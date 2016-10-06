import React from 'react'
import * as Dialog from '../../Dialog'
import { Close } from '../../IconButton'

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
        {children}
      </Dialog.Main>
    </Dialog.Overlay>
  )
}
