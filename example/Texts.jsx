import React from 'react'
import Code from './Code'
import Block from '../components/Block'
import { Amount, PrimaryTitle, SecondaryTitle, Subtitle, Paragraph, Label, TextLabel } from '../components/Text'
import Link from '../components/Link'

export default function Texts () {
  return (
    <div>
      <PrimaryTitle small blue>Primary Title</PrimaryTitle>
      <Code>
        <PrimaryTitle>Primary Title</PrimaryTitle>
        <PrimaryTitle blue>Primary Title in blue</PrimaryTitle>
        <PrimaryTitle small>Primary Title in small</PrimaryTitle>
        <PrimaryTitle strong small>Primary Title in strong</PrimaryTitle>
      </Code>

      <PrimaryTitle small blue>Secondary Title</PrimaryTitle>
      <Code>
        <SecondaryTitle>Secondary Title</SecondaryTitle>
        <SecondaryTitle blue>Secondary Title in blue</SecondaryTitle>
        <SecondaryTitle condensed>Secondary Title in condensed</SecondaryTitle>
      </Code>

      <PrimaryTitle small blue>Subtitle</PrimaryTitle>
      <Code>
        <Subtitle>Subtitle</Subtitle>
        <Subtitle blue>Subtitle in blue</Subtitle>
        <Subtitle condensed>Subtitle in condensed</Subtitle>
      </Code>

      <PrimaryTitle small blue>Paragraphs</PrimaryTitle>
      <Code>
        <Paragraph>Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph </Paragraph>
        <Paragraph condensed>Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed </Paragraph>
        <Paragraph design='secondary'>Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph </Paragraph>
        <Paragraph design='legal'>Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text </Paragraph>
      </Code>

      <PrimaryTitle small blue>Label</PrimaryTitle>
      <Code>
        <Label>Boom!</Label>
      </Code>

      <PrimaryTitle small blue>Text Label</PrimaryTitle>
      <Code>
        <TextLabel>Klarna ID</TextLabel>
      </Code>

      <PrimaryTitle small blue>Link</PrimaryTitle>
      <Code>
        <Subtitle>
          Some subtitle with <Link href='#'>a link.</Link>
        </Subtitle>
        <Paragraph>
          Some paragraph with <Link href='#'>a link</Link>.
        </Paragraph>
      </Code>

      <PrimaryTitle small blue>Amount</PrimaryTitle>
      <Code>
        <Amount>1500€</Amount>
        <Amount>$1500</Amount>
        <Amount>1500₪</Amount>
        <Block blue>
          <Amount white>1500€</Amount>
        </Block>
      </Code>
    </div>
  )
}
