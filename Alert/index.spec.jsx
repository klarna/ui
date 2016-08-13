import * as Alert from './'
import { ok, equal } from 'assert'
import { renderer } from '../tests/helpers'

const render = renderer(Alert.Main)
const renderTitle = renderer(Alert.Title)
const renderParagraph = renderer(Alert.Paragraph)

describe('Alert', () => {
  describe('error', () => {
    const alert = render({design: 'error'}, [
      renderTitle({}, 'Header'),
      renderParagraph({}, 'LoremIpsum')
    ])
    const title = alert.props.children[0]
    const paragraph = alert.props.children[1]

    it("renders tag 'div'", () => {
      equal(alert.type, 'div')
    })

    it("has className 'alert--error'", () => {
      ok(alert.props.className.match('alert--error'))
    })

    it('should have the content', () => {
      equal(alert.props.children.length, 2)
      ok(title.props.children.match('Header'))
      ok(paragraph.props.children.match('LoremIpsum'))
    })
  })

  describe('Title', () => {
    const alert = render({design: 'error'}, renderTitle({}, 'Header'))
    const title = alert.props.children

    it("renders tag 'h1'", () => {
      equal(title.type, 'h1')
    })

    it("has className 'alert__title'", () => {
      ok(title.props.className.match('alert__title'))
    })

    it('should have the content', () => {
      ok(title.props.children.match('Header'))
    })
  })

  describe('Paragraph', () => {
    const alert = render({design: 'error'}, renderParagraph({}, 'LoremIpsum'))
    const paragraph = alert.props.children

    it("renders tag 'p'", () => {
      equal(paragraph.type, 'p')
    })

    it("has className 'alert__paragraph'", () => {
      ok(paragraph.props.className.match('alert__paragraph'))
    })

    it('should have the content', () => {
      ok(paragraph.props.children.match('LoremIpsum'))
    })
  })
})
