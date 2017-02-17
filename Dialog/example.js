import * as BackdropExample from './examples/BackdropExample'
import * as DialogExample from './examples/DialogExample'
import { MANUAL } from '../Showroom/variationTypes'

export default {
  title: 'Dialog',
  icon: 'Dialog',

  variations: [
    {
      require: DialogExample.require,
      title: 'Dialog',
      type: MANUAL,

      examples: {
        Regular: {
          live: DialogExample.live,
          code: DialogExample.code
        }
      }
    },

    {
      require: BackdropExample.require,
      title: 'Backdrop',
      type: MANUAL,

      examples: {
        Regular: {
          live: BackdropExample.live,
          code: BackdropExample.code
        }
      }
    }
  ]
}
