export default function debounce (func, time = 300) {
  let timeoutId = null

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(func.bind(this, ...arguments), time)
  }
}
