export default (xs, ys) =>
  xs
    .map((x) => ys.map((y) => [x, y]))
    .reduce((a, b) => a.concat(b), [])
