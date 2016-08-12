import Installments from '../components/Installments'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import times from 'ramda/src/times'

const render = renderer(Installments)
const buildOptions = times(
  (i) => ({
    key: `key-${i + 1}`,
    connector: `Connector ${i + 1}`,
    info: `Info ${i + 1}`,
    value: `Value ${i + 1}`
  })
)

const child = (installments, idx) => installments.props.children[idx]

describe('Installments', () => {
  const installments = render({
    name: 'installments',
    value: 'key-2',
    options: buildOptions(2)
  })

  it('has className "cui__selector--installments"', () => {
    ok(installments.props.className.match('cui__selector--installments'))
  })

  describe('first option', () => {
    describe('input', () => {
      const input = child(installments, 0)

      it('is a radio input', () => {
        equal(input.type, 'input')
        equal(input.props.type, 'radio')
      })

      it('has className "cui__selector--installments__input"', () => {
        ok(input.props.className.match('cui__selector--installments__input'))
      })

      it('has name "installments"', () => {
        equal(input.props.name, 'installments')
      })

      it('has id "installments-key-1"', () => {
        equal(input.props.id, 'installments-key-1')
      })

      it('is not checked', () => {
        ok(!input.props.checked)
      })
    })

    describe('label', () => {
      const label = child(installments, 1)

      it('is a label', () => {
        equal(label.type, 'label')
      })

      it('has className "cui__selector--installments__label"', () => {
        ok(label.props.className.match('cui__selector--installments__label'))
      })

      it('has htmlFor "installments-key-1"', () => {
        equal(label.props.htmlFor, 'installments-key-1')
      })

      describe('value', () => {
        const value = label.props.children[0]

        it('is a "span"', () => {
          equal(value.type, 'span')
        })

        it('has className "cui__selector--installments__label__value"', () => {
          equal(value.props.className, 'cui__selector--installments__label__value')
        })

        it('has the value content', () => {
          equal(value.props.children, 'Value 1')
        })
      })

      describe('connector', () => {
        const connector = label.props.children[1]

        it('is a "span"', () => {
          equal(connector.type, 'span')
        })

        it('has className "cui__selector--installments__label__connector"', () => {
          equal(connector.props.className, 'cui__selector--installments__label__connector')
        })

        it('has the connector content', () => {
          equal(connector.props.children, 'Connector 1')
        })
      })

      describe('info', () => {
        const info = label.props.children[2]

        it('is a "span"', () => {
          equal(info.type, 'span')
        })

        it('has className "cui__selector--installments__label__info"', () => {
          equal(info.props.className, 'cui__selector--installments__label__info')
        })

        it('has the info content', () => {
          equal(info.props.children, 'Info 1')
        })
      })
    })
  })

  describe('second option', () => {
    describe('input', () => {
      const input = child(installments, 2)

      it('is a radio input', () => {
        equal(input.type, 'input')
        equal(input.props.type, 'radio')
      })

      it('has className "cui__selector--installments__input"', () => {
        ok(input.props.className.match('cui__selector--installments__input'))
      })

      it('has name "installments"', () => {
        equal(input.props.name, 'installments')
      })

      it('has id "installments-key-2"', () => {
        equal(input.props.id, 'installments-key-2')
      })

      it('is checked', () => {
        ok(input.props.checked)
      })
    })

    describe('label', () => {
      const label = child(installments, 3)

      it('is a label', () => {
        equal(label.type, 'label')
      })

      it('has className "cui__selector--installments__label"', () => {
        ok(label.props.className.match('cui__selector--installments__label'))
      })

      it('has htmlFor "installments-key-2"', () => {
        equal(label.props.htmlFor, 'installments-key-2')
      })

      describe('value', () => {
        const value = label.props.children[0]

        it('is a "span"', () => {
          equal(value.type, 'span')
        })

        it('has className "cui__selector--installments__label__value"', () => {
          equal(value.props.className, 'cui__selector--installments__label__value')
        })

        it('has the value content', () => {
          equal(value.props.children, 'Value 2')
        })
      })

      describe('connector', () => {
        const connector = label.props.children[1]

        it('is a "span"', () => {
          equal(connector.type, 'span')
        })

        it('has className "cui__selector--installments__label__connector"', () => {
          equal(connector.props.className, 'cui__selector--installments__label__connector')
        })

        it('has the connector content', () => {
          equal(connector.props.children, 'Connector 2')
        })
      })

      describe('info', () => {
        const info = label.props.children[2]

        it('is a "span"', () => {
          equal(info.type, 'span')
        })

        it('has className "cui__selector--installments__label__info"', () => {
          equal(info.props.className, 'cui__selector--installments__label__info')
        })

        it('has the info content', () => {
          equal(info.props.children, 'Info 2')
        })
      })
    })
  })
})
