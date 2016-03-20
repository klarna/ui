import React from 'react'
import Code from './Code'
import { PrimaryTitle, SecondaryTitle, Subtitle, Paragraph, Label, TextLabel } from '../components/Text'

export default function Text () {
  return (
    <div>
      <h3>Primary Title</h3>
      <Code>
        <PrimaryTitle>Primary Title</PrimaryTitle>
        <PrimaryTitle blue>Primary Title in blue</PrimaryTitle>
        <PrimaryTitle small>Primary Title in small</PrimaryTitle>
        <PrimaryTitle strong small>Primary Title in strong</PrimaryTitle>
      </Code>

      <h3>Secondary Title</h3>
      <Code>
        <SecondaryTitle>Secondary Title</SecondaryTitle>
        <SecondaryTitle blue>Secondary Title in blue</SecondaryTitle>
        <SecondaryTitle condensed>Secondary Title in condensed</SecondaryTitle>
      </Code>

      <h3>Subtitle</h3>
      <Code>
        <Subtitle>Subtitle</Subtitle>
        <Subtitle blue>Subtitle in blue</Subtitle>
        <Subtitle condensed>Subtitle in condensed</Subtitle>
      </Code>

      <h3>Paragraphs</h3>
      <Code>
        <Paragraph>Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph </Paragraph>
        <Paragraph condensed>Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed </Paragraph>
        <Paragraph design='secondary'>Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph </Paragraph>
        <Paragraph design='legal'>Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text </Paragraph>
      </Code>

      <h3>Label</h3>
      <Code>
        <Label>Boom!</Label>
      </Code>

      <h3>Text Label</h3>
      <Code>
        <TextLabel>Klarna ID</TextLabel>
      </Code>

    </div>
  )
}
