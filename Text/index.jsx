export { default as Amount } from '../Amount'
export { default as Subtitle } from '../Subtitle'
export { default as TextLabel } from '../TextLabel'
import * as TheParagraph from '../Paragraph'
import * as TheTitle from '../Title'

export const Paragraph = TheParagraph
export const Title = TheTitle

const UNTHEMED_STATES = ['error', 'warning']
export const shouldTheme = (adapter) => (customizations, props) => (
  UNTHEMED_STATES.includes(props.color) ? {} : adapter(customizations, props)
)
