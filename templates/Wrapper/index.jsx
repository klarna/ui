import React from 'react'
import * as Dialog from '../../Dialog'
import { Back, Close } from '../../IconButton'

export default function Wrapper ({
  children,
  onBack,
  onClose,
  ...props
}) {
  return (
    <Dialog.Overlay show>
      <Dialog.Main>
        {onBack && <Dialog.Icon left>
          <Back
            onClick={onBack}
            color='gray'
          />
        </Dialog.Icon>}

        {onClose && <Dialog.Icon>
          <Close
            onClick={onClose}
            color='gray'
          />
        </Dialog.Icon>}

        <Dialog.Content>
          {children}
        </Dialog.Content>
      </Dialog.Main>
    </Dialog.Overlay>
  )
}
