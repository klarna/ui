import React from 'react'
import { compose, join, map, uniq } from 'ramda'
import { LIVE } from '../Showroom/variationTypes'

import AccountActivated from '../icons/AccountActivated'
import AllSet from '../icons/AllSet'
import Bank from '../icons/Bank'
import Calendar from '../icons/Calendar'
import Card from '../icons/Card'
import * as Chevron from '../icons/Chevron'
import Check from '../icons/Check'
import Checkmark from '../icons/Checkmark'
import Close from '../icons/Close'
import Cross from '../icons/Cross'
import Done from '../icons/Done'
import Error from '../icons/Error'
import Details from '../icons/Details'
import Download from '../icons/Download'
import ExtendDate from '../icons/ExtendDate'
import Items from '../icons/Items'
import Letter from '../icons/Letter'
import Lock from '../icons/Lock'
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
import Search from '../icons/Search'
import SMS from '../icons/SMS'
import Warning from '../icons/Warning'
import Wrong from '../icons/Wrong'
import Add from '../icons/Add'
import colors from '../icons/constants/colors'
import name from '../lib/name'

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
    Bank,
    Card,
    Calendar,
    Cancel,
    Check,
    Chevron.Left,
    Chevron.Right,
    Chevron.Down,
    Chevron.Up,
    Checkmark,
    Close,
    Add,
    Cross,
    Details,
    Download,
    ExtendDate,
    Items,
    Lock,
    Logout,
    Mail,
    Password,
    Person,
    Phone,
    Question,
    Remind,
    Search
  ]
}

export default {
  title: 'Icons',
  icon: 'Icon',

  variations: [
    {
      title: 'Big',
      require: compose(
        join('\n'),
        uniq,
        map((component) => `import ${name(component).split('.')[0]} from '@klarna/ui/icons/${name(component).split('.')[0]}'`)
      )(icons.big),
      type: LIVE,

      examples: {
        Colors: colors.map((name) => <AllSet
          key={`${name}`}
          color={name}
          style={name === 'inverse'
            ? { background: '#0074c8' }
            : undefined
          }
        />),

        Icons: icons.big.map((Icon) => <Icon key={Icon.name} />)
      }
    },

    {
      title: 'Small',
      require: compose(
        join('\n'),
        uniq,
        map((component) => `import ${name(component).split('.')[0]} from '@klarna/ui/icons/${name(component).split('.')[0]}'`)
      )(icons.tiny),
      type: LIVE,

      examples: {
        Colors: colors.map((name) => <Person
          key={`${name}`}
          color={name}
          style={name === 'inverse'
            ? { background: '#0074c8' }
            : undefined
          }
        />),

        Small: icons.tiny.map((Icon) => <Icon key={Icon.name} />)
      }
    }
  ]
}
