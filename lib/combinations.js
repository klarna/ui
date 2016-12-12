export default function (xs, ys) {
  return xs
    .map(function (x) {
      return ys.map(function (y) {
        return [x, y]
      })
    })
    .reduce(function (a, b) {
      return a.concat(b)
    }, [])
}
