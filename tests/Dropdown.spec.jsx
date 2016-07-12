import Dropdown from '../components/Dropdown'
import { equal, ok } from 'assert'
import { renderer } from './helpers'

const render = renderer(Dropdown)

const label = (dropdown) => dropdown.props.children[0]
const select = (dropdown) => dropdown.props.children[2]

describe('Dropdown', () => {
  describe('default', () => {
    const dropdown = render({
      label: 'Given Name'
    })

    it("renders tag 'div'", () => {
      equal(dropdown.type, 'div')
    })

    it("has className 'cui__dropdown--native'", () => {
      equal(dropdown.props.className, 'cui__dropdown--native')
    })

    describe('label', () => {
      it("renders tag 'label'", () => {
        equal(label(dropdown).type, 'label')
      })

      it("has className 'cui__dropdown--native__label'", () => {
        equal(label(dropdown).props.className, 'cui__dropdown--native__label')
      })
    })

    describe('select', () => {
      it("renders tag 'select'", () => {
        equal(select(dropdown).type, 'select')
      })

      it("has className 'cui__dropdown--native__select'", () => {
        equal(select(dropdown).props.className, 'cui__dropdown--native__select')
      })
    })
  })

  describe('loading', () => {
    const dropdown = render({
      label: 'Given Name',
      loading: true
    })

    it("has className 'is-loading'", () => {
      ok(dropdown.props.className.match('is-loading'))
    })
  })

  describe('disabled', () => {
    const dropdown = render({
      label: 'Given Name',
      disabled: true
    })

    it("has className 'is-disabled'", () => {
      ok(dropdown.props.className.match('is-disabled'))
    })

    describe('select', () => {
      it('is disabled', () => {
        equal(select(dropdown).props.disabled, true)
      })
    })
  })

  describe('error', () => {
    const dropdown = render({
      label: 'Given Name',
      error: true
    })

    it("has className 'is-error'", () => {
      ok(dropdown.props.className.match('is-error'))
    })

    describe('label', () => {
      it("has className 'cui__dropdown--native__floating-label'", () => {
        equal(label(dropdown).props.className, 'cui__dropdown--native__floating-label')
      })
    })
  })

  describe('warning', () => {
    const dropdown = render({
      label: 'Given Name',
      warning: true
    })

    it("has className 'is-warning'", () => {
      ok(dropdown.props.className.match('is-warning'))
    })

    describe('label', () => {
      it("has className 'cui__dropdown--native__floating-label'", () => {
        equal(label(dropdown).props.className, 'cui__dropdown--native__floating-label')
      })
    })
  })

  describe('options', () => {
    const dropdown = render({
      label: 'Given Name',
      options: [
        {
          label: 'John',
          value: 'john'
        },

        {
          label: 'Jane',
          value: 'jane'
        }
      ]
    })

    describe('john', () => {
      it("renders tag 'option'", () => {
        equal(select(dropdown).props.children[0].type, 'option')
      })

      it("has content 'John'", () => {
        equal(select(dropdown).props.children[0].props.children, 'John')
      })

      it("has value 'john'", () => {
        equal(select(dropdown).props.children[0].props.value, 'john')
      })
    })

    describe('jane', () => {
      it("renders tag 'option'", () => {
        equal(select(dropdown).props.children[1].type, 'option')
      })

      it("has content 'Jane'", () => {
        equal(select(dropdown).props.children[1].props.children, 'Jane')
      })

      it("has value 'jane'", () => {
        equal(select(dropdown).props.children[1].props.value, 'jane')
      })
    })
  })

  describe('value', () => {
    describe('match an option', () => {
      const dropdown = render({
        label: 'Given Name',
        value: 'jane',
        options: [
          {
            label: 'Jane',
            value: 'jane'
          }
        ]
      })

      it("has className 'is-selected'", () => {
        ok(dropdown.props.className.match('is-selected'))
      })

      it("has value 'jane'", () => {
        equal(select(dropdown).props.value, 'jane')
      })
    })
  })

  describe('add a className', () => {
    const dropdown = render({
      className: 'extra__className',
      label: 'Given Name'
    })

    it('has the extra className', () => {
      ok(dropdown.props.className.match('extra__className'))
    })
  })

  describe('square', () => {
    const dropdown = render({
      label: 'Something',
      square: true
    })

    it("has className 'square'", () => (
      ok(dropdown.props.className.match('square'))
    ))
  })

  describe('stacked', () => {
    describe('positions', () => {
      [
        'bottom',
        'center',
        'left',
        'right',
        'top'
      ].forEach((position) => {
        describe(`when in position ${position}`, () => {
          const dropdown = render({
            label: `Stacked in ${position}`,
            [position]: true
          })
          it(`has className '${position}'`, () => (
            ok(dropdown.props.className.match(position))
          ))
        })
      })

      return [ 'left', 'right' ].forEach((x) => {
        [ 'bottom', 'top' ].forEach((y) => {
          describe(`when in position ${y} ${x}`, () => {
            const dropdown = render({
              label: `Stacked in ${y} ${x}`,
              [x]: true,
              [y]: true
            })

            it(`has className '${y}-${x}'`, () => (
              ok(dropdown.props.className.match(`${y}-${x}`))
            ))
          })
        })
      })
    })

    describe('sizes', () => {
      const sizesMap = {
        '1/2': 'half',
        '1/3': 'third',
        '2/3': 'two-thirds',
        '1/4': 'quarter',
        '2/4': 'half',
        '3/4': 'three-quarters',
        '1/5': 'twenty',
        '2/5': 'forty',
        '3/5': 'sixty',
        '4/5': 'eighty'
      }

      Object.keys(sizesMap).map((size) => {
        const className = sizesMap[size]

        describe(size, () => {
          const dropdown = render({
            label: 'The half',
            size
          })

          it(`has className '${className}'`, () => {
            ok(dropdown.props.className.match(className))
          })
        })
      })
    })
  })
})
