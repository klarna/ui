import requestAnimationFrame from './requestAnimationFrame'

export default function debounce (fn) {
  let waiting = false

  return function (...args) {
    if (!waiting) {
      waiting = true

      requestAnimationFrame(function () {
        fn(...args)
        waiting = false
      })
    }
  }
}
