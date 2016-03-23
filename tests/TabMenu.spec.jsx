/* global describe it */

import TabMenu from '../components/TabMenu'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import times from 'lodash/utility/times'

const render = renderer(TabMenu)
const buildOptions = (n) =>
  times(n, (i) =>
    ({ key: `key-${i + 1}`, label: `Label ${i + 1}` }))

const option = (tabMenu, idx) => tabMenu.props.children[idx]
const input = (tabMenu, idx) => option(tabMenu, idx).props.children[0]
const label = (tabMenu, idx) => option(tabMenu, idx).props.children[1]

describe('TabMenu', () => {
  describe('default', () => {
    const tabMenu = render({ name: 'menu', selected: 'key-2', options: buildOptions(2) })

    it('has className "cui__tab-menu fluid"', () => {
      ok(tabMenu.props.className.match('cui__tab-menu'))
    })

    it('has design "fluid"', () => {
      ok(tabMenu.props.className.match('fluid'))
    })

    describe('first option', () => {
      describe('input', () => {
        it('is a radio input', () => {
          equal(input(tabMenu, 0).type, 'input')
          equal(input(tabMenu, 0).props.type, 'radio')
        })

        it('has className "cui__tab-menu__input"', () => {
          ok(input(tabMenu, 0).props.className.match('cui__tab-menu__input'))
        })

        it('has name "menu"', () => {
          equal(input(tabMenu, 0).props.name, 'menu')
        })

        it('has id "menu-key-1"', () => {
          equal(input(tabMenu, 0).props.id, 'menu-key-1')
        })

        it('is not checked', () => {
          ok(!input(tabMenu, 0).props.defaultChecked)
        })
      })

      describe('label', () => {
        it('is a label', () => {
          equal(label(tabMenu, 0).type, 'label')
        })

        it('has className "cui__tab-menu__button"', () => {
          ok(label(tabMenu, 0).props.className.match('cui__tab-menu__button'))
        })

        it('has htmlFor "menu-key-1"', () => {
          equal(label(tabMenu, 0).props.htmlFor, 'menu-key-1')
        })

        it('has text "Label 1"', () => {
          equal(label(tabMenu, 0).props.children, 'Label 1')
        })
      })
    })

    describe('second option', () => {
      describe('input', () => {
        it('is a radio input', () => {
          equal(input(tabMenu, 1).type, 'input')
          equal(input(tabMenu, 1).props.type, 'radio')
        })

        it('has className "cui__tab-menu__input"', () => {
          ok(input(tabMenu, 1).props.className.match('cui__tab-menu__input'))
        })

        it('has name "menu"', () => {
          equal(input(tabMenu, 1).props.name, 'menu')
        })

        it('has id "menu-key-2"', () => {
          equal(input(tabMenu, 1).props.id, 'menu-key-2')
        })

        it('is checked', () => {
          ok(input(tabMenu, 1).props.defaultChecked)
        })
      })

      describe('label', () => {
        it('is a label', () => {
          equal(label(tabMenu, 1).type, 'label')
        })

        it('has className "cui__tab-menu__button"', () => {
          ok(label(tabMenu, 1).props.className.match('cui__tab-menu__button'))
        })

        it('has htmlFor "menu-key-2"', () => {
          equal(label(tabMenu, 1).props.htmlFor, 'menu-key-2')
        })

        it('has text "Label 2"', () => {
          equal(label(tabMenu, 1).props.children, 'Label 2')
        })
      })
    })
  })

  describe('static', () => {
    const tabMenu = render({ design: 'static', name: 'menu', options: buildOptions(2) })

    it('has className "cui__tab-menu static"', () => {
      equal(tabMenu.props.className, 'cui__tab-menu static')
    })

    describe('tabs sizes', () => {
      it('sets size to 100 divided by the number of options', () => {
        const tabMenu = render({ design: 'static', name: 'menu', options: buildOptions(5) })

        times(5, (i) =>
          equal(label(tabMenu, i).props.style.width, '20%'))
      })
    })
  })
})
