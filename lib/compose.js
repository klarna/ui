export default function (...fs) {
  return function (x) {
    return fs.reduceRight(function (acc, f) {
      return f(acc)
    }, x)
  }
}
