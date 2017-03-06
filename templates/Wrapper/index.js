import React, {PropTypes} from 'react'
import Backdrop from '../../Backdrop'
import Dialog from '../../Dialog'
import { Back, Close } from '../../IconButton'

export default function Wrapper ({
  children,
  id,
  layout,
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

  switch (layout) {
    case 'desktop':
      return <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%'
        }}>
        <Backdrop />
        <Dialog id={id} {...props}>
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
      </div>

    case 'mobile':
      return <div
        style={{
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%'
        }}>
        <Dialog
          fixed
          id={id}
          {...props}>
          {onBack && <Back
            onClick={onBack}
            color='gray'
            id={ids.backButton}
            topLeft
            largePadding
          />}
          {onClose && <Close
            onClick={onClose}
            color='gray'
            id={ids.closeButton}
            topRight
            largePadding
          />}
          {children}
        </Dialog>
      </div>

    case 'narrow':
      return <div
        style={{
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%'
        }}>
        <Dialog
          fixed
          smallPadding
          id={id}
          {...props}>
          {onBack && <Back
            onClick={onBack}
            color='gray'
            id={ids.backButton}
            topLeft
            largePadding
          />}
          {onClose && <Close
            onClick={onClose}
            color='gray'
            id={ids.closeButton}
            topRight
            largePadding
          />}
          {children}
        </Dialog>
      </div>
  }
}

Wrapper.propTypes = {
  layout: PropTypes.oneOf([
    'desktop',
    'mobile',
    'narrow'
  ]).isRequired
}
