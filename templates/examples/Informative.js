import React, {Component} from 'react'
import * as Paragraph from '../../Paragraph'
import CenteredDialog from '../CenteredDialog'
import ConfirmData from '../ConfirmData'
import ReviewData from '../ReviewData'
import Explanation from '../Explanation'
import Landing from '../Landing'
import XStepExplanation from '../XStepExplanation'
import Wrapper from '../Wrapper'
import DemoIcon from './DemoIcon'
import {SHOWCASE, TEMPLATE} from '../../Showroom/variationTypes'

import Canvas from '../../Showroom/Lekplats/Canvas'
import lekplats from '../../Showroom/Lekplats'
import * as Code from '../../Code'
import asCode from '../../helpers/asCode'

import grid from '../../settings/grid'
import * as palette from '../../settings/palette'

function IOSChrome ({children, chrome}) {
  return <div
    style={{
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    }}>
    <div
      style={{
        backgroundColor: 'black',
        height: chrome ? 30 : 0,
        width: '100%'
      }}
    />
    <div
      style={{
        height: chrome ? 'calc(100% - 60px)' : '100%',
        position: 'relative',
        width: '100%'
      }}>
      {children}
    </div>
    <div
      style={{
        backgroundColor: 'black',
        height: chrome ? 30 : 0,
        width: '100%'
      }}
    />
  </div>
}

function LandingExample ({
  desktop,
  narrow,
  highBrandVolume,
  withError,
  withLegalCopy,
  withSecondaryButton,
  loading,
  withPrimaryButton,
  multipleParagraphs,
  visible
}) {
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    visible={visible}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('that was close')}>
    <Landing
      id='landing'
      loading={loading}
      illustration={<DemoIcon />}
      labels={{
        title: 'Welcome to the site',
        summary: multipleParagraphs
          ? [
            'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
            'Mlkshk pour-over chartreuse heirloom cred enamel pin, pop-up vaporware.'
          ]
          : 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
        accept: withPrimaryButton ? 'Continue' : undefined,
        cancel: withSecondaryButton ? 'Go back' : undefined,
        legal: withLegalCopy ? 'Paleo chicharrones yr flexitarian, post-ironic swag vinyl pok pok tilde shabby chic try-hard direct trade polaroid cornhole lomo.' : undefined
      }}
      onAccept={withPrimaryButton ? () => console.log('accept') : undefined}
      onCancel={withSecondaryButton ? () => console.log('cancel') : undefined}
      brandVolume={highBrandVolume ? 'high' : undefined}
      footer={<Paragraph.Legal style={{marginTop: grid(4)}}>Lorem ipsum™</Paragraph.Legal>}
      error={withError ? 'It’s wingardium leviosa' : undefined}
    />
  </Wrapper>

  return <div
    style={{
      marginRight: grid(4),
      width: `calc(80% - ${grid(4)})`
    }}>
    <Canvas
      dimensions={desktop
        ? undefined
        : (narrow
          ? [280, 500]
          : [400, 600]
        )}>
      <IOSChrome chrome={!desktop && visible}>
        {content}
      </IOSChrome>
    </Canvas>

    <Code.Block standalone style={{marginTop: 20}}>
      {asCode(content)}
    </Code.Block>
  </div>
}

LandingExample.options = [
  {
    label: 'Visible',
    name: 'visible',
    value: true
  },
  {
    label: 'Desktop',
    name: 'desktop',
    value: false
  },
  {
    label: 'Narrow',
    name: 'narrow',
    value: false
  },
  {
    label: 'High brand volume',
    name: 'highBrandVolume',
    value: false
  },
  {
    label: 'With legal copy',
    name: 'withLegalCopy',
    value: false
  },
  {
    label: 'With error',
    name: 'withError',
    value: false
  },
  {
    label: 'With primary button',
    name: 'withPrimaryButton',
    value: true
  },
  {
    label: 'With secondary button',
    name: 'withSecondaryButton',
    value: false
  },
  {
    label: 'Loading',
    name: 'loading',
    value: false
  },
  {
    label: 'Multiple paragraphs',
    name: 'multipleParagraphs',
    value: false
  }
]

LandingExample.defaultProps = {
  visible: false,
  desktop: false,
  narrow: false,
  highBrandVolume: false,
  withError: false,
  withLegalCopy: false,
  withSecondaryButton: false,
  withPrimaryButton: true,
  multipleParagraphs: false
}

function ExplanationExample ({
  desktop,
  narrow,
  visible
}) {
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    visible={visible}
    onBack={() => console.log('welcome back')}>
    <Explanation
      id='explanation'
      title='This is how the product works'
      content='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
      legal='Drinking vinegar unicorn fam pork belly prism. Vegan bicycle rights raclette tofu squid lomo coloring book, meggings marfa PBR&B bushwick. '
    />
  </Wrapper>

  return <div
    style={{
      marginRight: grid(4),
      width: `calc(80% - ${grid(4)})`
    }}>
    <Canvas
      dimensions={desktop
        ? undefined
        : (narrow
          ? [280, 500]
          : [400, 600]
        )}>
      {content}
    </Canvas>

    <Code.Block standalone style={{marginTop: 20}}>
      {asCode(content)}
    </Code.Block>
  </div>
}

ExplanationExample.options = [
  {
    label: 'Desktop',
    name: 'desktop',
    value: false
  },
  {
    label: 'Narrow',
    name: 'narrow',
    value: false
  },
  {
    label: 'Visible',
    name: 'visible',
    value: true
  }
]

ExplanationExample.defaultProps = {
  desktop: false,
  narrow: false,
  visible: false
}

function XStepExplanationExample ({
  desktop,
  narrow,
  highBrandVolume,
  visible
}) {
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    visible={visible}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('that was close')}>
    <XStepExplanation
      id='x-step-explanation'
      title='This is the main feature headline'
      accept='Continue'
      bullets={[
        {
          icon: <svg
            width='60px'
            height='60px'
            viewBox='0 0 60 60'>
            <circle
              stroke='#979797'
              fill='#D8D8D8'
              cx='30'
              cy='30'
              r='28'
            />
          </svg>,
          content: 'Maecenas in dui ut tortor tristique auctor consequat et tortor. Sed cursus malesuada tellus dapibus.'
        },
        {
          icon: <svg
            width='60px'
            height='60px'
            viewBox='0 0 60 60'>
            <polygon
              stroke='#979797'
              fill='#D8D8D8'
              points='30 46.5 12.95 55.46 16.20 36.48 2.41 23.03 21.47 20.26 30 3 38.52 20.26 57.58 23.03 43.79 36.48 47.04 55.46'
            />
          </svg>,
          content: 'Maecenas in dui ut tortor tristique auctor consequat et tortor. Sed cursus malesuada tellus dapibus.'
        },
        {
          icon: <svg
            width='60px'
            height='60px'
            viewBox='0 0 60 60'>
            <polygon
              stroke='#979797'
              fill='#D8D8D8'
              points='30 4 58 54 2 54'
            />
          </svg>,
          content: 'Maecenas in dui ut tortor tristique auctor consequat et tortor. Sed cursus malesuada tellus dapibus.'
        }
      ]}
      brandVolume={highBrandVolume ? 'high' : undefined}
      onAccept={() => console.log('Continue')}
    />
  </Wrapper>

  return <div
    style={{
      marginRight: grid(4),
      width: `calc(80% - ${grid(4)})`
    }}>
    <Canvas
      dimensions={desktop
        ? undefined
        : (narrow
          ? [280, 500]
          : [400, 600]
        )}>
      {content}
    </Canvas>

    <Code.Block standalone style={{marginTop: 20}}>
      {asCode(content)}
    </Code.Block>
  </div>
}

XStepExplanationExample.options = [
  {
    label: 'Desktop',
    name: 'desktop',
    value: false
  },
  {
    label: 'Narrow',
    name: 'narrow',
    value: false
  },
  {
    label: 'High brand volume',
    name: 'highBrandVolume',
    value: false
  },
  {
    label: 'Visible',
    name: 'visible',
    value: true
  }
]

XStepExplanationExample.defaultProps = {
  desktop: false,
  narrow: false,
  highBrandVolume: false,
  visible: false
}

function ConfirmDataExample ({
  desktop,
  narrow,
  highBrandVolume,
  visible
}) {
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    visible={visible}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('that was close')}>
    <ConfirmData
      id='confirm-data'
      title='Are these your favorite flavors?'
      summary='Street art tattooed live-edge, kitsch four loko hashtag paleo banh mi art party. Viral flexitarian paleo, stumptown dreamcatcher ennui pitchfork bitters squid cornhole roof party tattooed truffaut woke.'
      info={[
        {label: 'Ice cream', value: 'Vanilla'},
        {label: 'Juice', value: 'Orange'}
      ]}
      accept='Yes, love those flavors'
      cancel='Chocolate and strawberry please'
      onAccept={() => console.log('The user likes the flavors')}
      onCancel={() => console.log('The prefers chocolate')}
      brandVolume={highBrandVolume ? 'high' : undefined}
    />
  </Wrapper>

  return <div
    style={{
      marginRight: grid(4),
      width: `calc(80% - ${grid(4)})`
    }}>
    <Canvas
      dimensions={desktop
        ? undefined
        : (narrow
          ? [280, 500]
          : [400, 600]
        )}>
      {content}
    </Canvas>

    <Code.Block standalone style={{marginTop: 20}}>
      {asCode(content)}
    </Code.Block>
  </div>
}

ConfirmDataExample.options = [
  {
    label: 'Desktop',
    name: 'desktop',
    value: false
  },
  {
    label: 'Narrow',
    name: 'narrow',
    value: false
  },
  {
    label: 'High brand volume',
    name: 'highBrandVolume',
    value: false
  },
  {
    label: 'Visible',
    name: 'visible',
    value: true
  }
]

ConfirmDataExample.defaultProps = {
  desktop: false,
  narrow: false,
  highBrandVolume: false,
  visible: false
}

function ReviewDataExample ({
  desktop,
  narrow,
  highBrandVolume,
  visible
}) {
  const content = <Wrapper
    layout={desktop
      ? 'desktop'
      : (narrow
        ? 'narrow'
        : 'mobile'
      )}
    visible={visible}
    onBack={() => console.log('welcome back')}
    onClose={() => console.log('that was close')}>
    <ReviewData
      id='review-data'
      title='Review the chosen flavors'
      summary='Street art tattooed live-edge, kitsch four loko hashtag paleo banh mi art party. Viral flexitarian paleo, stumptown dreamcatcher ennui pitchfork bitters squid cornhole roof party tattooed truffaut woke.'
      info={[
        {label: 'Ice cream', value: 'Vanilla'},
        {label: 'Juice', value: 'Orange & Pineapple'}
      ]}
      legal='Forage vinyl gluten-free drinking vinegar activated charcoal, listicle shoreditch pitchfork biodiesel venmo organic blue bottle truffaut helvetica. Air plant locavore typewriter, post-ironic banjo leggings sriracha scenester microdosing fanny pack readymade squid raclette stumptown neutra.'
      accept='Yes, awesome'
      onAccept={() => console.log('The user thinks the flavors are awesome')}
      brandVolume={highBrandVolume ? 'high' : undefined}
    />
  </Wrapper>

  return <div
    style={{
      marginRight: grid(4),
      width: `calc(80% - ${grid(4)})`
    }}>
    <Canvas
      dimensions={desktop
        ? undefined
        : (narrow
          ? [280, 500]
          : [400, 600]
        )}>
      {content}
    </Canvas>

    <Code.Block standalone style={{marginTop: 20}}>
      {asCode(content)}
    </Code.Block>
  </div>
}

ReviewDataExample.options = [
  {
    label: 'Desktop',
    name: 'desktop',
    value: false
  },
  {
    label: 'Narrow',
    name: 'narrow',
    value: false
  },
  {
    label: 'High brand volume',
    name: 'highBrandVolume',
    value: false
  },
  {
    label: 'Visible',
    name: 'visible',
    value: true
  }
]

ReviewDataExample.defaultProps = {
  desktop: false,
  narrow: false,
  highBrandVolume: false,
  visible: false
}

export default {
  title: 'Informative',

  variations: [
    {
      title: 'Landing',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(LandingExample.options)(LandingExample)
      )
    },

    {
      title: 'Explanation',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(ExplanationExample.options)(ExplanationExample)
      )
    },

    {
      title: 'CenteredDialog',
      require: `import CenteredDialog from '@klarna/ui/templates/CenteredDialog'`,
      type: TEMPLATE,

      examples: {
        Regular: {
          inline: <CenteredDialog
            id='centered-dialog'
            illustration={<DemoIcon />}
            title='Dialog Title'
            summary='Dialog summary <strong>that supports HTML</strong> tags and convert them into KlarnaUI syntax.<br/><br/>Which plays well with output from localization tools.'
            actions={[
              {
                id: 'ok-button',
                type: 'primary',
                label: 'OK',
                onClick: () => console.log('OK')
              },
              {
                id: 'secondary-button',
                type: 'secondary',
                label: 'Secondary'
              },
              {
                id: 'take-me-away-button',
                label: 'Go to Google.com',
                target: '_blank',
                href: 'http://www.google.com'
              }
            ]}
          />
        }
      }
    },

    {
      title: 'XStepExplanation',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(XStepExplanationExample.options)(XStepExplanationExample)
      )
    },

    {
      title: 'ConfirmData',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(ConfirmDataExample.options)(ConfirmDataExample)
      )
    },

    {
      title: 'ReviewData',
      type: SHOWCASE,

      example: React.createElement(
        lekplats(ReviewDataExample.options)(ReviewDataExample)
      )
    }
  ]
}
