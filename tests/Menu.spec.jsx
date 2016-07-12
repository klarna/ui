import Menu from '../components/Menu'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import times from 'ramda/src/times'

const render = renderer(Menu)
const buildOptions = times((i) =>
    ({ key: `key-${i + 1}`, label: `Label ${i + 1}` }))

const option = (menu, idx) => menu.props.children[1][idx]
const input = (menu, idx) => option(menu, idx).props.children[0]
const label = (menu, idx) => option(menu, idx).props.children[1]

describe('Menu', () => {
  describe('tab', () => {
    const menu = render({ name: 'menu', selected: 'key-2', options: buildOptions(2) })

    it('has className "cui__tab-menu"', () => {
      ok(menu.props.className.match('cui__tab-menu'))
    })

    it('has className "fluid"', () => {
      ok(menu.props.className.match('fluid'))
    })

    describe('first option', () => {
      describe('input', () => {
        it('is a radio input', () => {
          equal(input(menu, 0).type, 'input')
          equal(input(menu, 0).props.type, 'radio')
        })

        it('has className "cui__tab-menu__input"', () => {
          ok(input(menu, 0).props.className.match('cui__tab-menu__input'))
        })

        it('has name "menu"', () => {
          equal(input(menu, 0).props.name, 'menu')
        })

        it('has id "menu-key-1"', () => {
          equal(input(menu, 0).props.id, 'menu-key-1')
        })

        it('is not checked', () => {
          ok(!input(menu, 0).props.defaultChecked)
        })
      })

      describe('label', () => {
        it('is a label', () => {
          equal(label(menu, 0).type, 'label')
        })

        it('has className "cui__tab-menu__button"', () => {
          ok(label(menu, 0).props.className.match('cui__tab-menu__button'))
        })

        it('has htmlFor "menu-key-1"', () => {
          equal(label(menu, 0).props.htmlFor, 'menu-key-1')
        })

        it('has text "Label 1"', () => {
          equal(label(menu, 0).props.children, 'Label 1')
        })
      })
    })

    describe('second option', () => {
      describe('input', () => {
        it('is a radio input', () => {
          equal(input(menu, 1).type, 'input')
          equal(input(menu, 1).props.type, 'radio')
        })

        it('has className "cui__tab-menu__input"', () => {
          ok(input(menu, 1).props.className.match('cui__tab-menu__input'))
        })

        it('has name "menu"', () => {
          equal(input(menu, 1).props.name, 'menu')
        })

        it('has id "menu-key-2"', () => {
          equal(input(menu, 1).props.id, 'menu-key-2')
        })

        it('is checked', () => {
          ok(input(menu, 1).props.defaultChecked)
        })
      })

      describe('label', () => {
        it('is a label', () => {
          equal(label(menu, 1).type, 'label')
        })

        it('has className "cui__tab-menu__button"', () => {
          ok(label(menu, 1).props.className.match('cui__tab-menu__button'))
        })

        it('has htmlFor "menu-key-2"', () => {
          equal(label(menu, 1).props.htmlFor, 'menu-key-2')
        })

        it('has text "Label 2"', () => {
          equal(label(menu, 1).props.children, 'Label 2')
        })
      })
    })

    describe('static', () => {
      const menu = render({ tabDisplay: 'static', name: 'menu', options: buildOptions(2) })

      it('has className "static"', () => {
        ok(menu.props.className.match('static'))
      })

      describe('tab sizes', () => {
        it('sets size to 100 divided by the number of options', () => {
          const menu = render({ tabDisplay: 'static', name: 'menu', options: buildOptions(5) })

          times((i) =>
            equal(label(menu, i).props.style.width, '20%'), 5)
        })
      })
    })
  })

  describe('segmented', () => {
    const menu = render({ design: 'segmented', name: 'menu', options: buildOptions(2) })

    it('has className "cui__segmentedcontrol"', () => {
      ok(menu.props.className.match('cui__segmentedcontrol'))
    })

    describe('tab positions', () => {
      it('sets tab positions to "left", "center" and "right"', () => {
        const menu = render({ design: 'segmented', tabDisplay: 'static', name: 'menu', options: buildOptions(4) })

        ok(label(menu, 0).props.className.match('left'))
        ok(label(menu, 1).props.className.match('center'))
        ok(label(menu, 2).props.className.match('center'))
        ok(label(menu, 3).props.className.match('right'))
      })
    })
  })
})
