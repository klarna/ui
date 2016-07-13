import Dialog from '../components/Dialog'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

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

    it("has className 'cui__dialog'", () => {
      equal(dialog.props.className, 'cui__dialog')
    })
  })

  describe('icon', () => {
    const dialog = render({}, renderIcon({}, 'X'))
    const dialogIcon = dialog.props.children

    it("renders tag 'div'", () => {
      equal(dialogIcon.type, 'div')
    })

    it("has className 'cui__dialog__icon'", () => {
      equal(dialogIcon.props.className, 'cui__dialog__icon')
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

    it("has className 'cui__dialog__content'", () => {
      equal(dialogContent.props.className, 'cui__dialog__content')
    })

    describe('inner', () => {
      it("renders tag 'div'", () => {
        equal(dialogContentInner.type, 'div')
      })

      it("has className 'cui__dialog__content--inner'", () => {
        equal(dialogContentInner.props.className, 'cui__dialog__content--inner')
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

    it("has className 'cui__dialog__footer'", () => {
      equal(dialogFooter.props.className, 'cui__dialog__footer')
    })

    describe('inner', () => {
      it("renders tag 'div'", () => {
        equal(dialogFooterInner.type, 'div')
      })

      it("has className 'cui__dialog__footer--inner'", () => {
        equal(dialogFooterInner.props.className, 'cui__dialog__footer--inner')
      })

      it('has the content', () => {
        ok(dialogFooterInner.props.children.match('Some text'))
      })
    })
  })

  describe('overlay', () => {
    const dialogOverlay = renderOverlay({}, 'Some text')
    const dialogWrapper = dialogOverlay.props.children

    it("renders tag 'div'", () => {
      equal(dialogOverlay.type, 'div')
    })

    it("has className 'cui__dialog__overlay'", () => {
      equal(dialogOverlay.props.className, 'cui__dialog__overlay')
    })

    describe('wrapper', () => {
      it("renders tag 'div'", () => {
        equal(dialogWrapper.type, 'div')
      })

      it("has className 'cui__dialog__footer--inner'", () => {
        equal(dialogWrapper.props.className, 'cui__dialog__wrapper')
      })

      it('has the content', () => {
        ok(dialogWrapper.props.children.match('Some text'))
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
