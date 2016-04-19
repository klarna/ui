import React from 'react'

import AccountActivated from '../components/icons/AccountActivated.jsx'
import AllSet from '../components/icons/AllSet.jsx'
import Arrow from '../components/icons/Arrow.jsx'
import Back from '../components/icons/Back.jsx'
import Close from '../components/icons/Close.jsx'
import Done from '../components/icons/Done.jsx'
import Error from '../components/icons/Error.jsx'
import Details from '../components/icons/Details.jsx'
import Download from '../components/icons/Download.jsx'
import ExtendDate from '../components/icons/ExtendDate.jsx'
import Hamburger from '../components/icons/Hamburger.jsx'
import Items from '../components/icons/Items.jsx'
import Letter from '../components/icons/Letter.jsx'
import Logout from '../components/icons/Logout.jsx'
import Mail from '../components/icons/Mail.jsx'
import NotFound from '../components/icons/NotFound.jsx'
import OpenLetter from '../components/icons/OpenLetter.jsx'
import Options from '../components/icons/Options.jsx'
import Password from '../components/icons/Password.jsx'
import Person from '../components/icons/Person.jsx'
import Phone from '../components/icons/Phone.jsx'
import Question from '../components/icons/Question.jsx'
import Remind from '../components/icons/Remind.jsx'
import Time from '../components/icons/Time.jsx'
import SMS from '../components/icons/SMS.jsx'
import Warning from '../components/icons/Warning.jsx'
import Wrong from '../components/icons/Wrong.jsx'

import { PrimaryTitle, SecondaryTitle } from '../components/Text'
import Code from './Code'
import { colors } from '../components/icons/Icon.jsx'

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
