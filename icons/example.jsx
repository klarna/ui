import React from 'react'

import AccountActivated from '../icons/AccountActivated'
import AllSet from '../icons/AllSet'
import Arrow from '../icons/Arrow'
import Checkmark from '../icons/Checkmark'
import Done from '../icons/Done'
import Error from '../icons/Error'
import Details from '../icons/Details'
import Download from '../icons/Download'
import ExtendDate from '../icons/ExtendDate'
import Items from '../icons/Items'
import Letter from '../icons/Letter'
import Logout from '../icons/Logout'
import Mail from '../icons/Mail'
import NotFound from '../icons/NotFound'
import OpenLetter from '../icons/OpenLetter'
import PadLock from '../icons/PadLock'
import Password from '../icons/Password'
import Person from '../icons/Person'
import Phone from '../icons/Phone'
import Question from '../icons/Question'
import Cancel from '../icons/Cancel'
import Remind from '../icons/Remind'
import Time from '../icons/Time'
import SMS from '../icons/SMS'
import Warning from '../icons/Warning'
import Wrong from '../icons/Wrong'

import { Title, Subtitle, Paragraph } from '../Text'
import Code from '../Code'
import colors from '../icons/constants/colors'

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
    Cancel,
    Remind
  ]
}

export default function Icons () {
  return (
    <div style={{width: '740px'}}>
      <Paragraph margins>
        Each type of icon is designed for the size that it is displayed in. Resizing the icons is possible since they are SVG, but it's not recommended since they are drawn to have the line widths matching the line styles of the rest of the components.
      </Paragraph>

      <Title.Secondary color='blue' margins>Colors</Title.Secondary>
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

      <Title.Secondary color='blue' margins>Big icons</Title.Secondary>
      <Code>
        {icons.big.map((Icon) => <Icon key={Icon.name} />)}
      </Code>

      <Title.Secondary color='blue' margins>Tiny icons</Title.Secondary>
      <Code>
        {icons.tiny.map((Icon) => <Icon key={Icon.name} />)}
      </Code>
    </div>
  )
}
