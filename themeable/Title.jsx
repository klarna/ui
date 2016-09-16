import * as Title from '../Title'
import themeable from '../lib/decorators/themeable'

export const Primary = themeable(Title.Primary, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_header
  }
}))

Primary.displayName = 'ThemeableTitle.Primary'

export const Secondary = themeable(Title.Secondary, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_header
  }
}))

Secondary.displayName = 'ThemeableTitle.Secondary'
