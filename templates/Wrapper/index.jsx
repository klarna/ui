import React from 'react'
import * as Dialog from '../../Dialog'
import { Back, Close } from '../../IconButton'

export default function Wrapper ({
  className,
  children,
  onBack,
  onClose,
  ...props
}) {
  return (
    <Dialog.Overlay
      className={className}
      show
      {...props}>
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

        {children}
      </Dialog.Main>
    </Dialog.Overlay>
  )
}
