import React from 'react'
import Dialog from '../../Dialog'
import { Back, Close } from '../../IconButton'

export default function Wrapper ({
  className,
  children,
  onBack,
  onClose,
  ...props
}) {
  return <Dialog {...props}>
    {onBack && <Back
      onClick={onBack}
      color='gray'
      topLeft
    />}
    {onClose && <Close
      onClick={onClose}
      color='gray'
      topRight
    />}
    {children}
  </Dialog>
}
