import React, {PropTypes} from 'react'
import {StaggeredMotion, spring} from 'react-motion'
import Backdrop from '../../Backdrop'
import Dialog from '../../Dialog'
import { Back, Close } from '../../IconButton'

export default function Wrapper ({
  children,
  id,
  layout,
  onBack,
  onClose,
  visible,
  ...props
}) {
  const ids = id
    ? {
      closeButton: `${id}__close-button`,
      backButton: `${id}__back-button`
    }
    : {}

  return <StaggeredMotion
    defaultStyles={[
      {everythingOpacity: visible ? 1 : 0},
      {contentOpacity: visible ? 1 : 0}
    ]}
    styles={previouslyInterpolatedStyles => previouslyInterpolatedStyles.map((_, index) => {
      switch (index) {
        case 0:
          return {
            everythingOpacity: spring(visible ? 1 : 0)
          }

        case 1:
          return {
            contentOpacity: spring(
              previouslyInterpolatedStyles[0].everythingOpacity === 1
                ? 1
                : 0
            )
          }
      }
    })}>
    {interpolatingStyles => (() => {
      switch (layout) {
        case 'desktop':
          return <div
            style={{
              alignItems: 'center',
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              left: 0,
              opacity: interpolatingStyles[0].everythingOpacity,
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
              opacity: interpolatingStyles[0].everythingOpacity,
              position: 'absolute',
              top: 0,
              width: '100%'
            }}>
            <Dialog
              fixed
              id={id}
              {...props}>
              <div
                style={{
                  opacity: interpolatingStyles[1].contentOpacity
                }}>
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
              </div>
            </Dialog>
          </div>

        case 'narrow':
          return <div
            style={{
              height: '100%',
              left: 0,
              opacity: interpolatingStyles[0].everythingOpacity,
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
    })()}
  </StaggeredMotion>

}

Wrapper.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  layout: PropTypes.oneOf([
    'desktop',
    'mobile',
    'narrow'
  ]).isRequired,
  onBack: PropTypes.func,
  onClose: PropTypes.func,
  visible: PropTypes.bool
}
