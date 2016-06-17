import React from 'react'

import AccountActivated from '../components/icons/AccountActivated'
import AllSet from '../components/icons/AllSet'
import Arrow from '../components/icons/Arrow'
import Checkmark from '../components/icons/Checkmark'
import Done from '../components/icons/Done'
import Error from '../components/icons/Error'
import Details from '../components/icons/Details'
import Download from '../components/icons/Download'
import ExtendDate from '../components/icons/ExtendDate'
import Items from '../components/icons/Items'
import Letter from '../components/icons/Letter'
import Logout from '../components/icons/Logout'
import Mail from '../components/icons/Mail'
import NotFound from '../components/icons/NotFound'
import OpenLetter from '../components/icons/OpenLetter'
import PadLock from '../components/icons/PadLock'
import Password from '../components/icons/Password'
import Person from '../components/icons/Person'
import Phone from '../components/icons/Phone'
import Question from '../components/icons/Question'
import Remind from '../components/icons/Remind'
import Time from '../components/icons/Time'
import SMS from '../components/icons/SMS'
import Warning from '../components/icons/Warning'
import Wrong from '../components/icons/Wrong'

import { PrimaryTitle, SecondaryTitle, Paragraph } from '../components/Text'
import Code from './Code'
import { colors } from '../components/icons/Icon'

import newColorNames from '../components/icons/constants/colors'

const icons = {
  tiny: [
    Arrow,
    Checkmark,
    Details,
    Download,
    ExtendDate,
    Items,
    Logout,
    Mail,
    Password,
    Person,
    Phone,
    Question,
    Remind
  ]
}

const migratedIcons = {
  big: [
    AccountActivated,
    AllSet,
    Done,
    Error,
    Letter,
    NotFound,
    OpenLetter,
    PadLock,
    SMS,
    Time,
    Warning,
    Wrong
  ],

  tiny: [
    Arrow
  ]
}

const colorNames = Object.keys(colors)
// remove white from list
colorNames.pop()

export default function Icons () {
  return (
    <div style={{width: '740px'}}>
      <Paragraph defaultMargins>
        Each type of icon is designed for the size that it is displayed in. Resizing the icons is possible since they are SVG, but it's not recommended since they are drawn to have the line widths matching the line styles of the rest of the components.
      </Paragraph>

      <PrimaryTitle color='blue' defaultMargins>Big icons</PrimaryTitle>
      {migratedIcons.big.map((Icon) => (
        <div key={Icon.name}>
          <SecondaryTitle defaultMargins>
            {Icon.name}
          </SecondaryTitle>

          <Code>
            {newColorNames.map((name) =>
                <Icon
                  key={`${Icon.name}-${name}`}
                  color={name}
                  style={name === 'inverse'
                    ? { background: '#0074c8' }
                    : undefined
                  }
                />
            )}
          </Code>
        </div>
      ))}

      <PrimaryTitle color='blue' defaultMargins>Tiny icons</PrimaryTitle>
      {migratedIcons.tiny.map((Icon) => (
        <div key={Icon.name}>
          <SecondaryTitle defaultMargins>
            {Icon.name}
          </SecondaryTitle>

          <Code>
            {newColorNames.map((name) =>
                <Icon
                  key={`${Icon.name}-${name}`}
                  color={name}
                  style={name === 'inverse'
                    ? { background: '#0074c8' }
                    : undefined
                  }
                />
            )}
          </Code>
        </div>
      ))}

      {
        Object.keys(icons).map((size) => (
          <div key={size}>
            <PrimaryTitle small blue>{size}</PrimaryTitle>
            {
              icons[size].map((Icon) => (
                <div key={Icon.displayName}>
                  <SecondaryTitle>{Icon.displayName}</SecondaryTitle>
                  <Code>
                    {
                      colorNames.concat(newColorNames).map((color) => (
                        <Icon color={color} key={color} />
                      ))
                    }
                    <Icon color='inverse' style={{background: '#0074c8'}} />
                    <Icon color='white' style={{background: '#0074c8'}} />
                  </Code>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}
