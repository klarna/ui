import React from 'react'
import BoxSelector from '../BoxSelector'
import * as Checklist from '../Checklist'
import Dropdown from '../Dropdown'
import * as Paragraph from '../Paragraph'
import Radio from '../Radio'
import Subtitle from '../Subtitle'
import { LIVE } from '../Showroom/variationTypes'


export default {
  title: 'Radio',

  examples: {
    require: `import Radio from '@klarna/ui/Radio'`,
    type: LIVE,

    examples: {
      Regular: <Radio
        name='regular'
        options={[
          {
            label: 'Buy Now, Pay Later',
            name: 'buy-now-pay-later',
            content: <div>
              <BoxSelector
                name='installments'
                layout='horizontal'
                onChange={(key) => console.log('You selected', key)}
                options={[
                  {
                    content: <div>Long one line text in div</div>,
                    key: 'installments_3'
                  },
                  {
                    content: [
                      <div key='1'>$64.17/mo.</div>,
                      <div key='2'>array of elements</div>
                    ],
                    key: 'installments_6'
                  }
                ]}
                defaultValue='installments_6'
              />
              <Checklist.Main style={{marginTop: '20px'}}>
                <Checklist.Item>Just one click and you’re done</Checklist.Item>
                <Checklist.Item>Very little hassle</Checklist.Item>
                <Checklist.Item>Just do it! It can be done today, so why wait for tomorrow?</Checklist.Item>
              </Checklist.Main>
            </div>
          },
          {
            description: 'Pay over time with a low interest rate',
            label: 'Planned Payments',
            name: 'planned-payments',
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
          },
          {
            description: 'Slice it in many payments',
            label: 'Slice it',
            name: 'slice-it',
            content: <Paragraph.Secondary>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          }
        ]}
      />,
      'Right align': <Radio
        radioMarkRight
        name='right-align'
        options={[
          {
            description: 'Buy now and pay 3 months later',
            label: 'Buy Now, Pay Later',
            name: 'buy-now-pay-later',
            content: <Paragraph.Secondary>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Pay over time with a low interest rate',
            label: 'Planned Payments',
            name: 'planned-payments',
            content: <Paragraph.Secondary>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Slice it in many payments',
            label: 'Slice it',
            name: 'slice-it',
            content: <Paragraph.Secondary>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          }
        ]}
      />,
      'Automatic name': <Radio
        radioMarkRight
        options={[
          {
            description: 'Buy now and pay 3 months later',
            label: 'Buy Now, Pay Later',
            name: 'buy-now-pay-later',
            content: <Paragraph.Secondary>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Pay over time with a low interest rate',
            label: 'Planned Payments',
            name: 'planned-payments',
            content: <Paragraph.Secondary>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          },
          {
            description: 'Slice it in many payments',
            label: 'Slice it',
            name: 'slice-it',
            content: <Paragraph.Secondary>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          }
        ]}
      />,
      'Dynamic Styling': <Radio
        customize={{
          backgroundColor: '#660080',
          borderRadius: '10px',
          bulletColor: '#00ce3e',
          textPrimaryColor: 'green',
          textSecondaryColor: 'red'
        }}
        options={[
          {
            label: 'Buy Now, Pay Later',
            name: 'buy-now-pay-later',
            content: <div>
              <BoxSelector
                name='installments'
                layout='horizontal'
                onChange={(key) => console.log('You selected', key)}
                options={[
                  {
                    content: <div>Long one line text in div</div>,
                    key: 'installments_3'
                  },
                  {
                    content: [
                      <div key='1'>$64.17/mo.</div>,
                      <div key='2'>array of elements</div>
                    ],
                    key: 'installments_6'
                  }
                ]}
                defaultValue='installments_6'
              />
              <Checklist.Main style={{marginTop: '20px'}}>
                <Checklist.Item>Just one click and you’re done</Checklist.Item>
                <Checklist.Item>Very little hassle</Checklist.Item>
                <Checklist.Item>Just do it! It can be done today, so why wait for tomorrow?</Checklist.Item>
              </Checklist.Main>
            </div>
          },
          {
            description: 'Pay over time with a low interest rate',
            label: 'Planned Payments',
            name: 'planned-payments',
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
          },
          {
            description: 'Slice it in many payments',
            label: 'Slice it',
            name: 'slice-it',
            content: <Paragraph.Secondary>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          }
        ]}
      />,
      'Full Styles Override': <Radio
        styles={{
          radio: {
            base: {
              main: {
                backgroundColor: 'bisque'
              },
              optionWrapper: {
                backgroundColor: 'skyblue'
              },
              rogueElement: {
                backgroundColor: 'crimson'
              }
            }
          },
          option: {
            base: {
              main: {
                backgroundColor: 'hotpink',
              },
              content: {
                boxShadow: 'inset black 0 0 50px'
              },
              header: {
                textTransform: 'uppercase'
              },
            },
            notFirst: {
              main: {
                backgroundColor: 'green'
              }
            }
          }
        }}
        options={[
          {
            label: 'Buy Now, Pay Later',
            name: 'buy-now-pay-later',
            content: <div>
              <BoxSelector
                name='installments'
                layout='horizontal'
                onChange={(key) => console.log('You selected', key)}
                options={[
                  {
                    content: <div>Long one line text in div</div>,
                    key: 'installments_3'
                  },
                  {
                    content: [
                      <div key='1'>$64.17/mo.</div>,
                      <div key='2'>array of elements</div>
                    ],
                    key: 'installments_6'
                  }
                ]}
                defaultValue='installments_6'
              />
              <Checklist.Main style={{marginTop: '20px'}}>
                <Checklist.Item>Just one click and you’re done</Checklist.Item>
                <Checklist.Item>Very little hassle</Checklist.Item>
                <Checklist.Item>Just do it! It can be done today, so why wait for tomorrow?</Checklist.Item>
              </Checklist.Main>
            </div>
          },
          {
            description: 'Pay over time with a low interest rate',
            label: 'Planned Payments',
            name: 'planned-payments',
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
          },
          {
            description: 'Slice it in many payments',
            label: 'Slice it',
            name: 'slice-it',
            content: <Paragraph.Secondary>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph.Secondary>
          }
        ]}
      />
    }
  }
}
