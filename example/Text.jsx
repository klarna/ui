import React from 'react'
import Code from './Code'
import { PrimaryTitle, SecondaryTitle, Subtitle, Paragraph, Label, TextLabel } from '../components/Text'

export default function Text () {
  return (
    <div>

      <Code>
        <PrimaryTitle>Primary Title</PrimaryTitle>
        <PrimaryTitle blue={true}>Primary Title in blue</PrimaryTitle>
        <PrimaryTitle small={true}>Primary Title in small</PrimaryTitle>
        <PrimaryTitle strong={true} small={true}>Primary Title in strong</PrimaryTitle>
      </Code>

      <Code>
        <SecondaryTitle>Secondary Title</SecondaryTitle>
        <SecondaryTitle blue={true}>Secondary Title in blue</SecondaryTitle>
        <SecondaryTitle condensed={true}>Secondary Title in condensed</SecondaryTitle>
      </Code>

      <Code>
        <Subtitle>Subtitle</Subtitle>
        <Subtitle blue={true}>Subtitle in blue</Subtitle>
        <Subtitle condensed={true}>Subtitle in condensed</Subtitle>
      </Code>

      <Code>
        <Paragraph>Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph </Paragraph>
        <Paragraph condensed={true}>Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed </Paragraph>
        <Paragraph design="secondary">Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph </Paragraph>
        <Paragraph design="legal">Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text </Paragraph>
      </Code>

      <Code>
        <Label>Boom!</Label>
      </Code>

      <Code>
        <TextLabel>Klarna ID</TextLabel>
      </Code>

    </div>
  )
}
