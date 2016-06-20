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

import { SecondaryTitle, Subtitle, Paragraph } from '../components/Text'
import Code from './Code'
import colors from '../components/icons/constants/colors'

const icons = {
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

export default function Icons () {
  return (
    <div style={{width: '740px'}}>
      <Paragraph margins>
        Each type of icon is designed for the size that it is displayed in. Resizing the icons is possible since they are SVG, but it's not recommended since they are drawn to have the line widths matching the line styles of the rest of the components.
      </Paragraph>

      <SecondaryTitle color='blue' margins>Colors</SecondaryTitle>
      <Subtitle margins>Big</Subtitle>
      <Code>
        {colors.map((name) =>
          <AllSet
            key={`${name}`}
            color={name}
            style={name === 'inverse'
              ? { background: '#0074c8' }
              : undefined
            }
          />
        )}
      </Code>

      <Subtitle margins>Tiny</Subtitle>
      <Code>
        {colors.map((name) =>
          <Person
            key={`${name}`}
            color={name}
            style={name === 'inverse'
              ? { background: '#0074c8' }
              : undefined
            }
          />
        )}
      </Code>

      <SecondaryTitle color='blue' margins>Big icons</SecondaryTitle>
      <Code>
        {icons.big.map((Icon) => <Icon key={Icon.name} />)}
      </Code>

      <SecondaryTitle color='blue' margins>Tiny icons</SecondaryTitle>
      <Code>
        {icons.tiny.map((Icon) => <Icon key={Icon.name} />)}
      </Code>
    </div>
  )
}
