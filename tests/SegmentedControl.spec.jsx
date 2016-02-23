/* global describe it */

import SegmentedControl from '../components/SegmentedControl'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(SegmentedControl)

describe('SegmentedControl', () => {
  describe('default', () => {
    const segmentedControl = render({
      name: 'the-control',
      options: [
        {
          key: 'home',
          label: 'Home'
        },
        {
          checked: true,
          key: 'archive',
          label: 'Archive'
        }
      ]
    })

    it('renders tag "div"', () => {
      equal(segmentedControl.type, 'div')
    })

    it('has className "cui__segmentedcontrol"', () => {
      equal(segmentedControl.props.className, 'cui__segmentedcontrol')
    })

    describe('first option (home)', () => {
      const home = {
        input: segmentedControl.props.children[0],
        label: segmentedControl.props.children[1]
      }

      describe('input', () => {
        it('is an input', () => {
          equal(home.input.type, 'input')
        })

        it('has type radio', () => {
          equal(home.input.props.type, 'radio')
        })

        it('has key input-0', () => {
          equal(home.input.key, 'input-0')
        })

        it('has className "cui__segmentedcontrol__input"', () => {
          ok(home.input.props.className.match('cui__segmentedcontrol__input'))
        })

        it('has the name of the SegmentedControl', () => {
          equal(home.input.props.name, 'the-control')
        })

        it('has id with the SegmentedControl name "-home"', () => {
          equal(home.input.props.id, 'the-control-home')
        })

        it('is not checked', () => {
          ok(!home.input.props.checked)
        })
      })

      describe('label', () => {
        it('is a label', () => {
          equal(home.label.type, 'label')
        })

        it('has key label-0', () => {
          equal(home.label.key, 'label-0')
        })

        it('has className "cui__segmentedcontrol__button"', () => {
          ok(home.label.props.className.match('cui__segmentedcontrol__button'))
        })

        it('has htmlFor with the SegmentedControl name "-home"', () => {
          equal(home.label.props.htmlFor, 'the-control-home')
        })
      })
    })

    describe('second option (archive)', () => {
      const archive = {
        input: segmentedControl.props.children[2],
        label: segmentedControl.props.children[3]
      }

      describe('input', () => {
        it('is an input', () => {
          equal(archive.input.type, 'input')
        })

        it('has type radio', () => {
          equal(archive.input.props.type, 'radio')
        })

        it('has key input-1', () => {
          equal(archive.input.key, 'input-1')
        })

        it('has className "cui__segmentedcontrol__input"', () => {
          ok(archive.input.props.className.match('cui__segmentedcontrol__input'))
        })

        it('has the name of the SegmentedControl', () => {
          equal(archive.input.props.name, 'the-control')
        })

        it('has id with the SegmentedControl name "-archive"', () => {
          equal(archive.input.props.id, 'the-control-archive')
        })

        it('is checked', () => {
          ok(archive.input.props.checked)
        })
      })

      describe('label', () => {
        it('is a label', () => {
          equal(archive.label.type, 'label')
        })

        it('has key label-0', () => {
          equal(archive.label.key, 'label-1')
        })

        it('has className "cui__segmentedcontrol__button"', () => {
          ok(archive.label.props.className.match('cui__segmentedcontrol__button'))
        })

        it('has htmlFor with the SegmentedControl name "-archive"', () => {
          equal(archive.label.props.htmlFor, 'the-control-archive')
        })
      })
    })
  })
})
