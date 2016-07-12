import { ok } from 'assert'
import palette from '../components/texts/palette'

export default (render) => {
  describe('palette', () => {
    palette.map((color) => {
      it(color, () => {
        ok(render({ color }).props.className.match(color))
      })
    })
  })
}
