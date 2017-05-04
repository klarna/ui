import React from 'react'
import * as Alert from '../Alert'
import AlertError from '../Alert/Error'
import AlertParagraph from '../Alert/Paragraph'
import AlertTitle from '../Alert/Title'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Alert',
  icon: 'Alert',

  variations: [
    {
      title: 'Error',
      require: `import * as Alert from '@klarna/ui/Alert'`,
      type: LIVE,

      examples: {
        Regular: <AlertError>
          <AlertTitle>
            An error alert box heading
          </AlertTitle>
          <AlertParagraph>
            Some text inside helps to get an idea of how the alert would look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AlertParagraph>
          <AlertParagraph>
            ID: <em>a4c531de-e35d-4901-93ae-44e32639b4b1</em>
          </AlertParagraph>
        </AlertError>
      }
    },

    {
      title: 'Warning',
      require: `import * as Alert from '@klarna/ui/Alert'`,
      type: LIVE,

      examples: {
        Regular: <Alert.Warning>
          <AlertTitle>
            An error alert box heading
          </AlertTitle>
          <AlertParagraph>
            Some text inside helps to get an idea of how the alert would look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AlertParagraph>
          <AlertParagraph>
            ID: <em>a4c531de-e35d-4901-93ae-44e32639b4b1</em>
          </AlertParagraph>
        </Alert.Warning>
      }
    }
  ]
}
