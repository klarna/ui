import React from 'react'
import Code from '../Code'
import * as Block from '../Block'
import { Amount, Title, Subtitle, Paragraph, TextLabel } from '../Text'
import Link from '../Link'

export default {
  title: 'Text',
  variations: [{
    title: 'Titles',
    Primary: {
      example: [
        <Title.Primary>Primary Title</Title.Primary>,
        <Title.Primary color='blue'>Primary Title in blue</Title.Primary>,
        <Block.Plain blue>
          <Title.Primary color='white'>Primary Title in white</Title.Primary>
        </Block.Plain>
      ],
      wide: true
    },

    'Small primary title': {
      example: (
        <Title.Primary small>Small Primary Title</Title.Primary>
      ),
      wide: true
    },

    'Small and prominent primary title': {
      example: (
        <Title.Primary strong small>Small Primary Title in strong</Title.Primary>
      ),
      wide: true
    },

    'Primary with text margins': {
      example: [
        <Title.Primary margins>Primary Title</Title.Primary>,
        <Paragraph.Primary margins>
          Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
        </Paragraph.Primary>
      ],
      wide: true
    },

    Secondary: {
      example: [
        <Title.Secondary>Secondary Title</Title.Secondary>,
        <Title.Secondary color='blue'>Secondary Title in blue</Title.Secondary>,
        <Block.Plain blue>
          <Title.Secondary color='white'>Secondary Title in white</Title.Secondary>
        </Block.Plain>
      ],
      wide: true
    },

    'Condensed secondary title': {
      example: (
        <Title.Secondary small>Condensed Secondary Title</Title.Secondary>
      ),
      wide: true
    },

    'Secondary with text margins': {
      example: [
        <Title.Secondary margins>Secondary Title</Title.Secondary>,
        <Paragraph.Primary margins>
          Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
        </Paragraph.Primary>
      ],
      wide: true
    },

    Subtitle: {
      example: [
        <Subtitle>Subtitle</Subtitle>,
        <Subtitle color='blue'>Subtitle in blue</Subtitle>,
        <Block.Plain blue>
          <Subtitle color='white'>Subtitle in white</Subtitle>
        </Block.Plain>
      ],
      wide: true
    },

    'Condensed subtitle': {
      example: (
        <Subtitle condensed>Condensed subtitle</Subtitle>
      ),
      wide: true
    },

    'Subtitle with text margins': {
      example: [
        <Subtitle margins>Secondary Title</Subtitle>,
        <Paragraph.Primary margins>
          Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
        </Paragraph.Primary>
      ]
    }
  }, {
    title: 'Paragraphs',
    Primary: {
      example: [
        <Paragraph.Primary>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Primary>,
        <Paragraph.Primary color='blue'>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Primary>,
        <Block.Plain blue>
          <Paragraph.Primary color='white'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>
        </Block.Plain>
      ],
      wide: true
    },

    'Condensed primary paragraph': {
      example: (
        <Paragraph.Primary condensed>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Primary>
      ),
      wide: true
    },

    'Primary paragraph with text margins': {
      example: [
        <Paragraph.Primary margins>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Primary>,
        <Paragraph.Primary margins>
          Sed vestibulum nisl a urna lobortis tincidunt. Aenean vitae dolor sed elit semper aliquet. Suspendisse potenti.
        </Paragraph.Primary>
      ],
      wide: true
    },

    Secondary: {
      example: [
        <Paragraph.Secondary>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Secondary>,
        <Paragraph.Secondary color='blue'>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Secondary>,
        <Block.Plain blue>
          <Paragraph.Secondary color='white'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>
        </Block.Plain>
      ],
      wide: true
    },

    'Condensed secondary paragraph': {
      example: (
        <Paragraph.Secondary condensed>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Secondary>
      ),
      wide: true
    },

    'Secondary paragraph with text margins': {
      example: [
        <Paragraph.Secondary margins>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Secondary>,
        <Paragraph.Secondary margins>
          Sed vestibulum nisl a urna lobortis tincidunt. Aenean vitae dolor sed elit semper aliquet. Suspendisse potenti.
        </Paragraph.Secondary>
      ],
      wide: true
    },

    Legal: {
      example: [
        <Paragraph.Legal>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Legal>,
        <Paragraph.Legal color='blue'>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Legal>,
        <Block.Plain blue>
          <Paragraph.Legal color='white'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>
        </Block.Plain>
      ],
      wide: true
    },

    'Legal paragraph with text margins': {
      example: [
        <Paragraph.Legal margins>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Legal>,
        <Paragraph.Legal margins>
          Sed vestibulum nisl a urna lobortis tincidunt. Aenean vitae dolor sed elit semper aliquet. Suspendisse potenti.
        </Paragraph.Legal>
      ],
      wide: true
    }
  }, {
    title: 'Text Labels',
    Regular: {
      example: [
        <TextLabel>Klarna ID</TextLabel>,
        <Paragraph.Primary>12312ae-13efa-23124-898b0ac0d</Paragraph.Primary>,
        <Block.Plain blue>
          <TextLabel color='white'>Klarna ID</TextLabel>
          <Paragraph.Primary  color='white'>12312ae-13efa-23124-898b0ac0d</Paragraph.Primary>
        </Block.Plain>
      ],
      wide: true
    },

    'Text Labels with text margins': {
      example: [
        <TextLabel margins>Klarna ID</TextLabel>,
        <Paragraph.Primary margins>12312ae-13efa-23124-898b0ac0d</Paragraph.Primary>,
        <TextLabel margins>City</TextLabel>,
        <Paragraph.Primary margins>Wetzlar</Paragraph.Primary>
      ],
      wide: true
    }
  }, {
    title: 'Link',

    Regular: {
      example: [
        <Paragraph.Primary>All links go to <Link target='_blank' href='http://goo.gl/SsAhv'>Rome</Link></Paragraph.Primary>
      ],
      wide: true
    },
    'Link with customizations': {
      example: (
        <Paragraph.Primary>
          But some links go to <Link
            customize={{
              textColor: '#3500C8'
            }}
            target='_blank'
            href='http://goo.gl/XPU9kg'>
            Paris
          </Link>
        </Paragraph.Primary>
      ),
      wide: true
    }
  }, {
    title: 'Amount',
    Regular: {
      example: [
        <Amount>1500€</Amount>,
        <Amount>$1500</Amount>,
        <Amount color='blue'>1500₪</Amount>,
        <Block.Plain blue>
          <Amount color='white'>1500€</Amount>
        </Block.Plain>
      ],
      wide: true
    }
  }]
}
