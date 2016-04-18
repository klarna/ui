import React from 'react'
import Code from './Code'
import Button from '../components/Button'
import { Dialog, DialogContent, DialogFooter } from '../components/Dialog'
import { PrimaryTitle, SecondaryTitle, Subtitle, Paragraph, Label, TextLabel } from '../components/Text'
import Link from '../components/Link'

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
            <DialogContent>
              <PrimaryTitle>The title is primary</PrimaryTitle>
              <Subtitle>Just trying to fill up space</Subtitle>
              <Paragraph design='secondary'>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</Paragraph>
            </DialogContent>

            <DialogFooter>
              <Button>Make dialogs great again</Button>
            </DialogFooter>
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
            <DialogContent>
              <PrimaryTitle>The title is primary</PrimaryTitle>
              <Subtitle>Just trying to fill up space</Subtitle>
              <Paragraph design='secondary'>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</Paragraph>

              <Paragraph>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</Paragraph>
            </DialogContent>

            <DialogFooter>
              <Button size='small'>Make dialogs great again</Button>
            </DialogFooter>
          </Dialog>
        </div>
      </Code>
    </div>
  )
}
