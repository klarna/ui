import React from 'react'
import Code from '../Code'
import * as Block from '../Block'
import { Amount, Title, Subtitle, Paragraph, TextLabel } from '../Text'
import Link from '../Link'

export default function Texts () {
  return (
    <div>
      <Title.Secondary color='blue' margins>Primary Title</Title.Secondary>
      <Code>
        <Title.Primary>Primary Title</Title.Primary>
        <Title.Primary color='blue'>Primary Title in blue</Title.Primary>
        <Title.Primary small>Primary Title in small</Title.Primary>
        <Title.Primary strong small>Primary Title in strong</Title.Primary>
        <Title.Primary margins>Primary Title with default text margins</Title.Primary>
        <Block.Plain blue>
          <Title.Primary color='white'>Primary Title in white</Title.Primary>
        </Block.Plain>
      </Code>

      <Title.Secondary color='blue' margins>Secondary Title</Title.Secondary>
      <Code>
        <Title.Secondary>Secondary Title</Title.Secondary>
        <Title.Secondary color='blue'>Secondary Title in blue</Title.Secondary>
        <Title.Secondary condensed>Secondary Title in condensed</Title.Secondary>
        <Title.Secondary margins>Secondary Title with default text margins</Title.Secondary>
        <Block.Plain blue>
          <Title.Secondary color='white'>Secondary Title in white</Title.Secondary>
        </Block.Plain>
      </Code>

      <Title.Secondary color='blue' margins>Subtitle</Title.Secondary>
      <Code>
        <Subtitle>Subtitle</Subtitle>
        <Subtitle color='blue'>Subtitle in blue</Subtitle>
        <Subtitle condensed>Subtitle in condensed</Subtitle>
        <Subtitle margins>Subtitle with default text margins</Subtitle>
        <Block.Plain blue>
          <Subtitle color='white'>Subtitle in white</Subtitle>
        </Block.Plain>
      </Code>

      <Title.Secondary color='blue' margins>Paragraphs</Title.Secondary>
      <Code>
        <Paragraph.Primary>
          Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph
        </Paragraph.Primary>
        <Paragraph.Primary condensed>
          Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed Primary Paragraph Condensed
        </Paragraph.Primary>
        <Paragraph.Secondary>
          Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph Secondary Paragraph
        </Paragraph.Secondary>
        <Paragraph.Legal>
          Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text
        </Paragraph.Legal>
        <Paragraph.Primary margins>
          Primary paragraph with default margins
        </Paragraph.Primary>
        <Paragraph.Secondary margins>
          Secondary paragraph with default margins
        </Paragraph.Secondary>
        <Paragraph.Legal margins>
          Legal paragraph with default margins
        </Paragraph.Legal>

        <Block.Plain blue>
          <Paragraph.Primary color='white'>
            Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph Primary Paragraph
          </Paragraph.Primary>
          <Paragraph.Legal color='white'>
            Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text Legal Text
          </Paragraph.Legal>
        </Block.Plain>
      </Code>

      <Title.Secondary color='blue' margins>Text Label</Title.Secondary>
      <Code>
        <TextLabel>Klarna ID</TextLabel>
        <TextLabel margins>Klarna ID with default margins</TextLabel>

        <Block.Plain blue>
          <TextLabel color='white'>Given Name</TextLabel>
        </Block.Plain>
      </Code>

      <Title.Secondary color='blue' margins>Link</Title.Secondary>
      <Code>
        <Subtitle>
          Some subtitle with <Link onClick={window.alert} href='#'>a link.</Link>

        </Subtitle>
        <Paragraph.Primary>
          Some paragraph with <Link href='#'>a link</Link>.
        </Paragraph.Primary>

        <Paragraph.Primary>
          Some paragraph with <Link href='#' customize={{textColor: 'green'}}>a customized link</Link>.
        </Paragraph.Primary>

        <Block.Plain blue>
          <Paragraph.Primary color='white'>
            Some paragraph with <Link color='white' href='#'>a link</Link>.
          </Paragraph.Primary>
        </Block.Plain>

      </Code>

      <Title.Secondary color='blue' margins>Amount</Title.Secondary>
      <Code>
        <Amount>1500€</Amount>
        <Amount>$1500</Amount>
        <Amount color='blue'>1500₪</Amount>
        <Block.Plain blue>
          <Amount color='white'>1500€</Amount>
        </Block.Plain>
      </Code>
    </div>
  )
}
