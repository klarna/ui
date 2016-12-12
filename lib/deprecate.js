export default function ({name, replacement, reference}) {
  console && console.error && console.error(
    `Warning: '${name}' is deprecated and will be removed in the next major version.` +
    (replacement ? `\nUse '${replacement}' instead.` : '') +
    (reference ? `\nRead more on ${reference}` : '')
  )
}
