import React from 'react'
import Code from './Code'
import Button from '../components/Button'
import Dialog from '../components/Dialog'
import { PrimaryTitle, Subtitle, Paragraph } from '../components/Text'

export default function Dialogs () {
  return (
    <div>
      <PrimaryTitle small blue>Long viewport</PrimaryTitle>
      <Paragraph>
        For example, an iPhone 6
      </Paragraph>

      <Code width={395}>
        <div style={{height: 667, width: 375}}>
          <Dialog>
            <Dialog.Icon>
              X
            </Dialog.Icon>

            <Dialog.Content>
              <PrimaryTitle>The title is primary</PrimaryTitle>
              <Subtitle>Just trying to fill up space</Subtitle>
              <Paragraph design='secondary'>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</Paragraph>
            </Dialog.Content>

            <Dialog.Footer>
              <Button>Make dialogs great again</Button>
            </Dialog.Footer>
          </Dialog>
        </div>
      </Code>

      <PrimaryTitle small blue>Small viewport</PrimaryTitle>
      <Paragraph>
        For example, an iPhone 4 in landscape
      </Paragraph>

      <Code width={500}>
        <div style={{overflow: 'scroll', height: 320, width: 480}}>
          <Dialog>
            <Dialog.Content>
              <PrimaryTitle>The title is primary</PrimaryTitle>
              <Subtitle>Just trying to fill up space</Subtitle>
              <Paragraph design='secondary'>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</Paragraph>

              <Paragraph>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</Paragraph>
            </Dialog.Content>

            <Dialog.Footer>
              <Button size='small'>Make dialogs great again</Button>
            </Dialog.Footer>
          </Dialog>
        </div>
      </Code>
    </div>
  )
}
