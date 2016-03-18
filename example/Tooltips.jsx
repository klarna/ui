import React from 'react'
import Tooltip from '../components/Tooltip'
import Code from './Code'

export default function Tooltips () {
  return (
    <div>
      <h5>Simple</h5>
      <Code>
        <Tooltip>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
      </Code>

      <h5>Small</h5>
      <Code>
        <Tooltip>
          Lorem Ipsum
        </Tooltip>
      </Code>

      <h5>Arrows</h5>
      <Code>
        <Tooltip arrow='top-left'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='top'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='top-right'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='right-top'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='right'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='right-bottom'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='bottom-right'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='bottom'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='bottom-left'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='left-bottom'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='left'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip arrow='left-top'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
      </Code>
    </div>
  )
}
