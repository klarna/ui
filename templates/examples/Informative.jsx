import React from 'react'
import * as Paragraph from '../../Paragraph'
import ConfirmData from '../ConfirmData'
import ReviewData from '../ReviewData'
import Explanation from '../Explanation'
import Landing from '../Landing'
import XStepExplanation from '../XStepExplanation'
import Wrapper from '../Wrapper'
import DemoIcon from './DemoIcon'
import { LIVE, TEMPLATE } from '../../Showroom/variationTypes'

import grid from '../../settings/grid'
import * as palette from '../../settings/palette'

export default {
  title: 'Informative',

  variations: [
    {
      title: 'Landing',
      require: 'import Landing from \'@klarna/ui/templates/Landing\'',
      type: LIVE,

      examples: {
        Regular: <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES,
            height: 700
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            <Landing
              id='landing'
              illustration={<DemoIcon />}
              labels={{
                title: 'Welcome to the site',
                summary: 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
                accept: 'Continue'
              }}
              onAccept={() => console.log('accept')}
              footer={<Paragraph.Legal style={{marginTop: grid(4)}}>Lorem ipsum™</Paragraph.Legal>}
            />
          </Wrapper>
        </div>,

        'With high brand volume': <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            <Landing
              brandVolume='high'
              illustration={<DemoIcon />}
              labels={{
                title: 'Welcome to the site',
                summary: 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
                accept: 'Continue'
              }}
              onAccept={() => console.log('accept')}
            />
          </Wrapper>
        </div>,

        'With error': <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            <Landing
              illustration={<DemoIcon />}
              labels={{
                title: 'Welcome to the site',
                summary: 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
                accept: 'Continue'
              }}
              onAccept={() => console.log('accept')}
              error='It’s wingardium leviosa'
            />
          </Wrapper>
        </div>,

        'With legal copy': <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            <Landing
              illustration={<DemoIcon />}
              labels={{
                title: 'Welcome to the site',
                summary: 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
                legal: 'Paleo chicharrones yr flexitarian, post-ironic swag vinyl pok pok tilde shabby chic try-hard direct trade polaroid cornhole lomo.',
                accept: 'Continue'
              }}
              onAccept={() => console.log('accept')}
            />
          </Wrapper>
        </div>,

        'With Secondary button': <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            <Landing
              illustration={<DemoIcon />}
              labels={{
                title: 'Welcome to the site',
                summary: 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
                accept: 'Continue',
                cancel: 'Go back'
              }}
              onAccept={() => console.log('accept')}
              onCancel={() => console.log('cancel')}
            />
          </Wrapper>
        </div>,

        'With loading state': <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            <Landing
              illustration={<DemoIcon />}
              labels={{
                title: 'Welcome to the site',
                summary: 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
                accept: 'Continue',
                cancel: 'Go back'
              }}
              loading
              onAccept={() => console.log('accept')}
              onCancel={() => console.log('cancel')}
            />
          </Wrapper>
        </div>,

        'No Buttons': <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            <Landing
              illustration={<DemoIcon />}
              labels={{
                title: 'Welcome to the site',
                summary: 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
              }}
            />
          </Wrapper>
        </div>,

        'Multiple paragraphs': <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            <Landing
              illustration={<DemoIcon />}
              labels={{
                title: 'Welcome to the site',
                summary: [
                  'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
                  'Mlkshk pour-over chartreuse heirloom cred enamel pin, pop-up vaporware.'
                ],
                accept: 'Continue'
              }}
              onAccept={() => console.log('accept')}
            />
          </Wrapper>
        </div>,
      }
    },

    {
      title: 'Explanation',
      require: 'import Explanation from \'@klarna/ui/templates/Explanation\'',
      type: LIVE,

      examples: {
        Regular: <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}>
            <Explanation
              id='explanation'
              title='This is how the product works'
              content='Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.'
              legal='Drinking vinegar unicorn fam pork belly prism. Vegan bicycle rights raclette tofu squid lomo coloring book, meggings marfa PBR&B bushwick. '
            />
          </Wrapper>
        </div>
      }
    },

    {
      title: 'XStepExplanation',
      require: `import XStepExplanation from '@klarna/ui/templates/XStepExplanation'`,
      type: LIVE,

      examples: {
        Regular: <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
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
              onAccept={() => console.log('Continue')}
            />
          </Wrapper>
        </div>,

        'With high brand volume': <div
          style={{
            boxSizing: 'border-box',
            borderWidth: grid(0.2),
            borderStyle: 'solid',
            borderColor: palette.GREY_LINES
          }}>
          <Wrapper
            fixed
            onBack={() => console.log('welcome back')}
            onClose={() => console.log('that was close')}>
            <XStepExplanation
              brandVolume='high'
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
              onAccept={() => console.log('Continue')}
            />
          </Wrapper>
        </div>
      }
    },

    {
      title: 'ConfirmData',
      require: 'import ConfirmData from \'@klarna/ui/templates/ConfirmData\'',
      type: TEMPLATE,

      examples: {
        Regular: {
          inline: <ConfirmData
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
          />
        },

        'With high brand volume': {
          inline: <ConfirmData
            brandVolume='high'
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
          />
        }
      }
    },

    {
      title: 'ReviewData',
      require: 'import ReviewData from \'@klarna/ui/templates/ReviewData\'',
      type: TEMPLATE,

      examples: {
        Regular: {
          inline: <ReviewData
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
          />
        },

        'With high brand volume': {
          inline: <ReviewData
            brandVolume='high'
            title='Review the chosen flavors'
            summary='Street art tattooed live-edge, kitsch four loko hashtag paleo banh mi art party. Viral flexitarian paleo, stumptown dreamcatcher ennui pitchfork bitters squid cornhole roof party tattooed truffaut woke.'
            info={[
              {label: 'Ice cream', value: 'Vanilla'},
              {label: 'Juice', value: 'Orange & Pineapple'}
            ]}
            legal='Forage vinyl gluten-free drinking vinegar activated charcoal, listicle shoreditch pitchfork biodiesel venmo organic blue bottle truffaut helvetica. Air plant locavore typewriter, post-ironic banjo leggings sriracha scenester microdosing fanny pack readymade squid raclette stumptown neutra.'
            accept='Yes, awesome'
            onAccept={() => console.log('The user thinks the flavors are awesome')}
          />
        }
      }
    }
  ]
}
