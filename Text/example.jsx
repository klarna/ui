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
          <Title.Primary key={1}>Primary Title</Title.Primary>,
          <Title.Primary key={2} color='blue'>Primary Title in blue</Title.Primary>,
          <Title.Primary key={3} color='gray'>Primary Title in gray</Title.Primary>,
          <Title.Primary key={4} color='error'>Primary Title in error</Title.Primary>,
          <Title.Primary key={5} color='success'>Primary Title in success</Title.Primary>,
          <Title.Primary key={6} color='warning'>Primary Title in warning</Title.Primary>,
          <Block.Plain key={7} blue>
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
          <Title.Primary key={1} margins>Primary Title</Title.Primary>,
          <Paragraph.Primary key={2} margins>
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
          </Paragraph.Primary>
        ],

        Secondary: [
          <Title.Secondary key={1}>Secondary Title</Title.Secondary>,
          <Title.Secondary key={2} color='blue'>Secondary Title in blue</Title.Secondary>,
          <Title.Secondary key={3} color='gray'>Secondary Title in gray</Title.Secondary>,
          <Title.Secondary key={4} color='error'>Secondary Title in error</Title.Secondary>,
          <Title.Secondary key={5} color='success'>Secondary Title in success</Title.Secondary>,
          <Title.Secondary key={6} color='warning'>Secondary Title in warning</Title.Secondary>,
          <Block.Plain key={7} blue>
            <Title.Secondary color='white'>Secondary Title in white</Title.Secondary>
          </Block.Plain>
        ],

        'Secondary with text margins': [
          <Title.Secondary key={1} margins>Secondary Title</Title.Secondary>,
          <Paragraph.Primary key={2} margins>
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
          </Paragraph.Primary>
        ],

        Subtitle: [
          <Subtitle key={1}>Subtitle</Subtitle>,
          <Subtitle key={2} color='blue'>Subtitle in blue</Subtitle>,
          <Subtitle key={3} color='gray'>Subtitle in gray</Subtitle>,
          <Subtitle key={4} color='error'>Subtitle in error</Subtitle>,
          <Subtitle key={5} color='success'>Subtitle in success</Subtitle>,
          <Subtitle key={6} color='warning'>Subtitle in warning</Subtitle>,
          <Block.Plain key={7} blue style={{padding: '10px'}}>
            <Subtitle color='white'>Subtitle in white</Subtitle>
          </Block.Plain>
        ],

        'Condensed subtitle': <Subtitle condensed>Condensed subtitle</Subtitle>,

        'Subtitle with text margins': [
          <Subtitle key={1} margins>Secondary Title</Subtitle>,
          <Paragraph.Primary key={2} margins>
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
          <Paragraph.Primary key={1}>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary key={2} color='blue'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary key={3} color='gray'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary key={4} color='error'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary key={5} color='success'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary key={6} color='warning'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Block.Plain blue key={7}>
            <Paragraph.Primary color='white'>
              Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
            </Paragraph.Primary>
          </Block.Plain>
        ],

        'Condensed primary paragraph': <Paragraph.Primary condensed>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Primary>,

        'Primary paragraph with text margins': [
          <Paragraph.Primary key={1} margins>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Primary>,
          <Paragraph.Primary key={2} margins>
            Sed vestibulum nisl a urna lobortis tincidunt. Aenean vitae dolor sed elit semper aliquet. Suspendisse potenti.
          </Paragraph.Primary>
        ],

        Secondary: [
          <Paragraph.Secondary key={1}>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary key={2} color='blue'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary key={3} color='gray'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary key={4} color='error'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary key={5} color='success'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary key={6} color='warning'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Block.Plain blue key={7}>
            <Paragraph.Secondary color='white'>
              Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
            </Paragraph.Secondary>
          </Block.Plain>
        ],

        'Condensed secondary paragraph': <Paragraph.Secondary condensed>
          Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
        </Paragraph.Secondary>,

        'Secondary paragraph with text margins': [
          <Paragraph.Secondary key={1} margins>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Secondary>,
          <Paragraph.Secondary key={2} margins>
            Sed vestibulum nisl a urna lobortis tincidunt. Aenean vitae dolor sed elit semper aliquet. Suspendisse potenti.
          </Paragraph.Secondary>
        ],

        Legal: [
          <Paragraph.Legal key={1}>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal key={2} color='blue'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal key={3} color='gray'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal key={4} color='error'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal key={5} color='success'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal key={6} color='warning'>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Block.Plain key={7} blue>
            <Paragraph.Legal color='white'>
              Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
            </Paragraph.Legal>
          </Block.Plain>
        ],

        'Legal paragraph with text margins': [
          <Paragraph.Legal key={1} margins>
            Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
          </Paragraph.Legal>,
          <Paragraph.Legal key={2} margins>
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
          <TextLabel key={1}>Klarna ID</TextLabel>,
          <Paragraph.Primary key={2}>12312ae-13efa-23124-898b0ac0d</Paragraph.Primary>,
          <Block.Plain key={3} blue>
            <TextLabel color='white'>Klarna ID</TextLabel>
            <Paragraph.Primary color='white'>
              12312ae-13efa-23124-898b0ac0d
            </Paragraph.Primary>
          </Block.Plain>
        ],

        'Text Labels with text margins': [
          <TextLabel key={1} margins>Klarna ID</TextLabel>,
          <Paragraph.Primary key={2} margins>12312ae-13efa-23124-898b0ac0d</Paragraph.Primary>,
          <TextLabel key={3} margins>City</TextLabel>,
          <Paragraph.Primary key={4} margins>Wetzlar</Paragraph.Primary>
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
          <Amount key={1}>1500€</Amount>,
          <Amount key={2}>$1500</Amount>,
          <Amount key={3} color='blue'>1500₪</Amount>,
          <Amount key={4} color='gray'>£1500</Amount>,
          <Amount key={5} color='error'>¥1500</Amount>,
          <Amount key={6} color='success'>1500kr</Amount>,
          <Amount key={7} color='warning'>1500CHF</Amount>,
          <Block.Plain key={8} blue>
            <Amount color='white'>1500€</Amount>
          </Block.Plain>
        ]
      }
    }
  ]
}
