import parseColor from 'parse-color'

export default (design, textColor, backgroundColor) => {
  if (textColor && backgroundColor) {
    const { rgb } = parseColor(design === 'primary' ? textColor : backgroundColor)
    return rgb
  }

  return design === 'primary' ? 'white' : 'blue'
}
