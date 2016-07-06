import Amount from '../components/texts/Amount'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import describePalette from './describePalette'

const render = renderer(Amount)

describe('Amount', () => {
  describe('default', () => {
    const primaryTitle = render({}, 'LoremIpsum')

    it('renders tag "p"', () => {
      equal(primaryTitle.type, 'p')
    })

    it('has className "cui__amount-text"', () => {
      ok(primaryTitle.props.className.match('cui__amount-text'))
    })

    it('should have the content', () => {
      ok(primaryTitle.props.children.match('LoremIpsum'))
    })
  })

  describePalette(render)
})
