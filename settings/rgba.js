import curry from 'ramda/src/curry'

export default curry((red, green, blue, alpha) =>
  `rgba(${red}, ${green}, ${blue}, ${alpha})`)
