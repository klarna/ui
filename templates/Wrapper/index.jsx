import React from 'react'
import Dialog from '../../Dialog'
import { Back, Close } from '../../IconButton'

export default function Wrapper ({
  children,
  id,
  onBack,
  onClose,
  ...props
}) {
  const ids = id
    ? {
      closeButton: `${id}__close-button`,
      backButton: `${id}__back-button`
    }
    : {}

  return <Dialog id={id} {...props}>
    {onBack && <Back
      onClick={onBack}
      color='gray'
      id={ids.backButton}
      topLeft
    />}
    {onClose && <Close
      onClick={onClose}
      color='gray'
      id={ids.closeButton}
      topRight
    />}
    {children}
  </Dialog>
}
