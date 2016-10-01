import React from 'react'
import * as Block from '../Block'
import { Amount, Title, Subtitle, Paragraph, TextLabel } from '../Text'
import Link from '../Link'
import { LIVE_WIDE } from '../Showroom/variationTypes'

export default {
  icon: 'Text',
  title: 'Text',

  variations: [
    {
      title: 'Titles',
      require: 'import * as Title from \'@klarna/ui/Title\'',
      type: LIVE_WIDE,

      examples: {
        Primary: [
          <Title.Primary>Primary Title</Title.Primary>,
          <Title.Primary color='blue'>Primary Title in blue</Title.Primary>,
          <Title.Primary color='gray'>Primary Title in gray</Title.Primary>,
          <Title.Primary color='error'>Primary Title in error</Title.Primary>,
          <Title.Primary color='success'>Primary Title in success</Title.Primary>,
          <Title.Primary color='warning'>Primary Title in warning</Title.Primary>,
          <Block.Plain blue>
            <Title.Primary color='white'>Primary Title in white</Title.Primary>
          </Block.Plain>
        ],

        'Small primary title': <Title.Primary small>
          Small Primary Title
        </Title.Primary>,

        'Small and prominent primary title': <Title.Primary strong small>
          Small Primary Title in strong
        </Title.Primary>,

        'Primary with text margins': [
          <Title.Primary margins>Primary Title</Title.Primary>,
          <Paragraph.Primary margins>
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
          </Paragraph.Primary>
        ],

        Secondary: [
          <Title.Secondary>Secondary Title</Title.Secondary>,
          <Title.Secondary color='blue'>Secondary Title in blue</Title.Secondary>,
          <Title.Secondary color='gray'>Secondary Title in gray</Title.Secondary>,
          <Title.Secondary color='error'>Secondary Title in error</Title.Secondary>,
          <Title.Secondary color='success'>Secondary Title in success</Title.Secondary>,
          <Title.Secondary color='warning'>Secondary Title in warning</Title.Secondary>,
          <Block.Plain blue>
            <Title.Secondary color='white'>Secondary Title in white</Title.Secondary>
          </Block.Plain>
        ],

        'Secondary with text margins': [
          <Title.Secondary margins>Secondary Title</Title.Secondary>,
          <Paragraph.Primary margins>
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
          </Paragraph.Primary>
        ],

        Subtitle: [
          <Subtitle>Subtitle</Subtitle>,
          <Subtitle color='blue'>Subtitle in blue</Subtitle>,
          <Subtitle color='gray'>Subtitle in gray</Subtitle>,
          <Subtitle color='error'>Subtitle in error</Subtitle>,
          <Subtitle color='success'>Subtitle in success</Subtitle>,
          <Subtitle color='warning'>Subtitle in warning</Subtitle>,
          <Block.Plain blue style={{padding: '10px'}}>
            <Subtitle color='white'>Subtitle in white</Subtitle>
          </Block.Plain>
        ],

        'Condensed subtitle': <Subtitle condensed>Condensed subtitle</Subtitle>,

        'Subtitle with text margins': [
          <Subtitle margins>Secondary Title</Subtitle>,
          <Paragraph.Primary margins>
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
          </Paragraph.Primary>
        ]
      }
    },

    {
      title: 'Paragraphs',
      require: 'import * as Paragraph from \'@klarna/ui/Paragraph\'',
      type: LIVE_WIDE,

      examples: {
        Primary: [
          <Paragraph.Primary>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary color='blue'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary color='gray'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary color='error'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary color='success'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary color='warning'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Block.Plain blue>
            <Paragraph.Primary color='white'>
              Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
            </Paragraph.Primary>
          </Block.Plain>
        ],

        'Condensed primary paragraph': <Paragraph.Primary condensed>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Primary>,

        'Primary paragraph with text margins': [
          <Paragraph.Primary margins>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary margins>
            Sed vestibulum nisl a urna lobortis tincidunt. Aenean vitae dolor sed elit semper aliquet. Suspendisse potenti.
          </Paragraph.Primary>
        ],

        Secondary: [
          <Paragraph.Secondary>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary color='blue'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary color='gray'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary color='error'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary color='success'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary color='warning'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Block.Plain blue>
            <Paragraph.Secondary color='white'>
              Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
            </Paragraph.Secondary>
          </Block.Plain>
        ],

        'Condensed secondary paragraph': <Paragraph.Secondary condensed>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Secondary>,

        'Secondary paragraph with text margins': [
          <Paragraph.Secondary margins>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary margins>
            Sed vestibulum nisl a urna lobortis tincidunt. Aenean vitae dolor sed elit semper aliquet. Suspendisse potenti.
          </Paragraph.Secondary>
        ],

        Legal: [
          <Paragraph.Legal>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal color='blue'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal color='gray'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal color='error'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal color='success'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal color='warning'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Block.Plain blue>
            <Paragraph.Legal color='white'>
              Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
            </Paragraph.Legal>
          </Block.Plain>
        ],

        'Legal paragraph with text margins': [
          <Paragraph.Legal margins>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal margins>
            Sed vestibulum nisl a urna lobortis tincidunt. Aenean vitae dolor sed elit semper aliquet. Suspendisse potenti.
          </Paragraph.Legal>
        ]
      }
    },

    {
      title: 'Text Labels',
      require: 'import TextLabel from \'@klarna/ui/TextLabel\'',
      type: LIVE_WIDE,

      examples: {
        Regular: [
          <TextLabel>Klarna ID</TextLabel>,
          <Paragraph.Primary>12312ae-13efa-23124-898b0ac0d</Paragraph.Primary>,
          <Block.Plain blue>
            <TextLabel color='white'>Klarna ID</TextLabel>
            <Paragraph.Primary color='white'>
              12312ae-13efa-23124-898b0ac0d
            </Paragraph.Primary>
          </Block.Plain>
        ],

        'Text Labels with text margins': [
          <TextLabel margins>Klarna ID</TextLabel>,
          <Paragraph.Primary margins>12312ae-13efa-23124-898b0ac0d</Paragraph.Primary>,
          <TextLabel margins>City</TextLabel>,
          <Paragraph.Primary margins>Wetzlar</Paragraph.Primary>
        ]
      }
    },

    {
      title: 'Link',
      require: 'import Link from \'@klarna/ui/Link\'',
      type: LIVE_WIDE,

      examples: {
        Regular: <Paragraph.Primary>
          All links go to <Link target='_blank' href='http://goo.gl/SsAhv'>Rome</Link>
        </Paragraph.Primary>,

        'Link with customizations': <Paragraph.Primary>
          But some links go to <Link
            customize={{
              textColor: '#3500C8'
            }}
            target='_blank'
            href='http://goo.gl/XPU9kg'>
            Paris
          </Link>
        </Paragraph.Primary>
      }
    },

    {
      title: 'Amount',
      require: 'import Amount from \'@klarna/ui/Amount\'',
      type: LIVE_WIDE,

      examples: {
        Regular: [
          <Amount>1500€</Amount>,
          <Amount>$1500</Amount>,
          <Amount color='blue'>1500₪</Amount>,
          <Amount color='gray'>£1500</Amount>,
          <Amount color='error'>¥1500</Amount>,
          <Amount color='success'>1500kr</Amount>,
          <Amount color='warning'>1500CHF</Amount>,
          <Block.Plain blue>
            <Amount color='white'>1500€</Amount>
          </Block.Plain>
        ]
      }
    }
  ]
}
