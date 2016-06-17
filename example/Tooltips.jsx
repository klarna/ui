import React from 'react'
import Tooltip from '../components/Tooltip'
import { SecondaryTitle } from '../components/Text'
import Code from './Code'

export default function Tooltips () {
  return (
    <div>
      <SecondaryTitle margins color='blue'>Simple</SecondaryTitle>
      <Code>
        <Tooltip>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
      </Code>

      <SecondaryTitle margins color='blue'>Small</SecondaryTitle>
      <Code>
        <Tooltip>
          Lorem Ipsum
        </Tooltip>
      </Code>

      <SecondaryTitle margins color='blue'>Arrows</SecondaryTitle>
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

      <SecondaryTitle margins color='blue'>Simple with border</SecondaryTitle>
      <Code>
        <Tooltip border>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
      </Code>

      <SecondaryTitle margins color='blue'>Small</SecondaryTitle>
      <Code>
        <Tooltip border>
          Lorem Ipsum
        </Tooltip>
      </Code>

      <SecondaryTitle margins color='blue'>Arrows</SecondaryTitle>
      <Code>
        <Tooltip border arrow='top-left'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='top'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='top-right'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='right-top'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='right'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='right-bottom'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='bottom-right'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='bottom'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='bottom-left'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='left-bottom'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='left'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
        <hr />
        <Tooltip border arrow='left-top'>
          Lorem Ipsum is simply dummy text of the printing industry.
        </Tooltip>
      </Code>
    </div>
  )
}
