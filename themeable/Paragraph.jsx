import * as Paragraph from '../Paragraph'
import themeable from '../lib/decorators/themeable'

export const Primary = themeable(Paragraph.Primary, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_text
  }
}))

Primary.displayName = 'ThemeableParagraph.Primary'

export const Secondary = themeable(Paragraph.Secondary, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_text_secondary
  }
}))

Secondary.displayName = 'ThemeableParagraph.Secondary'

export const Legal = themeable(Paragraph.Legal, () => ({}))

Legal.displayName = 'ThemeableParagraph.Legal'
