import React from 'react'
import * as Dialog from '../../Dialog'
import { Back, Close } from '../../IconButton'

export default function Wrapper ({
  className,
  children,
  id,
  onBack,
  onClose,
  ...props
}) {
  const ids = id
    ? {
      closeDialogIcon: `${id}__close-dialog-icon`,
      closeButton: `${id}__close-button`,
      backDialogIcon: `${id}__back-dialog-icon`,
      backButton: `${id}__back-button`,
      main: `${id}__main`
    }
    : {}
  return (
    <Dialog.Overlay
      className={className}
      id={id}
      show
      {...props}>
      <Dialog.Main id={ids.main}>
        {onBack && <Dialog.Icon id={ids.backDialogIcon} left>
          <Back
            onClick={onBack}
            color='gray'
            id={ids.backButton}
          />
        </Dialog.Icon>}

        {onClose && <Dialog.Icon id={ids.closeDialogIcon}>
          <Close
            onClick={onClose}
            color='gray'
            id={ids.closeButton}
          />
        </Dialog.Icon>}
        {children}
      </Dialog.Main>
    </Dialog.Overlay>
  )
}
