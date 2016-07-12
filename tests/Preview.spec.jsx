import Preview, { PreviewTitle, PreviewLink } from '../components/Preview'
import { equal } from 'assert'
import { renderer } from './helpers'

describe('Preview', () => {
  const render = renderer(Preview)

  describe('default', () => {
    const preview = render()

    it("renders tag 'div'", () => {
      equal('div', preview.type)
    })

    it("has className 'cui__preview'", () => {
      equal('cui__preview', preview.props.className)
    })

    it("contains a div with className 'cui__preview__content'", () => {
      equal('cui__preview__content', preview.props.children.props.className)
    })
  })

  it("allows passing custom 'className' without overriding defaults", () => {
    const preview = render({ className: 'custom' })

    equal('cui__preview custom', preview.props.className)
  })

  it('allows passing children', () => {
    const preview = render({}, 'Test')

    equal('Test', preview.props.children.props.children)
  })
})

describe('PreviewTitle', () => {
  const render = renderer(PreviewTitle)

  describe('default', () => {
    const previewTitle = render()

    it("renders tag 'h2'", () => {
      equal('h2', previewTitle.type)
    })

    it("has className 'cui__preview__title'", () => {
      equal('cui__preview__title', previewTitle.props.className)
    })
  })

  it("allows passing custom 'className' without overriding defaults", () => {
    const previewTitle = render({ className: 'custom' })

    equal('cui__preview__title custom', previewTitle.props.className)
  })

  it('allows passing children', () => {
    const previewTitle = render({}, 'Test')

    equal('Test', previewTitle.props.children)
  })
})

describe('PreviewLink', () => {
  const render = renderer(PreviewLink)
  const link = (component) => component.props.children

  describe('default', () => {
    const previewLink = render()

    it("renders tag 'div'", () => {
      equal('div', previewLink.type)
    })

    it("has className 'cui__preview__footer'", () => {
      equal('cui__preview__footer', previewLink.props.className)
    })

    it('contains link', () => {
      equal('a', link(previewLink).type)
      equal('cui__preview__footer__link', link(previewLink).props.className)
    })
  })

  it("allows passing custom 'className' without overriding link defaults", () => {
    const previewLink = render({ className: 'custom' })

    equal('cui__preview__footer__link custom', link(previewLink).props.className)
  })

  it('allows passing other props to link', () => {
    const previewLink = render({ href: '#test', rel: 'test' })

    equal('#test', link(previewLink).props.href)
    equal('test', link(previewLink).props.rel)
  })

  it('allows passing children', () => {
    const previewLink = render({}, 'Test')

    equal('Test', previewLink.props.children.props.children)
  })
})
