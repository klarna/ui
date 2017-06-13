import React from 'react'
import Radio from '../Radio'
import * as Checklist from '../Checklist'
import * as Paragraph from '../Paragraph'
import { LIVE_WIDE } from '../Showroom/variationTypes'
import BoxSelector from '../BoxSelector'
import Dropdown from '../Dropdown'
import Subtitle from '../Subtitle'

import { isMobile } from '../lib/device'
import grid from '../settings/grid'
import * as palette from '../settings/palette'
import * as fontFamilies from '../settings/fontFamilies'
import {BORDER_RADIUS} from '../settings/themes/default/assorted'

const options = [
  {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 'sit', label: 'Sit', description: 'Amet et consequetur'},
  {key: 'ipsum', label: 'Ipsum', description: 'Dummy text ever since the 1500s.'}
]

const card = <svg width='32px' height='22px' viewBox='0 0 32 22'>
  <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
    <rect fill='#0074C8' x='0' y='0' width='32' height='22' rx='2' />
    <polygon fill='#E5E5E6' points='23 7 27 15 19 15' />
  </g>
</svg>

const optionsWithContent = [
  {
    key: 'lorem',
    label: 'Lorem',
    description: 'Lorem Ipsum is simply dummy.',
    aside: card,
    content: <Paragraph.Secondary style={{marginBottom: -10}}>
      Offal man braid XOXO DIY, pok pok tbh poke post-ironic neutra try-hard small batch.
    </Paragraph.Secondary>
  },

  {
    key: 'sit',
    label: 'Sit',
    description: 'Amet et consequetur',
    content: <div>
      <BoxSelector
        name='installments'
        layout='horizontal'
        onChange={(key) => console.log('You selected', key)}
        options={[{content: <div>Long one line text in div</div>, key: 'installments_3'}, {content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>], key: 'installments_6'}]}
        defaultValue='installments_6'
      />
      <Checklist.Main style={{marginTop: '20px'}}>
        <Checklist.Item>Just one click and you’re done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
      </Checklist.Main>
    </div>
  },

  {
    key: 'ipsum',
    label: 'Ipsum',
    description: 'Dummy text ever since the 1500s.',
    content: <div>
      <Subtitle>Choose your destiny</Subtitle>

      <Dropdown
        options={[
          {key: 'coffee', label: 'Coffee'},
          {key: 'chai', label: 'Chai'},
          {key: 'latte', label: 'Latte'}
        ]}
        label='Infusion'
        defaultValue='coffee'
      />
    </div>
  }
]

const fullStylesOverride = {
  radio: {
    base: {
      main: {
        borderWidth: grid(0.4),
        borderStyle: 'dashed',
        borderColor: palette.BLACK,
        borderRadius: grid(2)
      }
    }
  },
  option: {
    base: {
      content: {
        paddingBottom: grid(6),
        paddingLeft: isMobile() ? grid(6) : grid(9.8),
        paddingRight: isMobile() ? grid(6) : grid(9.8)
      },
      aside: {
        display: 'table-cell',
        paddingLeft: grid(3),
        textAlign: 'right',
        verticalAlign: 'top'
      },
      input: {
        display: 'block',
        height: 0,
        opacity: 0,
        position: 'absolute',
        width: 0
      },
      main: {
        borderBottomWidth: grid(0.4),
        borderBottomStyle: 'dashed',
        borderBottomColor: palette.BLACK
      },
      label: {
        fontFamily: fontFamilies.CODE,
        color: palette.GREY_LINES
      },
      description: {
        fontFamily: fontFamilies.CODE,
        color: palette.BLACK
      }
    },
    first: {
      main: {
        backgroundColor: palette.DISABLED_BACKGROUND
      }
    },
    last: {
      main: {
        borderBottom: 'none',
        borderBottomLeftRadius: grid(BORDER_RADIUS),
        borderBottomRightRadius: grid(BORDER_RADIUS)
      }
    },
    selected: {
      header: {
        cursor: 'crosshair'
      }
    }
  },
  expandLabel: {
    base: {
      main: {
        backgroundColor: palette.WHITE,
        fontFamily: fontFamilies.CODE
      },
      chevron: {
        transform: `translateY(${grid(1)}) scale(2)`
      }
    },

    active: {
      main: {
        backgroundColor: palette.GREY_LINES
      }
    }
  },
  radioMark: {
    base: {
      main: {
        width: grid(4),
        height: grid(4)
      },
      borderCircle: {
        cx: grid(2),
        cy: grid(2),
        r: grid(2)
      },
      backgroundCircle: {
        cx: grid(2),
        cy: grid(2),
        r: grid(2),
        fill: 'red'
      },
      whiteCircle: {
        cx: grid(2),
        cy: grid(2),
        r: grid(0.4)
      },
      bulletCircle: {
        cx: grid(2),
        cy: grid(2),
        r: grid(0.4)
      },
      animation: {
        transform: scale => `matrix(${scale}, 0, 0, ${scale}, ${10 - scale * 10}, ${10 - scale * 10})`,
        scale: 4
      }
    },
    checked: {
      animation: {
        scale: 1
      }
    }
  }
}

export default {
  title: 'Radio',

  examples: {
    require: `import Radio from '@klarna/ui/Radio'`,
    type: LIVE_WIDE,

    examples: {
      Regular: <Radio
        onChange={(key) => console.log(key)}
        options={optionsWithContent}
        defaultValue='lorem'
      />,

      'Without content': <Radio
        onChange={(key) => console.log(key)}
        options={options}
      />,

      'Partially collapsed': <Radio
        options={optionsWithContent}
        expandLabel='Show me all the options'
        visibleOptions={1}
      />,

      'Completely collapsed': <Radio
        options={optionsWithContent}
        expandLabel='Show me all the options'
        visibleOptions={0}
      />,

      'Partially collapsed with options that fit the configuration': <Radio
        options={optionsWithContent}
        expandLabel='Show me all the options'
        visibleOptions={50}
      />,

      Controlled: <Radio
        name='radio'
        onChange={(key) => console.log(key)}
        options={options}
        value='ipsum'
      />,

      'Partially collapsed & controlled (not expanded)': <Radio
        options={optionsWithContent}
        expandLabel='Show me all the options'
        visibleOptions={1}
        fullyExpanded={false}
      />,

      'Partially collapsed & controlled (expanded)': <Radio
        options={optionsWithContent}
        expandLabel='Show me all the options'
        visibleOptions={1}
        fullyExpanded
      />,

      Borderless: <Radio
        borderless
        onChange={(key) => console.log(key)}
        options={options}
        defaultValue='lorem'
      />,

      Disabled: <Radio
        disabled
        onChange={(key) => console.log(key)}
        options={options}
        defaultValue='lorem'
      />,

      Loading: <Radio
        loading
        onChange={(key) => console.log(key)}
        options={optionsWithContent}
        value={'lorem'}
      />,

      'One field disabled': <Radio
        onChange={(key) => console.log(key)}
        options={[
          ...optionsWithContent.slice(0, 2),
          {...optionsWithContent[2], disabled: true}
        ]}
        defaultValue='lorem'
      />,

      'Borderless and disabled': <Radio
        borderless
        disabled
        options={options}
        defaultValue='lorem'
      />,

      'With a single option': <Radio
        options={[{
          key: 'lorem',
          label: 'Lorem',
          description: 'Lorem Ipsum is simply dummy.',
          aside: card,
          content: <Paragraph.Secondary condensed>
            Offal man braid XOXO DIY, pok pok tbh poke post-ironic neutra try-hard small batch.
          </Paragraph.Secondary>
        }]}
      />,

      'Dynamic styling': <Radio
        customize={{
          backgroundColor: '#660080',
          borderRadius: '10px',
          bulletColor: '#00ce3e',
          textPrimaryColor: 'green',
          textSecondaryColor: 'red'
        }}
        options={options}
      />,

      'Full styles override': <Radio
        options={options}
        visibleOptions={1}
        expandLabel='Show the other options'
        styles={fullStylesOverride}
      />
    }
  }
}
