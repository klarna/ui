import grid from '../settings/grid'

export default {
  base: {
    dialog: {
      alignItems: 'center',
      backgroundColor: 'white',
      boxSizing: 'border-box',
      display: 'flex',
      position: 'relative'
    }
  },

  floating: {
    dialog: {
      borderRadius: grid(1.6),
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 'auto',
      width: grid(87)
    }
  },

  fixed: {
    dialog: {
      height: '100%',
      weight: '100%'
    }
  },

  bigPadding: {
    dialog: {
      paddingBottom: grid(10),
      paddingLeft: grid(12),
      paddingRight: grid(12),
      paddingTop: grid(10)
    }
  },

  smallPadding: {
    dialog: {
      paddingBottom: grid(10),
      paddingLeft: grid(8),
      paddingRight: grid(8),
      paddingTop: grid(10)
    }
  }
}
