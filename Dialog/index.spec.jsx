import Dialog from './'
import { ok, equal } from 'assert'
import { renderer } from '../tests/helpers'

const render = renderer(Dialog)
const renderIcon = renderer(Dialog.Icon)
const renderContent = renderer(Dialog.Content)
const renderFooter = renderer(Dialog.Footer)
const renderOverlay = renderer(Dialog.Overlay)

describe('Dialog', () => {
  describe('default', () => {
    const dialog = render({})

    it("renders tag 'div'", () => {
      equal(dialog.type, 'div')
    })

    it("has className 'dialog'", () => {
      equal(dialog.props.className, 'dialog')
    })
  })

  describe('icon', () => {
    const dialog = render({}, renderIcon({}, 'X'))
    const dialogIcon = dialog.props.children

    it("renders tag 'div'", () => {
      equal(dialogIcon.type, 'div')
    })

    it("has className 'dialog__icon'", () => {
      equal(dialogIcon.props.className, 'dialog__icon')
    })

    it('has the content', () => {
      ok(dialogIcon.props.children.match('X'))
    })
  })

  describe('content', () => {
    const dialog = render({}, renderContent({}, 'Some text'))
    const dialogContent = dialog.props.children
    const dialogContentInner = dialogContent.props.children

    it("renders tag 'div'", () => {
      equal(dialogContent.type, 'div')
    })

    it("has className 'dialog__content'", () => {
      equal(dialogContent.props.className, 'dialog__content')
    })

    describe('inner', () => {
      it("renders tag 'div'", () => {
        equal(dialogContentInner.type, 'div')
      })

      it("has className 'dialog__content--inner'", () => {
        equal(dialogContentInner.props.className, 'dialog__content--inner')
      })

      it('has the content', () => {
        ok(dialogContentInner.props.children.match('Some text'))
      })
    })
  })

  describe('footer', () => {
    const dialog = render({}, renderFooter({}, 'Some text'))
    const dialogFooter = dialog.props.children
    const dialogFooterInner = dialogFooter.props.children

    it("renders tag 'div'", () => {
      equal(dialogFooter.type, 'div')
    })

    it("has className 'dialog__footer'", () => {
      equal(dialogFooter.props.className, 'dialog__footer')
    })

    describe('inner', () => {
      it("renders tag 'div'", () => {
        equal(dialogFooterInner.type, 'div')
      })

      it("has className 'dialog__footer--inner'", () => {
        equal(dialogFooterInner.props.className, 'dialog__footer--inner')
      })

      it('has the content', () => {
        ok(dialogFooterInner.props.children.match('Some text'))
      })
    })
  })

  describe('overlay', () => {
    const dialogOverlay = renderOverlay({}, 'Some text')
    const dialogTable = dialogOverlay.props.children
    const dialogCell = dialogTable.props.children

    it("renders tag 'div'", () => {
      equal(dialogOverlay.type, 'div')
    })

    it("has className 'dialog__overlay'", () => {
      equal(dialogOverlay.props.className, 'dialog__overlay')
    })

    describe('table', () => {
      it("renders tag 'div'", () => {
        equal(dialogTable.type, 'div')
      })

      it("has className 'dialog__table'", () => {
        equal(dialogTable.props.className, 'dialog__table')
      })
    })

    describe('cell', () => {
      it("renders tag 'div'", () => {
        equal(dialogCell.type, 'div')
      })

      it("has className 'dialog__cell'", () => {
        equal(dialogCell.props.className, 'dialog__cell')
      })

      it('has the content', () => {
        ok(dialogCell.props.children.match('Some text'))
      })
    })

    describe('show', () => {
      const dialogOverlay = renderOverlay({ show: true })

      it('has class "is-visible"', () => {
        ok(dialogOverlay.props.className.match('is-visible'))
      })
    })
  })
})
