import React from 'react'
import * as Alert from '../Alert'

const Error = {
  title: 'Error',
  require: 'import * as Alert from \'@klarna/ui/Alert\'',
  Regular: (
    <Alert.Error>
      <Alert.Title>
        An error alert box heading
      </Alert.Title>
      <Alert.Paragraph>
        Some text inside helps to get an idea of how the alert would look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Alert.Paragraph>
      <Alert.Paragraph>
        ID: <em>a4c531de-e35d-4901-93ae-44e32639b4b1</em>
      </Alert.Paragraph>
    </Alert.Error>
  )
}

const Warning = {
  title: 'Warning',
  require: 'import * as Alert from \'@klarna/ui/Alert\'',
  Regular: (
    <Alert.Warning>
      <Alert.Title>
        An error alert box heading
      </Alert.Title>
      <Alert.Paragraph>
        Some text inside helps to get an idea of how the alert would look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Alert.Paragraph>
      <Alert.Paragraph>
        ID: <em>a4c531de-e35d-4901-93ae-44e32639b4b1</em>
      </Alert.Paragraph>
    </Alert.Warning>
  )
}

export default {
  title: 'Alert',
  icon: 'Alert',
  variations: [Error, Warning]
}
