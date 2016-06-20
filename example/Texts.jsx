import React from 'react'
import Code from './Code'
import Block from '../components/Block'
import { Amount, PrimaryTitle, SecondaryTitle, Subtitle, Paragraph, TextLabel } from '../components/Text'
import Link from '../components/Link'

export default function Texts () {
  return (
    <div>
      <SecondaryTitle small color='blue' margins>Primary Title</SecondaryTitle>
      <Code>
        <PrimaryTitle>Primary Title</PrimaryTitle>
        <PrimaryTitle color='blue'>Primary Title in blue</PrimaryTitle>
        <PrimaryTitle small>Primary Title in small</PrimaryTitle>
        <PrimaryTitle strong small>Primary Title in strong</PrimaryTitle>
        <PrimaryTitle margins>Primary Title with default text margins</PrimaryTitle>
        <Block blue>
          <PrimaryTitle color='white'>Primary Title in white</PrimaryTitle>
        </Block>
      </Code>

      <SecondaryTitle small color='blue' margins>Secondary Title</SecondaryTitle>
      <Code>
        <SecondaryTitle>Secondary Title</SecondaryTitle>
        <SecondaryTitle color='blue'>Secondary Title in blue</SecondaryTitle>
        <SecondaryTitle condensed>Secondary Title in condensed</SecondaryTitle>
        <SecondaryTitle margins>Secondary Title with default text margins</SecondaryTitle>
        <Block blue>
          <SecondaryTitle color='white'>Secondary Title in white</SecondaryTitle>
        </Block>
      </Code>

      <SecondaryTitle small color='blue' margins>Subtitle</SecondaryTitle>
      <Code>
        <Subtitle>Subtitle</Subtitle>
        <Subtitle color='blue'>Subtitle in blue</Subtitle>
        <Subtitle condensed>Subtitle in condensed</Subtitle>
        <Subtitle margins>Subtitle with default text margins</Subtitle>
        <Block blue>
          <Subtitle color='white'>Subtitle in white</Subtitle>
        </Block>
      </Code>

      <SecondaryTitle small color='blue' margins>Paragraphs</SecondaryTitle>
      <Code>
        <Paragraph>Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph </Paragraph>
        <Paragraph condensed>Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed </Paragraph>
        <Paragraph design='secondary'>Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph </Paragraph>
        <Paragraph design='legal'>Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text </Paragraph>
        <Paragraph margins>Primary paragraph with default margins</Paragraph>
        <Paragraph margins design='secondary'>Secondary paragraph with default margins</Paragraph>
        <Paragraph margins design='legal'>Legal paragraph with default margins</Paragraph>
        <Block blue>
          <Paragraph color='white'>Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph </Paragraph>
          <Paragraph design='legal' color='white'>Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text </Paragraph>
        </Block>
      </Code>

      <SecondaryTitle small color='blue' margins>Text Label</SecondaryTitle>
      <Code>
        <TextLabel>Klarna ID</TextLabel>
        <TextLabel margins>Klarna ID with default margins</TextLabel>
      </Code>

      <SecondaryTitle small color='blue' margins>Link</SecondaryTitle>
      <Code>
        <Subtitle>
          Some subtitle with <Link onClick={window.alert} href='#'>a link.</Link>

        </Subtitle>
        <Paragraph>
          Some paragraph with <Link href='#'>a link</Link>.
        </Paragraph>
        <Block blue>
          <Paragraph color='white'>
            Some paragraph with <Link color='white' href='#'>a link</Link>.
          </Paragraph>
        </Block>

      </Code>

      <SecondaryTitle small color='blue' margins>Amount</SecondaryTitle>
      <Code>
        <Amount>1500€</Amount>
        <Amount>$1500</Amount>
        <Amount color='blue'>1500₪</Amount>
        <Block blue>
          <Amount color='white'>1500€</Amount>
        </Block>
      </Code>
    </div>
  )
}
