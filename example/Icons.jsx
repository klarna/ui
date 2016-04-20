import React from 'react'

import AccountActivated from '../components/icons/AccountActivated'
import AllSet from '../components/icons/AllSet'
import Arrow from '../components/icons/Arrow'
import Back from '../components/icons/Back'
import Checkmark from '../components/icons/Checkmark'
import Close from '../components/icons/Close'
import Done from '../components/icons/Done'
import Error from '../components/icons/Error'
import Details from '../components/icons/Details'
import Download from '../components/icons/Download'
import ExtendDate from '../components/icons/ExtendDate'
import Hamburger from '../components/icons/Hamburger'
import Items from '../components/icons/Items'
import Letter from '../components/icons/Letter'
import Logout from '../components/icons/Logout'
import Mail from '../components/icons/Mail'
import NotFound from '../components/icons/NotFound'
import OpenLetter from '../components/icons/OpenLetter'
import Options from '../components/icons/Options'
import Password from '../components/icons/Password'
import Person from '../components/icons/Person'
import Phone from '../components/icons/Phone'
import Question from '../components/icons/Question'
import Remind from '../components/icons/Remind'
import Time from '../components/icons/Time'
import SMS from '../components/icons/SMS'
import Warning from '../components/icons/Warning'
import Wrong from '../components/icons/Wrong'

import { PrimaryTitle, SecondaryTitle } from '../components/Text'
import Code from './Code'
import { colors } from '../components/icons/Icon'

const icons = {
  big: [
    AccountActivated,
    AllSet,
    Done,
    Error,
    Letter,
    OpenLetter,
    NotFound,
    Time,
    SMS,
    Warning,
    Wrong
  ],

  small: [
    Back,
    Checkmark,
    Close,
    Hamburger,
    Options
  ],

  tiny: [
    Arrow,
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

const colorNames = Object.keys(colors)
// remove white from list
colorNames.pop()

export default function Icons () {
  return (
    <div style={{width: '740px'}}>
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
                      colorNames.map((color) => (
                        <Icon color={color} key={color} />
                      ))
                    }
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
