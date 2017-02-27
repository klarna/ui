import React from 'react'
import * as Paragraph from '../Paragraph'
import * as Code from '../Code'
import Subtitle from '../Subtitle'
import html2KlarnaUI from '../html2KlarnaUI'
import { SHOWCASE } from '../Showroom/variationTypes'

import grid from '../settings/grid'
import * as palette from '../settings/palette'

export default {
  title: 'html2KlarnaUI',

  examples: {
    type: SHOWCASE,

    example: <section style={{marginTop: 60}}>
      <Code.Block
        standalone
        language='imports'>
        {`import html2KlarnaUI from '@klarna/ui/html2KlarnaUI'`}
      </Code.Block>

      <div style={{display: 'flex', marginTop: grid(8)}}>
        <div style={{flex: 1}}>
          <div
            style={{
              padding: grid(8),
              boxSizing: 'border-box',
              borderColor: palette.GREY_LINES,
              borderStyle: 'solid',
              borderWidth: grid(0.2)
            }}>
            {html2KlarnaUI(`
    <h1>Hello Klarna UI</h1>
    <p>This has some <strong>highlighting</strong></p>
    `)}
          </div>
        </div>

        <div style={{flex: 1, margin: `0px 0 0 20px`}}>
          <Code.Block standalone style={{marginBottom: grid(3)}}>
            {`<div>
      {html2KlarnaUI(\`
    <h1>Hello Klarna UI</h1>
    <p>This has some <strong>highlighting</strong></p>
    \`)}
  </div>`}
          </Code.Block>

          <Subtitle margins>Formatting text automatically from HTML</Subtitle>

          <Paragraph.Secondary margins>
            <Code.Inline>html2KlarnaUI</Code.Inline> is used to be able to transform plain HTML strings into Klarna UI React components. The standard use case is when getting raw HTML text from translations with for example <Code.Inline>{`<strong>`}</Code.Inline> highlighting: this and other tags need to be transformed into the custom elements of the UI. <Code.Inline>html2KlarnaUI</Code.Inline> does this for you.
          </Paragraph.Secondary>

          <Paragraph.Secondary margins>
            No more <Code.Inline>dangerouslySetInnerHTML</Code.Inline>
          </Paragraph.Secondary>
        </div>
      </div>
    </section>
  }
}
