export default (s) =>
  s
    .toLowerCase()
    .split(' ')
    .filter((t) => t !== '')
    .map((t) => t.replace(/\W/g, ''))
    .join('-')
