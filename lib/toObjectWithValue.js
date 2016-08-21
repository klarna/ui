export default (value) => (list) =>
  list.reduce((accumulator, item) => ({
    ...accumulator,
    [item]: value
  }), {})
