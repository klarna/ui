import React from 'react'
import Code from './Code'
import { Subtitle } from '../components/Text'
import Alert, { Title, Paragraph } from '../components/Alert'

export default function Alerts () {
  return (
    <div>
      <Subtitle>Error</Subtitle>
      <Code>
        <Alert type='error'>
          <Title>An error alert box heading</Title>
          <Paragraph>Some text inside helps to get an idea of how the alert would look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Paragraph>
          <Paragraph>Correlation ID: <em>a4c531de-e35d-4901-93ae-44e32639b4b1</em></Paragraph>
        </Alert>
      </Code>
    </div>
  )
}
