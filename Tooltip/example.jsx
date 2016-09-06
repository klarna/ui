import React from 'react'
import Tooltip from '../Tooltip'

export default {
  title: 'Tooltip',
  icon: 'Tooltip',
  variations: [{
    title: 'Tooltip',
    require: 'import Tooltip from \'@klarna/ui/Tooltip\'',
    'Top left': (
      <Tooltip arrow='top-left'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    Top: (
      <Tooltip arrow='top'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    'Top right': (
      <Tooltip arrow='top-right'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    'Right top': (
      <Tooltip arrow='right-top'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    Right: (
      <Tooltip arrow='right'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    'Right bottom': (
      <Tooltip arrow='right-bottom'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    'Bottom right': (
      <Tooltip arrow='bottom-right'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    Bottom: (
      <Tooltip arrow='bottom'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    'Bottom left': (
      <Tooltip arrow='bottom-left'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    'Left bottom': (
      <Tooltip arrow='left-bottom'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    Left: (
      <Tooltip arrow='left'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    'Left top': (
      <Tooltip arrow='left-top'>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),

    Simple: (
      <Tooltip>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    ),
    Inverse: (
      <Tooltip inverse>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Tooltip>
    )
  }]
}
