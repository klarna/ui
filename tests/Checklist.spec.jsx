import Checklist from '../components/Checklist'
import { equal, ok } from 'assert'
import { renderer } from './helpers'

const renderChecklist = renderer(Checklist)
const renderChecklistItem = renderer(Checklist.Item)

const items = [
  'Just one click and you\'re done',
  'Very little hassle',
  'Just do it! It can be done today, so why wait for tomorrow?'
]

describe('Checklist', () => {
  describe('default', () => {
    const checklist = renderChecklist(
      {},
      items.map((item, index) =>
        renderChecklistItem({ key: index }, item))
    )

    it('is "ul"', () => {
      equal(checklist.type, 'ul')
    })

    it('has class ".cui__checklist"', () => {
      equal(checklist.props.className, 'cui__checklist')
    })

    items.forEach((item, index) => {
      describe(`item #${index}`, () => {
        const renderedItem = checklist.props.children[index]

        it('is tag "li"', () => {
          equal(renderedItem.type, 'li')
        })

        it('has class ".cui__checklist__item"', () => {
          equal(renderedItem.props.className, 'cui__checklist__item')
        })

        it('has svg icon', () => {
          equal(renderedItem.props.children[0].type, 'svg')
        })

        it('icon has class "cui__checklist__checkmark"', () => {
          equal(renderedItem.props.children[0].props.className, 'cui__checklist__checkmark')
        })

        it('has content of the first item', () => {
          equal(renderedItem.props.children[1], items[index])
        })
      })
    })
  })

  describe('chromeless', () => {
    const checklist = renderChecklist({ chromeless: true }, [])

    it('has class chromeless', () => {
      ok(checklist.props.className.match('chromeless'))
    })
  })
})
