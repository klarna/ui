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

  desktop: {
    dialog: {
      borderRadius: grid(1.6),
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 'auto',
      paddingBottom: grid(10),
      paddingLeft: grid(12),
      paddingRight: grid(12),
      paddingTop: grid(10),
      width: grid(87)
    }
  },

  narrow: {
    dialog: {
      height: '100%',
      paddingBottom: grid(10),
      paddingLeft: grid(6),
      paddingRight: grid(6),
      paddingTop: grid(10),
      weight: '100%'
    }
  },

  mobile: {
    dialog: {
      height: '100%',
      paddingBottom: grid(10),
      paddingLeft: grid(12),
      paddingRight: grid(12),
      paddingTop: grid(10),
      weight: '100%'
    }
  }
}
