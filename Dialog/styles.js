const grid = x => `${x * 5}px`

export default {
  dialog: {
    backgroundColor: 'white',
    borderRadius: grid(1.6),
    height: 'auto',
    margin: `${grid(6)} auto`,
    padding: `${grid(10)} ${grid(12)}`,
    width: grid(87)
  }
}
